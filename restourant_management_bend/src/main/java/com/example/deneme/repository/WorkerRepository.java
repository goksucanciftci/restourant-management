package com.example.deneme.repository;


import com.example.deneme.model.Worker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkerRepository extends JpaRepository <Worker,Long>{

}

