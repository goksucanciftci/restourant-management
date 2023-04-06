package com.example.deneme.controller;

import com.example.deneme.model.Food;

import com.example.deneme.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
@CrossOrigin
public class FoodController {

    @Autowired
    private FoodRepository foodRepository;

    @GetMapping("/food")
    public List<Food> getAllCustomers(){
        return foodRepository.findAll();
    }//get all food

    @GetMapping("/food/{id}")
    public ResponseEntity<Food> getFoodById(@PathVariable(value = "id") long foodId){
        Food food = foodRepository.findById(foodId)
                .orElseThrow(()->new ResourceNotFoundException("Not Found"));
        return ResponseEntity.ok().body(food);
    }// get food by ID

    @DeleteMapping("/food/{id}")
    public ResponseEntity<Object> deleteFood(@PathVariable(value = "id") long foodId)throws ResourceNotFoundException{
        Food food = foodRepository.findById(foodId)
                .orElseThrow(()->new ResourceNotFoundException("Not Found"));
        foodRepository.deleteById(foodId);
        return ResponseEntity.ok().build();
    }// delete food

    @PutMapping("/food/{id}")
    public ResponseEntity<Food> updateFood(@PathVariable(value = "id") long foodId, @Valid @RequestBody Food foodDetails) throws ResourceNotFoundException{
        Food food = foodRepository.findById(foodId)
                .orElseThrow(()->new ResourceNotFoundException("Not Found"));
        food.setFoodId(foodDetails.getFoodId());
        food.setFoodname(foodDetails.getFoodname());
        food.setPrice(foodDetails.getPrice());
        food.setType(foodDetails.getType());
        final Food updatedFood = foodRepository.save(food);
        return ResponseEntity.ok(updatedFood);
    }//update food

    @PostMapping("/food")
    public Food createFood(@RequestBody Food food){
        return foodRepository.save(food);
    }// create single food

}
