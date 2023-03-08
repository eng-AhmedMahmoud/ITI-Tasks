const reservationMod = require('./reservationMod.js');

const ticketManager = new reservationMod.TicketManager();

const ticket1 = ticketManager.addTicket(22, 33, 'Cairo', 'Alex', '2020-10-10');
// console.log(ticket1);

const ticket2 = ticketManager.addTicket(44, 55, 'Alex', 'Cairo', '2020-10-10');
// console.log(ticket2);

const ticket = ticketManager.getTicket(22);
// console.log(ticket);

ticketManager.updateTicket(22, { flightNum: 66 });
console.log(ticket1);