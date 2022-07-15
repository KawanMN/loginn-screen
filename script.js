const inputs = document.querySelectorAll('.input');

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
  if (target.value === '') {
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
  }
}


inputs.forEach((inputs) => inputs.addEventListener('focus', handleFocus));
inputs.forEach((inputs) => inputs.addEventListener('focusout', handleFocusOut));

