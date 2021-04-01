import {
  createPopper
} from '@popperjs/core';
// const button = document.querySelector('.equipment-block__list-ellement-question');
// const tooltip = document.querySelector('#tooltip');

let popperInstance = null;

document.querySelectorAll(".popper").forEach(popper => {
  const buuton = popper.querySelector(".popper__button"),
    tooltip = popper.querySelector(".popper__tooltip")

  function create() {
    popperInstance = createPopper(buuton, tooltip, {
      placement: 'auto',
    });
  }
  create();

  function show() {
    tooltip.setAttribute('data-show', '');
  }

  function hide() {
    tooltip.removeAttribute('data-show');
  }

  const showEvents = ['mouseenter', 'focus'];
  const hideEvents = ['mouseleave', 'blur'];

  showEvents.forEach(event => {
    buuton.addEventListener(event, show);
  });

  hideEvents.forEach(event => {
    buuton.addEventListener(event, hide);
  });
})