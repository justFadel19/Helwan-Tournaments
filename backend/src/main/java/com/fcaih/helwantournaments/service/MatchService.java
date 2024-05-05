package com.fcaih.helwantournaments.service;

import java.util.Date;

import com.fcaih.helwantournaments.model.Match;

public interface MatchService {
    Match saveMatch(Match match);
    Match getMatchById(Long id);
    void deleteMatch(Long id);
    Match updateMatchResult(Long id, String result);
    Match updateMatchDate(Long id, Date date);
}