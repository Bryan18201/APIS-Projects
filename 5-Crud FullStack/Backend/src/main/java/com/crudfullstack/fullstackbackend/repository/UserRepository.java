package com.crudfullstack.fullstackbackend.repository;

import com.crudfullstack.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User,Long> {

}
