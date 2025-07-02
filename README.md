# demo
package com.movieticket.movie.Controllers;

import com.movieticket.movie.Dto.Request.CreateBookingDto;
import com.movieticket.movie.models.Booking;
import com.movieticket.movie.services.booking_service.BookingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/web/api/Booking")
public class BookingController {
    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping("/v1/createBooking")
    public ResponseEntity<String> createBooking(@RequestBody CreateBookingDto data) {
        String message = bookingService.createBooking(data.bookingId(), data.bookingDate(), data.paymentMethod(), data.paymentStatus(), data.user(), data.seatAvailability(), data.showtime());
        return ResponseEntity.status(201).body(message);
    }

    @GetMapping("/v1/getAllBookings")
    ResponseEntity<List<Booking>> getAllBookings() {
        return ResponseEntity.status(200).body(bookingService.getAllBookings());

    }

    @GetMapping("/v1/getBookingId")
    ResponseEntity<Booking>getBookingId(@RequestParam("bookingId")String bookingId){
        return ResponseEntity.status(200).body(bookingService.getBookingId(bookingId));
    }
}

package com.movieticket.movie.mappers;

import com.movieticket.movie.models.*;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@Service
public class BookingMapper {

    public Booking toBooking(
            String bookingId,
            LocalDateTime bookingDate,
            PaymentMethod paymentMethod,
            PaymentStatus paymentStatus,
            User user,
            Showtime showtime,
            SeatAvailability seatAvailability
    ) {
        return Booking.builder()
                .bookingId(bookingId)
                .bookingDate(bookingDate)
                .paymentMethod(paymentMethod)
                .paymentStatus(paymentStatus)
                .user(user)
                .seatAvailability(seatAvailability)
                .showtime(showtime)
                .build();
    }
}
package com.movieticket.movie.mappers;


import com.movieticket.movie.models.Genre;
import com.movieticket.movie.models.Movie;
import org.springframework.stereotype.Service;

@Service
public class MovieMapper {

    public Movie toMovie(String movieId, String title, Genre genre, String duration,String rating,String poster){
        return  Movie.builder()
                .movieId(movieId)
                .title(title)
                .genre(genre)
                .duration(duration)
                .rating(rating)
                .poster(poster)
                .build();
    }
}
package com.movieticket.movie.mappers;

import com.movieticket.movie.models.Seat;
import com.movieticket.movie.models.SeatAvailability;
import com.movieticket.movie.models.Theater;
import org.springframework.stereotype.Service;

@Service
public class SeatMapper {

    public Seat toSeat(String seatId, String seatRow, String seatNumber, String seatType, String seatSection, Theater theater){
        return Seat.builder()
                .seatId(seatId)
                .seatRow(seatRow)
                .seatNumber(seatNumber)
                .seatType(seatType)
                .seatSection(seatSection)
                .theater(theater)
                //.availabilities(availabilities)
                .build();
    }


}
package com.movieticket.movie.mappers;

import com.movieticket.movie.models.Movie;
import com.movieticket.movie.models.Showtime;
import com.movieticket.movie.models.Theater;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;


@Service
public class ShowtimeMapper {

public Showtime toShowtime(String showtimeId, Movie movie, Theater theater, LocalDateTime startTime,LocalDateTime endTime){
    return Showtime.builder()
            .showtimeId(showtimeId)
            .movie(movie)
            .theater(theater)
            .startTime(startTime)
            .endTime(endTime)
            .build();
}
}package com.movieticket.movie.mappers;

import com.movieticket.movie.models.Theater;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TheaterMapper {

public Theater toTheater(String theaterId, String name, String location){
    return Theater.builder()
            .theaterId(theaterId)
            .name(name)
            .location(location)
            .build();
}
}package com.movieticket.movie.mappers;

import com.movieticket.movie.models.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserMapper {

    public User toUser(String userId, String username, String password, String email){
        return User.builder()
                .userId(userId)
                .username(username)
                .password(password)
                .email(email)
                .build();
    }


}

package com.movieticket.movie.services.user_service;


import com.movieticket.movie.Exceptions.ApiRequestException;
import com.movieticket.movie.mappers.UserMapper;
import com.movieticket.movie.models.User;
import com.movieticket.movie.repositories.UserRepository;
import com.movieticket.movie.utils.UUIDUtil;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl  implements  UserService{
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final UUIDUtil uuidUtil;

    private UserServiceImpl(UserRepository userRepository, UserMapper userMapper, UUIDUtil uuidUtil){
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.uuidUtil = uuidUtil;
    }

    @Override
    public String createUser(String userId, String username, String password, String email) {
        User user = userMapper.toUser(userId,username,password,email);
        userRepository.save(user);
        return "User Created";
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserId(String userId) {
        return userRepository.findById(userId).orElseThrow(()->new ApiRequestException("User ID does not exists"));
    }
}
package com.movieticket.movie.services.user_service;


import com.movieticket.movie.models.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

    String createUser(String userId, String username, String password, String email);

    List<User>getAllUsers();

    User getUserId(String userId);
}


package com.movieticket.movie.services.theater_service;


import com.movieticket.movie.models.Theater;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TheaterService {
    String createTheater(String theaterId, String name, String location);

    List<Theater> getAllTheaters();

    Theater getTheaterId(String theaterId);
}
package com.movieticket.movie.services.theater_service;


import com.movieticket.movie.Exceptions.ApiRequestException;
import com.movieticket.movie.mappers.TheaterMapper;
import com.movieticket.movie.models.Theater;
import com.movieticket.movie.repositories.TheaterRepository;
import com.movieticket.movie.utils.UUIDUtil;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TheaterServiceImpl implements TheaterService{
    private final TheaterRepository theaterRepository;
    private final TheaterMapper theaterMapper;
    private final UUIDUtil uuidUtil;

    public TheaterServiceImpl(TheaterRepository theaterRepository,TheaterMapper theaterMapper, UUIDUtil uuidUtil){
        this.theaterRepository = theaterRepository;
        this.theaterMapper = theaterMapper;
        this.uuidUtil = uuidUtil;
    }


    @Override
    public String createTheater(String theaterId, String name, String location) {
        Theater theater = theaterMapper.toTheater(theaterId,name,location);
        theaterRepository.save(theater);
        return "Theater created";
    }

    @Override
    public List<Theater> getAllTheaters() {
        return theaterRepository.findAll();
    }

    @Override
    public Theater getTheaterId(String theaterId) {
        return theaterRepository.findById(theaterId).orElseThrow(()-> new ApiRequestException("Theater ID does not exists"));
    }
}


package com.movieticket.movie.services.booking_service;


import com.movieticket.movie.Exceptions.ApiRequestException;
import com.movieticket.movie.mappers.BookingMapper;
import com.movieticket.movie.models.*;
import com.movieticket.movie.repositories.BookingRepository;
import com.movieticket.movie.utils.UUIDUtil;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class BookingServiceImpl implements BookingService {
    private final BookingRepository bookingRepository;
    private final BookingMapper bookingMapper;
    private final UUIDUtil uuidUtil;


    public BookingServiceImpl(BookingRepository bookingRepository, BookingMapper bookingMapper, UUIDUtil uuidUtil) {
        this.bookingRepository = bookingRepository;
        this.bookingMapper = bookingMapper;
        this.uuidUtil = uuidUtil;
    }


    @Override
    public String createBooking(String bookingId, String bookingDate, PaymentMethod paymentMethod, PaymentStatus paymentStatus, User user, SeatAvailability seatAvailability, Showtime showtime) {

        DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE_TIME;
        LocalDateTime BookingDate = LocalDateTime.parse(bookingDate, formatter);

        Booking booking = bookingMapper.toBooking(uuidUtil.generateUuid(),BookingDate, paymentMethod, paymentStatus, user, showtime, seatAvailability);
        bookingRepository.save(booking);
        return "Booking Created";

    }


    @Override
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    @Override
    public Booking getBookingId(String bookingId) {
        return bookingRepository.findById(bookingId).orElseThrow(()-> new ApiRequestException("Invalid Booking Id"));}
}







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


