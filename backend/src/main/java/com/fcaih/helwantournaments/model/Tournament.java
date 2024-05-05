package com.fcaih.helwantournaments.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name = "tournaments")
@Getter
@Setter
@RequiredArgsConstructor
@NoArgsConstructor
public class Tournament {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @NonNull
    @Column(nullable = false, unique = true)
    private String name;

    @NotBlank
    @NonNull
    @Column(nullable = false)
    private String description;

    @NotBlank
    @NonNull
    @Column(name = "start_date", nullable = false)
    private Date startDate;

    @NotBlank
    @NonNull
    @Column(name = "end_date", nullable = false)
    private Date endDate;
}