package com.fcaih.helwantournaments.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.fcaih.helwantournaments.exception.EntityNotFoundException;
import com.fcaih.helwantournaments.model.Tournament;
import com.fcaih.helwantournaments.repository.TournamentRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class TournamentServiceImpl implements TournamentService {

    private TournamentRepository tournamentRepository;

    @Override
    public Tournament saveTournament(Tournament tournament) {
        return tournamentRepository.save(tournament);
    }

    @Override
    public Tournament getTournamentById(Long id) {
        Optional<Tournament> tournament = tournamentRepository.findById(id);
        return unwrapTournament(tournament, id);
    }

    @Override
    public List<Tournament> getAllTournaments() {
        return tournamentRepository.findAll();
    }

    @Override
    public void deleteTournament(Long id) {
        tournamentRepository.deleteById(id);
    }

    @Override
    public Tournament updateTournamentName(Long id, String name) {
        Optional<Tournament> tournament = tournamentRepository.findById(id);
        Tournament unwrappedTournament = unwrapTournament(tournament, id);
        unwrappedTournament.setName(name);
        tournamentRepository.save(unwrappedTournament);
        return unwrappedTournament;
    }

    @Override
    public Tournament updateTournamentDescription(Long id, String description) {
        Optional<Tournament> tournament = tournamentRepository.findById(id);
        Tournament unwrappedTournament = unwrapTournament(tournament, id);
        unwrappedTournament.setDescription(description);
        tournamentRepository.save(unwrappedTournament);
        return unwrappedTournament;
    }

    @Override
    public Tournament updateTournamentStartDate(Long id, Date startDate) {
        Optional<Tournament> tournament = tournamentRepository.findById(id);
        Tournament unwrappedTournament = unwrapTournament(tournament, id);
        unwrappedTournament.setStartDate(startDate);
        tournamentRepository.save(unwrappedTournament);
        return unwrappedTournament;
    }

    @Override
    public Tournament updateTournamentEndDate(Long id, Date endDate) {
        Optional<Tournament> tournament = tournamentRepository.findById(id);
        Tournament unwrappedTournament = unwrapTournament(tournament, id);
        unwrappedTournament.setEndDate(endDate);
        tournamentRepository.save(unwrappedTournament);
        return unwrappedTournament;
    }

    static Tournament unwrapTournament(Optional<Tournament> entity, Long id) {
        if (entity.isPresent()) return entity.get();
        else throw new EntityNotFoundException(id, Tournament.class);
    }
}