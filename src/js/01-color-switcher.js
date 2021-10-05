import {getRandomHexColor} from "./functions"

const nodes = {
  bodyNode: document.querySelector("body"),
  buttonStart: document.querySelector("button[data-start]"),
  buttonStop: document.querySelector("button[data-stop]")
};

let intervalId;
nodes.buttonStop.disabled = true;

nodes.buttonStart.addEventListener("click", e => {
  nodes.buttonStart.disabled = true;
  nodes.buttonStop.disabled = false;
  intervalId=setInterval(() => {
    nodes.bodyNode.style.backgroundColor = getRandomHexColor();}
    , 1000
  )
});
nodes.buttonStop.addEventListener("click", e => {
  nodes.buttonStart.disabled = false;
  clearInterval(intervalId)
  nodes.buttonStop.disabled = true;
})