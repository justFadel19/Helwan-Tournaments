package com.fcaih.helwantournaments.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fcaih.helwantournaments.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
}