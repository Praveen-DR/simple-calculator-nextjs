# demo
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

