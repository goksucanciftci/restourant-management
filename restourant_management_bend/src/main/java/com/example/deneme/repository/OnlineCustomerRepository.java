package com.example.deneme.repository;

import com.example.deneme.model.OnlineCustomer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OnlineCustomerRepository extends JpaRepository <OnlineCustomer,Long>{

    @Query(value = "select *\n" +
            "from online_customer where phonenumber =:PhoneNumber", nativeQuery = true)
    List<OnlineCustomer> getOnlineCustomerByPhoneNumber( int PhoneNumber);


}
