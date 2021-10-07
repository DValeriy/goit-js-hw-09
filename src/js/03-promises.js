import Notiflix from 'notiflix';

const nodes = {
  formNode: document.querySelector(".form")
  // btnNode: document.querySelector("button")  
}
const createPromise = (position, delay) => {  
  return new Promise((res, rej) => {      
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) { res({ position, delay }) }
      else { rej({ position, delay }) }
    }, delay);
    })
}

nodes.formNode.addEventListener("submit", e => {
  e.preventDefault();
  const { delay, step, amount } = nodes.formNode.elements;
  
  for (let i = 0; i < Number(amount.value); i+=1){
    let delayTime = Number(delay.value);
    delayTime += (Number(step.value) * i);
    
    createPromise(i + 1, delayTime)
      .then(({ position, delay }) => {
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({position, delay})=>{
      // console.log(`❌ Rejected promise ${position} in ${delay}ms`)
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    })
  }
})

