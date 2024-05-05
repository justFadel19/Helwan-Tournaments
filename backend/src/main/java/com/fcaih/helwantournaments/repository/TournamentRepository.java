package com.fcaih.helwantournaments.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fcaih.helwantournaments.model.Tournament;

public interface TournamentRepository extends JpaRepository<Tournament, Long> {

}