const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

let firstPasswordEl = document.querySelector('#first-password');
let secondPasswordEl = document.querySelector('#second-password');
let passwordBtn = document.querySelector('.random-pass--btn');
let clipboardButtons = document.querySelectorAll('.clipboardBtn');

// ✅ Generate a random password
function generatePassword(length = 15) {
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

// ✅ Reset password fields
function resetPasswords() {
  firstPasswordEl.value = '';
  secondPasswordEl.value = '';
}

// ✅ Fill password fields with new values
function fillPasswords() {
  firstPasswordEl.value = generatePassword();
  secondPasswordEl.value = generatePassword();
}

// ✅ Copy given input’s value to clipboard and update button UI

function copyToClipboard(button, inputEl) {
  if (inputEl.value) {
    navigator.clipboard
      .writeText(inputEl.value)
      .then(() => {
        button.innerHTML = `<i class="bi bi-clipboard-check-fill"></i>`;
        button.title = 'Copied!';

        setTimeout(() => {
          button.innerHTML = `<i class="bi bi-clipboard"></i>`;
          button.title = 'Copy to Clipboard';
        }, 3000);
      })
      .catch((err) => {
        console.log('Failed to copy', err);
      });
  }
}

// ✅ Event: Generate new passwords on button click
passwordBtn.addEventListener('click', fillPasswords);

// ✅ Event: Copy to clipboard when clipboard buttons are clicked
clipboardButtons.forEach((button, index) => {
  const input = index === 0 ? firstPasswordEl : secondPasswordEl;
  button.addEventListener('click', () => copyToClipboard(button, input));
});

// ✅ Initial Reset
resetPasswords();
