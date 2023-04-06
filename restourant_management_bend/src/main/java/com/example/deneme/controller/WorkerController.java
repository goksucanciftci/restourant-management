package com.example.deneme.controller;



import com.example.deneme.model.Worker;
import com.example.deneme.repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
@CrossOrigin
public class WorkerController {

    @Autowired
    private WorkerRepository workerRepository;

    @GetMapping("/workers")
    public List<Worker> getAllWorkers(){
        return workerRepository.findAll();
    }//get all workers

    @GetMapping("/workers/{id}")
    public ResponseEntity<Worker> getWorkersById(@PathVariable(value = "id") long workerId){
        Worker worker = workerRepository.findById(workerId)
                .orElseThrow(()->new ResourceNotFoundException("Not Found"));
        return ResponseEntity.ok().body(worker);
    }// get worker by ID

    @DeleteMapping("/workers/{id}")
    public ResponseEntity<Object> deleteWorker(@PathVariable(value = "id") long workerId)throws ResourceNotFoundException{
        Worker worker = workerRepository.findById(workerId)
                .orElseThrow(()->new ResourceNotFoundException("Not Found"));
        workerRepository.deleteById(workerId);
        return ResponseEntity.ok().build();
    }// delete Worker

    @PutMapping("/workers/{id}")
    public ResponseEntity<Worker> updateWorker(@PathVariable(value = "id") long workerId, @Valid @RequestBody Worker workerDetails) throws ResourceNotFoundException{
        Worker worker = workerRepository.findById(workerId)
                .orElseThrow(()->new ResourceNotFoundException("Not Found"));
        worker.setFirstname(workerDetails.getFirstname());
        worker.setLastname(workerDetails.getLastname());
        worker.setRole(workerDetails.getRole());
        final Worker updatedWorker = workerRepository.save(worker);
        return ResponseEntity.ok(updatedWorker);
    }//update worker

    @PostMapping("/workers")
    public Worker createWorker(@RequestBody Worker worker){
        return workerRepository.save(worker);
    }// create single worker

}
