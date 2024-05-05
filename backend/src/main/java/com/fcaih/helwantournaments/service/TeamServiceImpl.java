package com.fcaih.helwantournaments.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.fcaih.helwantournaments.exception.EntityNotFoundException;
import com.fcaih.helwantournaments.model.Team;
import com.fcaih.helwantournaments.model.User;
import com.fcaih.helwantournaments.repository.TeamRepository;
import com.fcaih.helwantournaments.repository.UserRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class TeamServiceImpl implements TeamService {

    private TeamRepository teamRepository;
    private UserRepository userRepository;

    @Override
    public Team saveTeam(Team team, Long captainId) {
        User captain = UserServiceImpl.unwrapUser(userRepository.findById(captainId), 404L);
        team.setCaptain(captain);
        return teamRepository.save(team);
    }

    @Override
    public Team getTeamById(Long id) {
        Optional<Team> team = teamRepository.findById(id);
        return unwrapTeam(team, id);
    }

    @Override
    public List<Team> getAllTeams() {
        return teamRepository.findAll();
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
        teamRepository.save(unwrappedTeam);
        return unwrappedTeam;
    }

    static Team unwrapTeam(Optional<Team> entity, Long id) {
        if (entity.isPresent()) return entity.get();
        else throw new EntityNotFoundException(id, Team.class);
    }
}