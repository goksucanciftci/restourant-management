package com.example.deneme.controller;

import com.example.deneme.model.OnlineCustomer;

import com.example.deneme.repository.OnlineCustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
@CrossOrigin
public class OnlineCustomerController {

    @Autowired
    private OnlineCustomerRepository customerRepository;

    @GetMapping("/customers")
    public List<OnlineCustomer> getAllCustomers(){
        return customerRepository.findAll();
    }//get all customers

    @GetMapping("/customers/{id}")
    public ResponseEntity<OnlineCustomer> getCustomersById(@PathVariable(value = "id") long customerId){
        OnlineCustomer customer = customerRepository.findById(customerId)
                .orElseThrow(()->new ResourceNotFoundException("Not Found"));
        return ResponseEntity.ok().body(customer);
    }// get customer by ID

    @DeleteMapping("/customers/{id}")
    public ResponseEntity<Object> deleteCustomer(@PathVariable(value = "id") long customerId)throws ResourceNotFoundException{
        OnlineCustomer customer = customerRepository.findById(customerId)
                .orElseThrow(()->new ResourceNotFoundException("Not Found"));
        customerRepository.deleteById(customerId);
        return ResponseEntity.ok().build();
    }// deleteCustomer

    @PutMapping("/customers/{id}")
    public ResponseEntity<OnlineCustomer> updateCustomer(@PathVariable(value = "id") long customerId, @Valid @RequestBody OnlineCustomer customerDetails) throws ResourceNotFoundException{
        OnlineCustomer customer = customerRepository.findById(customerId)
                .orElseThrow(()->new ResourceNotFoundException("Not Found"));
        customer.setFirstname(customerDetails.getFirstname());
        customer.setLastname(customerDetails.getLastname());
        customer.setEmail(customerDetails.getEmail());
        customer.setPhonenumber(customerDetails.getPhonenumber());
        customer.setAddress(customerDetails.getAddress());
        final OnlineCustomer updatedCustomer = customerRepository.save(customer);
        return ResponseEntity.ok(updatedCustomer);
    }//update customer

    @PostMapping("/customers")
    public OnlineCustomer createCustomer(@RequestBody OnlineCustomer customer){
        return customerRepository.save(customer);
    }// create single customer

    @GetMapping("/customers/{phonenumber}")
    public List<OnlineCustomer> getCustomerByPhoneNumber(@PathVariable(value = "phonenumber") int PhoneNumber){
        return customerRepository.getOnlineCustomerByPhoneNumber(PhoneNumber);
    }

}
