package com.fcaih.helwantournaments.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fcaih.helwantournaments.model.Tournament;
import com.fcaih.helwantournaments.service.TournamentService;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@AllArgsConstructor
@RequestMapping("/tournaments")
public class TournamentController {

    private TournamentService tournamentService;

    @GetMapping("/all")
    public ResponseEntity<List<Tournament>> getAllTournaments() {
        return new ResponseEntity<>(tournamentService.getAllTournaments(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tournament> getTournamentById(@PathVariable Long id) {
        return new ResponseEntity<>(tournamentService.getTournamentById(id), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Tournament> addTournament(@RequestBody Tournament tournament) {
        return new ResponseEntity<>(tournamentService.saveTournament(tournament), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteTournament(@PathVariable Long id) {
        tournamentService.deleteTournament(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}/name")
    public ResponseEntity<Tournament> updateTournamentName(@PathVariable Long id, @RequestBody Tournament tournament) {
        return new ResponseEntity<>(tournamentService.updateTournamentName(id, tournament.getName()), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tournament> updateTournamentDescription(@PathVariable Long id, @RequestBody Tournament tournament) {
        return new ResponseEntity<>(tournamentService.updateTournamentDescription(id, tournament.getDescription()), HttpStatus.OK);
    }

    @PutMapping("/{id}/start-date")
    public ResponseEntity<Tournament> updateTournamentStartDate(@PathVariable Long id, @RequestBody Tournament tournament) {
        return new ResponseEntity<>(tournamentService.updateTournamentStartDate(id, tournament.getStartDate()), HttpStatus.OK);
    }

    @PutMapping("/{id}/end-date")
    public ResponseEntity<Tournament> updateTournamentEndDate(@PathVariable Long id, @RequestBody Tournament tournament) {
        return new ResponseEntity<>(tournamentService.updateTournamentEndDate(id, tournament.getEndDate()), HttpStatus.OK);
    }
}