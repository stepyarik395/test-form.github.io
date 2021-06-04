const tmp = document.getElementById('name-inp');
const warning = document.querySelector('.warning__numbers');
tmp.addEventListener('input', filterNumbers);

function filterNumbers(e) {
  if (tmp.checkValidity()) {
    warning.style.display = 'none';
  } else {
    warning.style.display = 'block';
  }
}
