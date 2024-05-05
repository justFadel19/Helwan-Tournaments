package com.fcaih.helwantournaments.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.fcaih.helwantournaments.exception.EntityNotFoundException;
import com.fcaih.helwantournaments.model.Match;
import com.fcaih.helwantournaments.model.Tournament;
import com.fcaih.helwantournaments.model.Team;
import com.fcaih.helwantournaments.repository.MatchRepository;
import com.fcaih.helwantournaments.repository.TournamentRepository;
import com.fcaih.helwantournaments.repository.TeamRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class MatchServiceImpl implements MatchService {

    private MatchRepository matchRepository;
    private TournamentRepository tournamentRepository;
    private TeamRepository teamRepository;

    @Override
    public Match saveMatch(Match match, Long tournamentId, Long team1Id, Long team2Id) {
        Tournament tournament = TournamentServiceImpl.unwrapTournament(tournamentRepository.findById(tournamentId), tournamentId);
        Team team1 = TeamServiceImpl.unwrapTeam(teamRepository.findById(team1Id), team1Id);
        Team team2 = TeamServiceImpl.unwrapTeam(teamRepository.findById(team2Id), team2Id);
        match.setTournament(tournament);
        match.setTeam1(team1);
        match.setTeam2(team2);
        return matchRepository.save(match);
    }

    @Override
    public Match getMatchById(Long id) {
        Optional<Match> match = matchRepository.findById(id);
        return unwrapMatch(match, id);
    }

    @Override
    public List<Match> getAllMatches() {
        return matchRepository.findAll();
    }

    @Override
    public List<Match> getAllMatchesByTournamentId(Long tournamentId) {
        return matchRepository.findByTournamentId(tournamentId);
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
        matchRepository.save(unwrappedMatch);
        return unwrappedMatch;
    }

    @Override
    public Match updateMatchDate(Long id, Date date) {
        Optional<Match> match = matchRepository.findById(id);
        Match unwrappedMatch = unwrapMatch(match, id);
        unwrappedMatch.setMatchDate(date);
        matchRepository.save(unwrappedMatch);
        return unwrappedMatch;
    }

    static Match unwrapMatch(Optional<Match> entity, Long id) {
        if (entity.isPresent()) return entity.get();
        else throw new EntityNotFoundException(id, Match.class);
    }
}