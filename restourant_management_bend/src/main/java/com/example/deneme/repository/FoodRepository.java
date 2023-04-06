package com.example.deneme.repository;

import com.example.deneme.model.Food;
import com.example.deneme.model.OnlineCustomer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends JpaRepository <Food,Long>{

}
