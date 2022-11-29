document.write('Message');
document.write('<hr> <br>');
// take input from the user
var text = prompt("Enter your message: ");
for(var i = 1; i < 7; i++) {
    // display the output
    document.write("<h"+i+">"+text+"<h"+i+">");
}