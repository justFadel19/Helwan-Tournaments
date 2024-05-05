package com.fcaih.helwantournaments.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fcaih.helwantournaments.model.Match;

public interface MatchRepository extends JpaRepository<Match, Long> {

}