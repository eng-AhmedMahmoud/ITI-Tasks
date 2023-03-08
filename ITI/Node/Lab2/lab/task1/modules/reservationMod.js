/* Create your own module that can be used in flight tickets reservation 
o  Let the flight ticket contains info about  
 seat num,  
 flight num,  
 departure and arrival airports 
 Travelling date. 
o  User can display, get and update info of his ticket */

// ticket class
class Ticket {
    constructor(seatNum, flightNum, departureAirport, arrivalAirport, travellingDate) {
        this.seatNum = seatNum;
        this.flightNum = flightNum;
        this.departureAirport = departureAirport;
        this.arrivalAirport = arrivalAirport;
        this.travellingDate = travellingDate;
    }
}

// manager class
class TicketManager {
    constructor() {
        this.tickets = [];
    }

    addTicket(seatNum, flightNum, departureAirport, arrivalAirport, travellingDate) {
        const ticket = new Ticket(seatNum, flightNum, departureAirport, arrivalAirport, travellingDate);
        this.tickets[seatNum] = ticket;
        return ticket;
    }

    getTicket(seatNum) {
        return this.tickets[seatNum];
    }

    updateTicket(seatNum, updatedTicket) {
        const oldTicket = this.getTicket(seatNum);
        if (oldTicket) {
            Object.assign(oldTicket, updatedTicket);
            return oldTicket;
        }
        return null;
    }
}

module.exports = {
  Ticket,
  TicketManager
};