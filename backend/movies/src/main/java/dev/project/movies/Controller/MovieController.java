package dev.project.movies.Controller;

import dev.project.movies.Model.Movie;
import dev.project.movies.Service.MovieService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/movies")
public class MovieController {

  @Autowired private final MovieService movieService;

  public MovieController(MovieService movieService) {
    this.movieService = movieService;
  }

  @GetMapping
  public ResponseEntity<List<Movie>> getMovies() {
    return new ResponseEntity<List<Movie>>(movieService.getAllMovies(), HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Optional<Movie>> getMovieById(@PathVariable("id") ObjectId id) {
    return new ResponseEntity<Optional<Movie>>(movieService.getMovieById(id), HttpStatus.OK);
  }

  @GetMapping("/imdb/{imdbId}")
  public ResponseEntity<Optional<Movie>> getMovieByImdbId(@PathVariable("imdbId") String imdbId) {
    return new ResponseEntity<Optional<Movie>>(
        movieService.getMovieByImdbId(imdbId), HttpStatus.OK);
  }
}
