function updateTime() {
  const now = new Date();

  const minutes = now.getMinutes();
  const hours = now.getHours();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];

  document.getElementById('minutes').innerText = `Minutes: ${minutes}`;
  document.getElementById('hours').innerText = `Hours: ${hours}`;
  document.getElementById('days').innerText = `Days: ${days}`;
}

setInterval(updateTime, 1000);

updateTime();