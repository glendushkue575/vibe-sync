/*
   Filename: SophisticatedCode.js
   
   Description: This code is a complex implementation of a travel booking application.
                It allows users to search for flights, select seats, and make bookings.
                The application utilizes various data structures and algorithms to optimize 
                performance and provide a seamless user experience.
*/

// Define a class to represent a flight
class Flight {
  constructor(id, origin, destination, departureTime, arrivalTime, capacity) {
    this.id = id;
    this.origin = origin;
    this.destination = destination;
    this.departureTime = departureTime;
    this.arrivalTime = arrivalTime;
    this.capacity = capacity;
    this.seats = [];
  }

  addSeat(seat) {
    this.seats.push(seat);
  }

  getAvailableSeats() {
    return this.capacity - this.seats.length;
  }
}

// Define a class to represent a seat
class Seat {
  constructor(id, type, price) {
    this.id = id;
    this.type = type;
    this.price = price;
    this.isBooked = false;
  }

  book() {
    this.isBooked = true;
  }

  cancelBooking() {
    this.isBooked = false;
  }
}

const flights = [];

// Function to generate random flight data
function generateFlightData() {
  const origin = ['LAX', 'JFK', 'SFO', 'ORD'];
  const destination = ['LHR', 'CDG', 'AMS', 'SYD'];
  const departureTimes = [new Date('2022-01-01'), new Date('2022-01-02'), new Date('2022-01-03')];
  const arrivalTimes = [new Date('2022-01-02'), new Date('2022-01-03'), new Date('2022-01-04')];
  
  for (let i = 0; i < 10; i++) {
    const flight = new Flight(
      i + 1,
      origin[Math.floor(Math.random() * origin.length)],
      destination[Math.floor(Math.random() * destination.length)],
      departureTimes[Math.floor(Math.random() * departureTimes.length)],
      arrivalTimes[Math.floor(Math.random() * arrivalTimes.length)],
      Math.floor(Math.random() * 200)
    );
    
    for (let j = 0; j < flight.capacity; j++) {
      const seat = new Seat(
        `F${flight.id}S${j + 1}`,
        Math.random() > 0.5 ? 'Business' : 'Economy',
        Math.floor(Math.random() * 1000)
      );
      
      flight.addSeat(seat);
    }
    
    flights.push(flight);
  }
}

// Function to search for flights based on origin and destination
function searchFlights(origin, destination) {
  return flights.filter(flight => flight.origin === origin && flight.destination === destination);
}

// Function to book a seat on a flight
function bookSeat(flightId, seatId) {
  const flight = flights.find(flight => flight.id === flightId);
  const seat = flight.seats.find(seat => seat.id === seatId);

  if (seat && !seat.isBooked) {
    seat.book();
    console.log(`Seat ${seatId} on Flight ${flightId} booked successfully.`);
  } else {
    console.log(`Seat ${seatId} is already booked.`);
  }
}

// Function to cancel a seat booking
function cancelSeatBooking(flightId, seatId) {
  const flight = flights.find(flight => flight.id === flightId);
  const seat = flight.seats.find(seat => seat.id === seatId);

  if (seat && seat.isBooked) {
    seat.cancelBooking();
    console.log(`Seat ${seatId} on Flight ${flightId} booking canceled successfully.`);
  } else {
    console.log(`Seat ${seatId} is not booked.`);
  }
}

// Generate flight data
generateFlightData();

// Search for flights from LAX to LHR
const results = searchFlights('LAX', 'LHR');
console.log(`Found ${results.length} flights from LAX to LHR:`);
console.log(results);

// Book a seat on flight 1
bookSeat(1, 'F1S1');

// Cancel the booking for seat F1S1
cancelSeatBooking(1, 'F1S1');

// Output available seats for flight 1
console.log(`Available seats on flight 1: ${flights[0].getAvailableSeats()}`);

// ... continued

// Keep adding more functionality and complexity to the code.

// Note: This is just a sample code to demonstrate a complex example. The actual implementation would require more functionality, error handling, and UI interactions.