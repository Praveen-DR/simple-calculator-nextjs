# demo
package com.movieticket.movie.services.booking_service;

import com.movieticket.movie.models.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BookingService {
    String createBooking(String bookingId, String bookingDate, PaymentMethod paymentMethod, PaymentStatus paymentStatus, User user, SeatAvailability seatAvailability, Showtime showtime);


    List<Booking> getAllBookings();

    Booking getBookingId(String bookingId);
}

package com.movieticket.movie.services.showtime_service;


import com.movieticket.movie.mappers.ShowtimeMapper;
import com.movieticket.movie.models.Movie;
import com.movieticket.movie.models.Seat;
import com.movieticket.movie.models.Showtime;
import com.movieticket.movie.models.Theater;
import com.movieticket.movie.repositories.ShowtimeRepository;
import com.movieticket.movie.utils.UUIDUtil;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ShowtimeServiceImpl implements ShowtimeService{
    private final ShowtimeRepository showtimeRepository;
    private final ShowtimeMapper showtimeMapper;
    private final UUIDUtil uuidUtil;

    public ShowtimeServiceImpl(ShowtimeRepository showtimeRepository, ShowtimeMapper showtimeMapper,UUIDUtil uuidUtil){
        this.showtimeRepository = showtimeRepository;
        this.showtimeMapper =  showtimeMapper;
        this.uuidUtil = uuidUtil;
    }

    @Override
    public String createShowtime(String showtimeId, Movie movie, Theater theater, LocalDateTime startTime, LocalDateTime endTime) {
        Showtime showtime = showtimeMapper.toShowtime(uuidUtil.generateUuid(), movie,theater,startTime,endTime);
        showtimeRepository.save(showtime);
        return "Showtime created";
    }

    @Override
    public List<Showtime> getAllShowtimes() {
        return List.of();
    }

    @Override
    public Showtime getShowtimeId(String showtimeId) {
        return null;
    }
}



package com.movieticket.movie.services.showtime_service;


import com.movieticket.movie.models.Movie;
import com.movieticket.movie.models.Showtime;
import com.movieticket.movie.models.Theater;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public interface ShowtimeService {

    String createShowtime(String showtimeId, Movie movie, Theater theater, LocalDateTime startTime,LocalDateTime endTime);

    List<Showtime>getAllShowtimes();

    Showtime getShowtimeId(String showtimeId);
}
package com.movieticket.movie.services.seat_service;

import com.movieticket.movie.Exceptions.ApiRequestException;
import com.movieticket.movie.mappers.SeatMapper;
import com.movieticket.movie.models.Seat;
import com.movieticket.movie.models.Theater;
import com.movieticket.movie.repositories.SeatRepository;
import com.movieticket.movie.utils.UUIDUtil;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeatServiceImpl implements SeatService {
    private SeatRepository seatRepository;
    private SeatMapper seatMapper;
    private UUIDUtil uuidUtil;

    public SeatServiceImpl(SeatRepository seatRepository, SeatMapper seatMapper, UUIDUtil uuidUtil){
        this.seatRepository = seatRepository;
        this.seatMapper = seatMapper;
        this.uuidUtil = uuidUtil;
    }

    @Override
    public String createSeat(String seatId, String seatRow, String seatNumber, String seatType, String seatSection, Theater theater) {
        Seat seat = seatMapper.toSeat(uuidUtil.generateUuid(), seatRow,seatNumber,seatType,seatSection,theater);
        seatRepository.save(seat);
        return "Seat Created";
    }

    @Override
    public List<Seat> getAllSeats() {
        return seatRepository.findAll();
    }

    @Override
    public Seat getSeatId(String seatId) {
        return seatRepository.findById(seatId).orElseThrow(()-> new ApiRequestException("Seat Id does not exits"));
    }


}

package com.movieticket.movie.services.movie_service;


import com.movieticket.movie.Exceptions.ApiRequestException;
import com.movieticket.movie.mappers.MovieMapper;
import com.movieticket.movie.models.Genre;
import com.movieticket.movie.models.Movie;
import com.movieticket.movie.repositories.MovieRepository;
import com.movieticket.movie.utils.UUIDUtil;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieServiceImpl implements  MovieService{
    private  final MovieRepository movieRepository;
    private final MovieMapper movieMapper;
    private  final UUIDUtil uuidUtil;


    public MovieServiceImpl(MovieRepository movieRepository, MovieMapper movieMapper, UUIDUtil uuidUtil){
        this.movieRepository = movieRepository;
        this.movieMapper = movieMapper;
        this.uuidUtil = uuidUtil;
    }


    @Override
    public String createMovie(String movieId, String title,Genre genre, String duration, String rating, String poster) {
        Movie movie = movieMapper.toMovie(movieId, title,genre,duration,rating,poster);
        movieRepository.save(movie);
        return "Movie created";
    }

    @Override
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    @Override
    public Movie getMovieId(String movieId) {
        return movieRepository.findById(movieId).orElseThrow(()-> new ApiRequestException("Movie Id does not exist"));
    }


}
package com.movieticket.movie.services.movie_service;


import com.movieticket.movie.Exceptions.ApiRequestException;
import com.movieticket.movie.mappers.MovieMapper;
import com.movieticket.movie.models.Genre;
import com.movieticket.movie.models.Movie;
import com.movieticket.movie.repositories.MovieRepository;
import com.movieticket.movie.utils.UUIDUtil;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieServiceImpl implements  MovieService{
    private  final MovieRepository movieRepository;
    private final MovieMapper movieMapper;
    private  final UUIDUtil uuidUtil;


    public MovieServiceImpl(MovieRepository movieRepository, MovieMapper movieMapper, UUIDUtil uuidUtil){
        this.movieRepository = movieRepository;
        this.movieMapper = movieMapper;
        this.uuidUtil = uuidUtil;
    }


    @Override
    public String createMovie(String movieId, String title,Genre genre, String duration, String rating, String poster) {
        Movie movie = movieMapper.toMovie(movieId, title,genre,duration,rating,poster);
        movieRepository.save(movie);
        return "Movie created";
    }

    @Override
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    @Override
    public Movie getMovieId(String movieId) {
        return movieRepository.findById(movieId).orElseThrow(()-> new ApiRequestException("Movie Id does not exist"));
    }


}
package com.movieticket.movie.services.movie_service;


import com.movieticket.movie.models.Genre;
import com.movieticket.movie.models.Movie;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MovieService {
    String createMovie(String movieId, String title,  Genre genre, String duration, String rating, String poster);

    List<Movie>getAllMovies();

    Movie getMovieId(String movieId);
}


