package com.fcaih.helwantournaments.service;

import java.util.List;

import com.fcaih.helwantournaments.model.Team;
import com.fcaih.helwantournaments.model.User;

public interface TeamService {
    Team saveTeam(Team team, Long captainId);
    Team getTeamById(Long id);
    List<Team> getAllTeams();
    void deleteTeam(Long id);
    Team updateTeamName(Long id, String name);
}