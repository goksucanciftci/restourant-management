package com.example.deneme.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;


@Getter
@Setter
@Entity
@Table(name = "Food")
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class Food  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "foodId")
    private long foodId;

    @Column(name = "foodname")
    private String foodname;

    @Column(name = "price")
    private int price;

    @Column(name = "type")
    private String type;



}
