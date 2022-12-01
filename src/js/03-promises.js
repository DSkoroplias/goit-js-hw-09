import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
  delayInputEl: document.querySelector('input[name="delay"]'),
  stepInputEl: document.querySelector('input[name="step"]'),
  amountInputEl: document.querySelector('input[name="amount"]'),
};

refs.formEl.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onFormSubmit(evt) {
  evt.preventDefault();

  let delayValue = Number(refs.delayInputEl.value);
  let stepValue = Number(refs.stepInputEl.value);
  let amountValue = Number(refs.amountInputEl.value);

  for (let i = 0; i < amountValue; i += 1) {
    createPromise(i + 1, i * delayValue + stepValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
  evt.target.reset();
}
