const islocked = false;
const role = 'user';

if (islocked) {
  console.log('account is locked');
} else if (role === 'admin') {
  console.log('welcome Admin');
} else {
  console.log('welcome');
}

// challange

const temp = 31;

if (temp >= 32) {
  console.log('it is hot outside');
} else if (temp <= 110) {
  console.log('It is cold outside');
} else {
  console.log('its nice outside');
}
