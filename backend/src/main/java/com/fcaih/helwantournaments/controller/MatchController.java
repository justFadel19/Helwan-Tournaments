package com.fcaih.helwantournaments.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fcaih.helwantournaments.model.Match;
import com.fcaih.helwantournaments.service.MatchService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

import java.util.Date;
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
@RequestMapping("/matches")
@CrossOrigin(origins = "http://localhost:3000")
public class MatchController {

    private MatchService matchService;

    @GetMapping("/all")
    public ResponseEntity<List<Match>> getAllMatches() {
        List<Match> matches = matchService.getAllMatches();
        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @GetMapping("/tournament/{tournamentId}")
    public ResponseEntity<List<Match>> getAllMatchesByTournamentId(Long tournamentId) {
        List<Match> matches = matchService.getAllMatchesByTournamentId(tournamentId);
        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @PostMapping("/tournament/{tournamentId}/team1/{team1Id}/team2/{team2Id}")
    public ResponseEntity<Match> createMatch(@PathVariable Long tournamentId, @PathVariable Long team1Id, @PathVariable Long team2Id, @Valid @RequestBody Match match) {
        return new ResponseEntity<>(matchService.saveMatch(match, tournamentId, team1Id, team2Id), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteMatch(@PathVariable Long id) {
        matchService.deleteMatch(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}/result/{result}")
    public ResponseEntity<Match> updateMatchResult(@PathVariable Long id, @PathVariable String result) {
        return new ResponseEntity<>(matchService.updateMatchResult(id, result), HttpStatus.OK);
    }

    @PutMapping("/{id}/date/{date}")
    public ResponseEntity<Match> updateMatchDate(@PathVariable Long id, @PathVariable Date date) {
        return new ResponseEntity<>(matchService.updateMatchDate(id, date), HttpStatus.OK);
    }
}