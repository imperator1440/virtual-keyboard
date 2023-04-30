const container = document.createElement('main');
const textField = document.createElement('textarea');
const keyboard = document.createElement('div');

let isCaps = false;
let isShift = false;

keyboard.setAttribute('class', 'keyboard');

const addEvent = (key, extraClass) => {
  switch (extraClass) {
    case '_printable':
      key.addEventListener('click', () => (print(key.innerText)));
      break;
    case 'key__space':
      key.addEventListener('click', () => (print(' ')));
      break;
    case 'key__tab':
      key.addEventListener('click', () => (tabEvent()));
      break;
    case 'key__caps':
      key.addEventListener('click', () => (capsSwitch(key)));
      break;
    case 'key__shift_left':
      key.addEventListener('mouseup', () => (shiftEvent()));
      key.addEventListener('mousedown', () => (shiftEvent()));
      break;
    case 'key__shift_right':
      key.addEventListener('mousedown', () => (shiftEvent()));
      key.addEventListener('mouseup', () => (shiftEvent()));
      break;
    
    default:
      break;
  }
};

const print = (symbol) => {
  if (isCaps || isShift) {
    textField.value += symbol[0];
  } else {
    textField.value += symbol[0].toLowerCase();
  }
};

const tabEvent = () => {
  textField.value += '  ';
};

const capsSwitch = (key) => {
  isCaps = !isCaps;
  key.classList.toggle('key__caps_on');
};

const shiftEvent = () => {
  isShift = !isShift;
};

const createKey = (keyText, extraClass, extraText) => {
  const key = document.createElement('button');
  key.innerText = keyText;
  key.setAttribute('class', 'keyboard__key');

  if (extraClass) {
    key.classList.add(extraClass);
    addEvent(key, extraClass);
  }

  if (extraText) {
    const extraValue = document.createElement('span');
    extraValue.innerText = extraText;
    extraValue.setAttribute('class', 'key__extraText');
    key.append(extraValue);
  }

  return key;
};


keyboard.append(createKey('`', '_printable', '~'));
keyboard.append(createKey('1', '_printable', '!'));
keyboard.append(createKey('2', '_printable', '@'));
keyboard.append(createKey('3', '_printable', '#'));
keyboard.append(createKey('4', '_printable', '$'));
keyboard.append(createKey('5', '_printable', '%'));
keyboard.append(createKey('6', '_printable', '^'));
keyboard.append(createKey('7', '_printable', '&'));
keyboard.append(createKey('8', '_printable', '*'));
keyboard.append(createKey('9', '_printable', '('));
keyboard.append(createKey('0', '_printable', ')'));
keyboard.append(createKey('-', '_printable', '_'));
keyboard.append(createKey('=', '_printable', '+'));
keyboard.append(createKey('Backspace', 'key__backspace'));
keyboard.append(createKey('Tab', 'key__tab'));
keyboard.append(createKey('Q', '_printable'));
keyboard.append(createKey('W', '_printable'));
keyboard.append(createKey('E', '_printable'));
keyboard.append(createKey('R', '_printable'));
keyboard.append(createKey('T', '_printable'));
keyboard.append(createKey('Y', '_printable'));
keyboard.append(createKey('U', '_printable'));
keyboard.append(createKey('I', '_printable'));
keyboard.append(createKey('O', '_printable'));
keyboard.append(createKey('P', '_printable'));
keyboard.append(createKey('[', '_printable', '{'));
keyboard.append(createKey(']', '_printable', '}'));
keyboard.append(createKey('\\', '_printable', '|'));
keyboard.append(createKey('Del'));
keyboard.append(createKey('Caps Lock', 'key__caps'));
keyboard.append(createKey('A', '_printable'));
keyboard.append(createKey('S', '_printable'));
keyboard.append(createKey('D', '_printable'));
keyboard.append(createKey('F', '_printable'));
keyboard.append(createKey('G', '_printable'));
keyboard.append(createKey('H', '_printable'));
keyboard.append(createKey('J', '_printable'));
keyboard.append(createKey('K', '_printable'));
keyboard.append(createKey('L', '_printable'));
keyboard.append(createKey(';', '_printable', ':'));
keyboard.append(createKey(`'`, '_printable', '"'));
keyboard.append(createKey('Enter', 'key__enter'));
keyboard.append(createKey('Shift', 'key__shift_left'));
keyboard.append(createKey('Z', '_printable'));
keyboard.append(createKey('X', '_printable'));
keyboard.append(createKey('C', '_printable'));
keyboard.append(createKey('V', '_printable'));
keyboard.append(createKey('B', '_printable'));
keyboard.append(createKey('N', '_printable'));
keyboard.append(createKey('M', '_printable'));
keyboard.append(createKey(',', '_printable', '<'));
keyboard.append(createKey('.', '_printable', '>'));
keyboard.append(createKey('/', '_printable', '?'));
keyboard.append(createKey('\u2191', 'key__up'));
keyboard.append(createKey('Shift', 'key__shift_right'));
keyboard.append(createKey('Ctrl', 'key__ctrl'));
keyboard.append(createKey('Win', 'key__win'));
keyboard.append(createKey('Alt', 'key__alt'));
keyboard.append(createKey('Space', 'key__space'));
keyboard.append(createKey('Alt', 'key__alt'));
keyboard.append(createKey('Ctrl', 'key__ctrl'));
keyboard.append(createKey('\u2190', 'key__left'));
keyboard.append(createKey('\u2193', 'key__down'));
keyboard.append(createKey('\u2192', 'key__right'));

container.append(textField, keyboard);
document.body.append(container);

const buttons = Array.from(keyboard.children);

const findButton = (e) => {

  switch (e.key) {

    case ' ':
      e.preventDefault();
      textField.value += ' ';
      return buttons.find(button => button.innerText === 'Space');

    case 'Tab':
      e.preventDefault();
      textField.value += '  ';
      return buttons.find(button => button.innerText === 'Tab');

    case 'CapsLock':
      e.preventDefault();
      return buttons.find(button => button.innerText === 'Caps Lock');

    case 'Shift':
      e.preventDefault();
      if (e.code === 'ShiftRight') {
        shiftEvent();
        return buttons.find(button => button.classList.contains('key__shift_right'));
      } else {
        shiftEvent();
        return buttons.find(button => button.classList.contains('key__shift_left'));
      }

    case 'Alt':
      e.preventDefault();
      return buttons.find(button => button.innerText === 'Alt');   

    case 'Control':
      e.preventDefault();
      return buttons.find(button => button.innerText === 'Ctrl');   

    case 'OS':
      e.preventDefault();
      return buttons.find(button => button.innerText === 'Win'); 

    case 'ArrowUp':
      e.preventDefault();
      return buttons.find(button => button.innerText === '\u2191'); 

    case 'ArrowDown':
      e.preventDefault();
      return buttons.find(button => button.innerText === '\u2193'); 

    case 'ArrowLeft':
      e.preventDefault();
      return buttons.find(button => button.innerText === '\u2190');

    case 'ArrowRight':
      e.preventDefault();
      return buttons.find(button => button.innerText === '\u2192');

    case 'Backspace':
      e.preventDefault();
      return buttons.find(button => button.innerText === 'Backspace');  

    case 'Delete':
      e.preventDefault();
      return buttons.find(button => button.innerText === 'Del');  
                    
    default:
      e.preventDefault();
      if (isShift) {
        return buttons.find(button => button.lastChild.textContent.toLowerCase() === e.key.toLowerCase());
      } else {
        return buttons.find(button => button.firstChild.textContent.toLowerCase() === e.key.toLowerCase()); 
      }
  }
};

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  const button = findButton(e);

  button.classList.add('keyboard__key_push');

  if (button.classList.contains('key__caps')) {
    capsSwitch(button);
  }

  if (button.classList.contains('_printable')) {
    textField.value += e.key;  
  }
});

document.addEventListener('keyup', (e) => {
  e.preventDefault();
  const button = findButton(e);

  button.classList.remove('keyboard__key_push');
});