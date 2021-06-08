import React, { useState } from "react";
import clsx from "clsx";
import "../src/Booking.css";

//first we will create our dummy seats
const seats = [...Array(48).keys()];
console.log(seats);

//The Array.from() returns a new instance of Array that contains all elements of the target object

//--- 2 ----//
//create a Functional Component

const BookingScreen = () => {
  //we need State to Save the Slected Seats
  const [selectedSeats, SetselectedSeats] = useState([]);

  //now we hae to create that  seats grid so that we can select a seat

  return (
    <div>
      <Screen />
      <Cinema
        selectedSeats={selectedSeats}
        onSelectedSeatChange={(selectedSeats) =>
          SetselectedSeats(selectedSeats)
        }
      />

      <p>you selected the {selectedSeats.length} Seats. Wanna Proceed?</p>
    </div>
  );
};

//screens
const Screen = () => {
  return <div className="screen"></div>;
};

//Count of the seats

//we are creating a component names Cinema which will
//have the seats

const Cinema = ({ selectedSeats, onSelectedSeatChange }) => {
  //in this component we will loop over the seats array and will create our Seats

  //handleSelecteSeat

  const handleSelecteSeat = (seat) => {
    const isSelected = selectedSeats.includes(seat);

    if (isSelected) {
      onSelectedSeatChange(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      onSelectedSeatChange([...selectedSeats, seat]);
    }
  };

  return (
    <div className="Cinema">
      <div className="seats">
        {seats.map((seat) => {
          const isSelected = selectedSeats.includes(seat);
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx("seat", isSelected && "selected")}
              onClick={() => handleSelecteSeat(seat)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BookingScreen;
