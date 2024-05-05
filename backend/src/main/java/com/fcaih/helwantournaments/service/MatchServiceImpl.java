package com.fcaih.helwantournaments.service;

import java.util.Date;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.fcaih.helwantournaments.exception.EntityNotFoundException;
import com.fcaih.helwantournaments.model.Match;
import com.fcaih.helwantournaments.repository.MatchRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class MatchServiceImpl implements MatchService {

    private MatchRepository matchRepository;

    @Override
    public Match saveMatch(Match match) {
        return matchRepository.save(match);
    }

    @Override
    public Match getMatchById(Long id) {
        Optional<Match> match = matchRepository.findById(id);
        return unwrapMatch(match, id);
    }

    @Override
    public void deleteMatch(Long id) {
        matchRepository.deleteById(id);
    }

    @Override
    public Match updateMatchResult(Long id, String result) {
        Optional<Match> match = matchRepository.findById(id);
        Match unwrappedMatch = unwrapMatch(match, id);
        unwrappedMatch.setResult(result);
        return unwrappedMatch;
    }

    @Override
    public Match updateMatchDate(Long id, Date date) {
        Optional<Match> match = matchRepository.findById(id);
        Match unwrappedMatch = unwrapMatch(match, id);
        unwrappedMatch.setMatchDate(date);
        return unwrappedMatch;
    }

    static Match unwrapMatch(Optional<Match> entity, Long id) {
        if (entity.isPresent()) return entity.get();
        else throw new EntityNotFoundException(id, Match.class);
    }
}