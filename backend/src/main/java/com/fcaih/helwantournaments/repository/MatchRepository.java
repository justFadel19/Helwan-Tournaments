package com.fcaih.helwantournaments.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fcaih.helwantournaments.model.Match;

public interface MatchRepository extends JpaRepository<Match, Long> {
   List<Match> findByTournamentId(Long tournamentId);
}