/*
1. If ticket numbers is less than 100
Price: 100/ticket

2. If ticket numbers is more than 100 but less than 200
Price: (100 for first 100 tickets) + (90 for rest)

3. If ticket numbers is more than 200.
Price: (100 for first 100 tickets) + (90 for second 100 tickets) + (70 for rest)
*/

function ticketPrice(ticketQty){
    if(ticketQty <= 100){
        const price = ticketQty * 100;
        return price;
    }
    else if(ticketQty <= 200){
        const first100Price = 100 * 100;
        const restQty = ticketQty - 100;
        const restPrice = restQty * 90;
        const totalPrice = first100Price + restPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * 100;
        const second100Price = 100 * 90;
        const restQty = ticketQty - 200;
        const restPrice = restQty * 70;
        const totalPrice = first100Price + second100Price + restPrice;
        return totalPrice;
    }
}

const noOfTickets1 = 50;
const noOfTickets2 = 100;
const noOfTickets3 = 150;
const noOfTickets4 = 200;
const noOfTickets5 = 264;
const totalTicketPrice1 = ticketPrice(noOfTickets1);
console.log("Total Ticket Price:",totalTicketPrice1,"TK.");
const totalTicketPrice2 = ticketPrice(noOfTickets2);
console.log("Total Ticket Price:",totalTicketPrice2,"TK.");
const totalTicketPrice3 = ticketPrice(noOfTickets3);
console.log("Total Ticket Price:",totalTicketPrice3,"TK.");
const totalTicketPrice4 = ticketPrice(noOfTickets4);
console.log("Total Ticket Price:",totalTicketPrice4,"TK.");
const totalTicketPrice5 = ticketPrice(noOfTickets5);
console.log("Total Ticket Price:",totalTicketPrice5,"TK.");