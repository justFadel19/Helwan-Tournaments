package com.fcaih.helwantournaments.service;

import java.util.List;

import com.fcaih.helwantournaments.model.Team;
import com.fcaih.helwantournaments.model.User;

public interface TeamService {
    Team saveTeam(Team team);
    Team getTeamById(Long id);
    void deleteTeam(Long id);
    Team updateTeamName(Long id, String name);
    Team updateTeamPlayers(Long id, List<User> players);
    List<User> getTeamPlayers(Long id);
}