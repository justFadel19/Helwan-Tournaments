package com.fcaih.helwantournaments.security.manager;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import com.fcaih.helwantournaments.model.User;
import com.fcaih.helwantournaments.service.UserService;

import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class CustomAuthenticationManager implements AuthenticationManager {

    private UserService userServiceImpl;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        User user = userServiceImpl.getUserByUsername(authentication.getName());
        if (!bCryptPasswordEncoder.matches(authentication.getCredentials().toString(), user.getPassword())) {
            throw new BadCredentialsException("You provided a wrong password!");
        }
        return new UsernamePasswordAuthenticationToken(authentication.getName(), user.getPassword());
    }

}