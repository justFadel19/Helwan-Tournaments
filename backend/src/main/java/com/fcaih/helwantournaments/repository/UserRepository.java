package com.fcaih.helwantournaments.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fcaih.helwantournaments.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
    User findByUsername(String username);
    User findByEmail(String email);
}