package dev.project.movies.Service;

import dev.project.movies.Model.Movie;
import dev.project.movies.Repository.MovieRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private final MovieRepository movieRepository;
    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    public Optional<Movie> getMovieById(ObjectId id) {
       return movieRepository.findById(id);
    }

    public Optional<Movie> getMovieByImdbId(String id) {
        return movieRepository.findMovieByImdbId(id);
    }
}
