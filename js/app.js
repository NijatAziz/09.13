function setBackgroudColorAndGreeting() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    let backgroundColor = '';
    let greetingMessage = '';
  
    if (currentHour >= 5 && currentHour < 12) {
      backgroundColor = 'blue';
      greetingMessage = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 19) {
      backgroundColor = 'yellow';
      greetingMessage = 'Good afternoon';
    } else if (currentHour >= 19 && currentHour < 24) {
      backgroundColor = 'darkgrey';
      greetingMessage = 'Good evening';
    } else {
      backgroundColor = 'black';A
      greetingMessage = 'Good night';
    }
  
    document.body.style.backgroundColor = backgroundColor;
    document.getElementById('greeting').textContent = greetingMessage;
  }
  
  setBackgroudColorAndGreeting(); 
  setInterval(setBackgroudColorAndGreeting, 60000); 
