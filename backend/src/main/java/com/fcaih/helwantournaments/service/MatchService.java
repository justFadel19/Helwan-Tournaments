package com.fcaih.helwantournaments.service;

import java.util.Date;
import java.util.List;

import com.fcaih.helwantournaments.model.Match;

public interface MatchService {
    Match saveMatch(Match match, Long tournamentId, Long team1Id, Long team2Id);
    Match getMatchById(Long id);
    List<Match> getAllMatches();
    List<Match> getAllMatchesByTournamentId(Long tournamentId);
    void deleteMatch(Long id);
    Match updateMatchResult(Long id, String result);
    Match updateMatchDate(Long id, Date date);
}