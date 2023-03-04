import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const saveState = () => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
};

const loadState = () => {
  try {
    const state = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (state) {
      emailInput.value = state.email;
      messageInput.value = state.message;
    }
  } catch (error) {
    console.error('Failed to load form state from localStorage', error);
  }
};

const handleSubmit = e => {
  e.preventDefault();
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
  console.log(
    'Form submitted with data:',
    JSON.stringify({ email: emailInput.value, message: messageInput.value })
  );
};

const throttledSaveState = throttle(saveState, 500);
emailInput.addEventListener('input', throttledSaveState);
messageInput.addEventListener('input', throttledSaveState);

loadState();
form.addEventListener('submit', handleSubmit);
