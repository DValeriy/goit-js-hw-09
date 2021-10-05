import flatpickr from "flatpickr";
import {convertMs,addLeadingZero} from "./functions";
import "flatpickr/dist/flatpickr.min.css"
import Notiflix from 'notiflix';

const nodes = {
  buttonStart: document.querySelector("button[data-start]"),
  inputDate: document.querySelector("#datetime-picker"),
  dataDaysNode:document.querySelector("span[data-days]"),
  dataHoursNode:document.querySelector("span[data-hours]"),
  dataMinutesNode:document.querySelector("span[data-minutes]"),
  dataSecondsNode: document.querySelector("span[data-seconds]"),
};

nodes.buttonStart.disabled = true;
console.log(nodes.timerNode)
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if ((selectedDates[0] - options.defaultDate) <= 0) {      
      // return alert("Please choose a date in the future")
      return Notiflix.Notify.warning("Please choose a date in the future");
    }
    else {
      nodes.buttonStart.disabled = false
    } 
  },
};
const pickDate = flatpickr(nodes.inputDate, options);

nodes.buttonStart.addEventListener("click", e => {
  const intervalId = setInterval(() => {
    
    let selectDate = new Date(nodes.inputDate.value);
    let today = new Date();
    const dif=(selectDate-today)
    const { days, hours, minutes, seconds } = convertMs(dif);
    
    nodes.dataDaysNode.textContent = addLeadingZero(`${days}`);
    nodes.dataHoursNode.textContent = addLeadingZero(`${hours}`);
    nodes.dataMinutesNode.textContent = addLeadingZero(`${minutes}`);
    nodes.dataSecondsNode.textContent = addLeadingZero(`${seconds}`);

    if (dif <= 1000) clearInterval(intervalId);    
  }, 1000);
})