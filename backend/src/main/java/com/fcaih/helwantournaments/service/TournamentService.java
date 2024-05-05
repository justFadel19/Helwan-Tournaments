package com.fcaih.helwantournaments.service;

import java.util.Date;
import java.util.List;

import com.fcaih.helwantournaments.model.Tournament;

public interface TournamentService {
    Tournament saveTournament(Tournament tournament);
    Tournament getTournamentById(Long id);
    List<Tournament> getAllTournaments();
    void deleteTournament(Long id);
    Tournament updateTournamentName(Long id, String name);
    Tournament updateTournamentDescription(Long id, String description);
    Tournament updateTournamentStartDate(Long id, Date startDate);
    Tournament updateTournamentEndDate(Long id, Date endDate);
}