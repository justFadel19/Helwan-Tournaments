package com.fcaih.helwantournaments.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
@RequiredArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @NonNull
    @Column(nullable = false, unique = true)
    private String username;

    @NotBlank
    @NonNull
    @Column(nullable = false, unique = true)
    private String email;

    @NotBlank
    @NonNull
    @Column(nullable = false, unique = true)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private UserRole role;

    // Enum representing user roles
    public enum UserRole {
        ADMIN,
        ORGANIZER,
        PLAYER
    }
}