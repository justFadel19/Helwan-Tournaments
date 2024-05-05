package com.fcaih.helwantournaments.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.fcaih.helwantournaments.exception.EntityNotFoundException;
import com.fcaih.helwantournaments.model.User;
import com.fcaih.helwantournaments.repository.UserRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        // do the password hashing here.
        return userRepository.save(user);
    }

    @Override
    public User getUserByUsername(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        return unwrapUser(user, 404L);
    }

    @Override
    public User getUserByEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        return unwrapUser(user, 404L);
    }

    @Override
    public User getUserById(Long id) {
        Optional<User> user = userRepository.findById(id);
        return unwrapUser(user, id);
    }

    @Override
    public void deleteUser(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        Long id = unwrapUser(user, 404L).getId();
        userRepository.deleteById(id);
    }

    static User unwrapUser(Optional<User> entity, Long id) {
        if (entity.isPresent()) return entity.get();
        else throw new EntityNotFoundException(id, User.class);
    }

}