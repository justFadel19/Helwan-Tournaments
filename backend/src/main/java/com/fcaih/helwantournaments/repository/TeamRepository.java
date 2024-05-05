package com.fcaih.helwantournaments.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fcaih.helwantournaments.model.Team;

public interface TeamRepository extends JpaRepository<Team, Long> {

}