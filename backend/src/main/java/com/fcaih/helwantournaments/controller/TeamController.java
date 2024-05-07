package com.fcaih.helwantournaments.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fcaih.helwantournaments.model.Team;
import com.fcaih.helwantournaments.service.TeamService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@AllArgsConstructor
@RequestMapping("/teams")
@CrossOrigin(origins = "http://localhost:3000")
public class TeamController {

    private TeamService teamService;

    @GetMapping("/all")
    public ResponseEntity<List<Team>> getAllTeams() {
        return new ResponseEntity<>(teamService.getAllTeams(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Team> getTeamById(@PathVariable Long id) {
        return new ResponseEntity<>(teamService.getTeamById(id), HttpStatus.OK);
    }

    @PostMapping("/captain/{id}")
    public ResponseEntity<Team> saveTeam(@Valid @RequestBody Team team, @PathVariable Long id) {
        return new ResponseEntity<>(teamService.saveTeam(team, id), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteTeam(@PathVariable Long id) {
        teamService.deleteTeam(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}/name")
    public ResponseEntity<Team> updateTeamName(@PathVariable Long id, @RequestBody Team team) {
        return new ResponseEntity<>(teamService.updateTeamName(id, team.getName()), HttpStatus.OK);
    }
}