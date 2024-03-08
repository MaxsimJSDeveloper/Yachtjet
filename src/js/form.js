console.log('hhhh');

const form = document.querySelector('.rent-a-yacht-form');

form.addEventListener('input', saveFormData);

function saveFormData() {
  const formData = {
    name: form.elements.name.value.trim(),
    email: form.elements.email.value.trim(),
    phone: form.elements.phone.value.trim(),
    message: form.elements.comment.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

window.addEventListener('load', loadFormData);

function loadFormData() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const { name, email, phone, message } = JSON.parse(savedData);
    form.elements.name.value = name;
    form.elements.email.value = email;
    form.elements.phone.value = phone;
    form.elements.comment.value = message;
  }
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');

  const nameValue = form.elements.name.value.trim();
  const emailValue = form.elements.email.value.trim();
  const phoneValue = form.elements.phone.value.trim();
  const messageValue = form.elements.comment.value.trim();

  if (
    emailValue === '' ||
    messageValue === '' ||
    phoneValue === '' ||
    nameValue === ''
  ) {
    alert('Please enter your email and message!');
    return;
  }

  console.log({
    name: nameValue,
    email: emailValue,
    phone: phoneValue,
    message: messageValue,
  });

  form.reset();
}
