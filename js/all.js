const clock = document.querySelector('.timeList');
const time = () =>{
  const location = ["NEW YORK", "LONDON", "BANGKOK", "TAIWAN", "SYDNEY"];
  const timeZone = ['America/New_York','Europe/London','Asia/Bangkok','Asia/Taipei','Australia/Sydney'];
  const month = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  let str = '';
  for (let i = 0; i < location.length; i++) {
    let date = '';
    let color = '';
    if (i !== 0 && i !== location.length-1) {
      color = 'whiteBack';
    }
    let time = new Date().toLocaleString("en-GB", {
      timeZone:timeZone[i],
      hour12:false,
    });
    time = time.split(',');
    date = time[0].split('/');
    date = `${date[0]} ${month[date[1]-1]}. ${date[2]}`;
    time = time[1].replace(' ','').slice(0,-3);
    str += `
      <div class="timeZone ${color}">
        <div>
          <h3 class="location">${location[i]}</h3>
          <p class="date">${date}</p>
          </div>
          <div class="time">${time}</div>
      </div>
    `;
  }
  clock.innerHTML = str;
};
time();
setInterval(time,1000);
