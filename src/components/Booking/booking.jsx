import React, { useState, useEffect } from 'react';
import './booking.css';

const Booking = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [ticketPrice, setTicketPrice] = useState(0);

    useEffect(() => {
        const seats = document.querySelectorAll('.row .seat:not(.occupied)');
        const count = document.getElementById('count');
        const total = document.getElementById('total');
        const ticketSelect = document.getElementById('ticket');

        const setTicketData = (ticketIndex, ticketPrice) => {
            localStorage.setItem('selectedTicketIndex', ticketIndex);
            localStorage.setItem('selectedTicketPrice', ticketPrice);
        };

        const updateSelectedCount = () => {
            const selectedSeats = document.querySelectorAll('.row .seat.selected');
            const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
            localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
            const selectedSeatsCount = selectedSeats.length;
            count.innerText = selectedSeatsCount;
            total.innerText = selectedSeatsCount * ticketPrice;
        };

        const populateUI = () => {
            const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
            if (selectedSeats !== null && selectedSeats.length > 0) {
                seats.forEach((seat, index) => {
                    if (selectedSeats.indexOf(index) > -1) {
                        seat.classList.add('selected');
                    }
                });
            }
            const selectedTicketIndex = localStorage.getItem('selectedTicketIndex');
            if (selectedTicketIndex !== null) {
                ticketSelect.selectedIndex = selectedTicketIndex;
            }
        };

        const handleTicketSelectChange = e => {
            const ticketPrice = +e.target.value;
            setTicketPrice(ticketPrice);
            setTicketData(e.target.selectedIndex, e.target.value);
            updateSelectedCount();
        };

        const handleSeatClick = e => {
            if (
                e.target.classList.contains('seat') &&
                !e.target.classList.contains('occupied')
            ) {
                e.target.classList.toggle('selected');
                updateSelectedCount();
            }
        };

        populateUI();

        ticketSelect.addEventListener('change', handleTicketSelectChange);
        seats.forEach(seat => seat.addEventListener('click', handleSeatClick));

        return () => {
            ticketSelect.removeEventListener('change', handleTicketSelectChange);
            seats.forEach(seat => seat.removeEventListener('click', handleSeatClick));
        };
    }, [ticketPrice]);

    return (
        <div className='booking-container'>
            <div className="ticket-container">
                <label>Airline Ticket:</label>
                <select id="ticket">
                    <option value="100">First-Class($100)</option>
                    <option value="120">Economy-Class ($120)</option>
                </select>
            </div>

            <ul className="showcase">
                <li>
                    <div className="seat"></div>
                    <small>N/A</small>
                </li>
                <li>
                    <div className="seat selected"></div>
                    <small>Selected</small>
                </li>
                <li>
                    <div className="seat occupied"></div>
                    <small>Occupied</small>
                </li>
            </ul>

            <div className="container">
                <div className="screen"></div>

                <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                </div>
                <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                </div>
            </div>

            <p className="text">
                You have selected <span id="count">0</span> seats for a price of $<span id="total">0</span>
            </p>
        </div>
    );
};

export default Booking;
