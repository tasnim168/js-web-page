let date =new Date();
let curDate=date.toDateString();
console.log('Date'+curDate);
document.getElementById('current-date').innerText=curDate;

const time =new Date()
const currentTime=time.toLocaleTimeString();