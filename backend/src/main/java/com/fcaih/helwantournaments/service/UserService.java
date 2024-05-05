package com.fcaih.helwantournaments.service;

import com.fcaih.helwantournaments.model.User;

public interface UserService {
    User saveUser(User user);
    User getUserByUsername(String username);
    User getUserByEmail(String email);
    User getUserById(Long id);
    void deleteUser(String username);
}