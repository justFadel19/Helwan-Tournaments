package com.fcaih.helwantournaments.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.fcaih.helwantournaments.exception.EntityNotFoundException;
import com.fcaih.helwantournaments.model.Team;
import com.fcaih.helwantournaments.model.User;
import com.fcaih.helwantournaments.repository.TeamRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class TeamServiceImpl implements TeamService {

    private TeamRepository teamRepository;

    @Override
    public Team saveTeam(Team team) {
        return teamRepository.save(team);
    }

    @Override
    public Team getTeamById(Long id) {
        Optional<Team> team = teamRepository.findById(id);
        return unwrapTeam(team, id);
    }

    @Override
    public void deleteTeam(Long id) {
        teamRepository.deleteById(id);
    }

    @Override
    public Team updateTeamName(Long id, String name) {
        Optional<Team> team = teamRepository.findById(id);
        Team unwrappedTeam = unwrapTeam(team, id);
        unwrappedTeam.setName(name);
        return unwrappedTeam;
    }

    @Override
    public Team updateTeamPlayers(Long id, List<User> players) {
        Optional<Team> team = teamRepository.findById(id);
        Team unwrappedTeam = unwrapTeam(team, id);
        unwrappedTeam.setPlayers(players);
        return unwrappedTeam;
    }

    @Override
    public List<User> getTeamPlayers(Long id) {
        Optional<Team> team = teamRepository.findById(id);
        Team unwrappedTeam = unwrapTeam(team, id);
        return unwrappedTeam.getPlayers();
    }

    static Team unwrapTeam(Optional<Team> entity, Long id) {
        if (entity.isPresent()) return entity.get();
        else throw new EntityNotFoundException(id, Team.class);
    }
}