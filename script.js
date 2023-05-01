alert('Чтобы всё работало корректно, язык ввода вашего устройства должен соответствовать языку виртуальной клавиатуры.\n\nFor everything to work correctly, the input language of your device must match the language of the virtual keyboard.');
alert('Нажмите shift + alt для смены языка.\n\nPush shift + alt to change language.');

const container = document.createElement('main');
const textField = document.createElement('textarea');

const keyboard = document.createElement('div');
keyboard.setAttribute('class', 'keyboard');

let isCaps = false;
let isShift = false;
let isAlt = false;

const addEvent = (key, extraClass) => {

  switch (extraClass) {

  case '_printable':
    key.addEventListener('click', () => printSymbol(key.innerText));
    break;
      
  case 'key__space':
    key.addEventListener('click', () => printSymbol(' '));
    break;

  case 'key__tab':
    key.addEventListener('click', () => tabEvent());
    break;

  case 'key__caps':
    key.addEventListener('click', () => capsSwitch(key));
    break;

  case 'key__shift_left':
    key.addEventListener('mouseup', () => shiftEvent(false));
    key.addEventListener('mousedown', () => shiftEvent(true));
    break;

  case 'key__shift_right':
    key.addEventListener('mousedown', () => shiftEvent(true));
    key.addEventListener('mouseup', () => shiftEvent(false));
    break;

  case 'key__enter':
    key.addEventListener('click', () => addLine());
    break;
  case 'key__backspace':
    key.addEventListener('click', () => delPrevious());
    break;
  case 'key__del':
    key.addEventListener('click', () => delNext());
    break;

  case 'key__up':
    key.addEventListener('click', () => arrowEvent(key));
    break;

  case 'key__left':
    key.addEventListener('click', () => arrowEvent(key));
    break;

  case 'key__right':
    key.addEventListener('click', () => arrowEvent(key));
    break;

  case 'key__down':
    key.addEventListener('click', () => arrowEvent(key));
    break;

  default:
    break;
  }

};

const printSymbol = (symbol) => {

  if (isCaps || isShift) {
    textField.value += symbol[0];
  } else {
    textField.value += symbol[0].toLowerCase();
  }

};

const arrowEvent = (arrow) => {
  textField.value += arrow.innerText;
};

const tabEvent = () => {
  textField.value += '  ';
};

const capsSwitch = (key) => {
  isCaps = !isCaps;
  key.classList.toggle('key__caps_on');
};

const shiftEvent = (value) => {
  isShift = value;
};

const altEvent = (value) => {
  isAlt = value;
  if (isAlt && isShift) {
    changeLanguage();
  }
};

const addLine = () => {
  textField.value += '\n';
};

const delPrevious = () => {
  const currentPos = textField.selectionStart;
  if (currentPos === 0) {
    return;
  }
  textField.value = textField.value.slice(0, currentPos - 1) + textField.value.slice(currentPos);
  textField.selectionStart = currentPos - 1;
};

const delNext = () => {
  const currentPos = textField.selectionStart;
  textField.value = textField.value.slice(0, currentPos) + textField.value.slice(currentPos + 1);
  textField.selectionStart = currentPos;
};

const createKey = (keyText, extraClass, extraText) => {
  const key = document.createElement('button');
  key.innerText = keyText;
  key.setAttribute('class', 'keyboard__key');
  key.setAttribute('data-value', keyText);

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
keyboard.append(createKey('[', '_printable'));
keyboard.append(createKey(']', '_printable'));
keyboard.append(createKey('\\', '_printable', '|'));
keyboard.append(createKey('Del', 'key__del'));
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
keyboard.append(createKey(';', '_printable'));
keyboard.append(createKey('\'', '_printable'));
keyboard.append(createKey('Enter', 'key__enter'));
keyboard.append(createKey('Shift', 'key__shift_left'));
keyboard.append(createKey('Z', '_printable'));
keyboard.append(createKey('X', '_printable'));
keyboard.append(createKey('C', '_printable'));
keyboard.append(createKey('V', '_printable'));
keyboard.append(createKey('B', '_printable'));
keyboard.append(createKey('N', '_printable'));
keyboard.append(createKey('M', '_printable'));
keyboard.append(createKey(',', '_printable'));
keyboard.append(createKey('.', '_printable'));
keyboard.append(createKey('/', '_printable', '.'));
keyboard.append(createKey('\u2191', 'key__up'));
keyboard.append(createKey('Shift', 'key__shift_right'));
keyboard.append(createKey('Ctrl', 'key__ctrl_left'));
keyboard.append(createKey('Win', 'key__win'));
keyboard.append(createKey('Alt', 'key__alt_left'));
keyboard.append(createKey('Space', 'key__space'));
keyboard.append(createKey('Alt', 'key__alt_right'));
keyboard.append(createKey('Ctrl', 'key__ctrl_right'));
keyboard.append(createKey('\u2190', 'key__left'));
keyboard.append(createKey('\u2193', 'key__down'));
keyboard.append(createKey('\u2192', 'key__right'));

container.append(textField, keyboard);
document.body.append(container);

const buttons = Array.from(keyboard.children);

const checkCurrentLanguage = () => {
  if(buttons[0].innerText[0] == '`'){
    return russian;
  } else {
    return english;
  }
};

const changeLanguage = (storageLayout) => {
  let layout = checkCurrentLanguage();

  if (storageLayout) {
    layout = storageLayout;
  }

  buttons.forEach(key =>{
    if (key.classList.contains('_printable')) {
      const keyNodes = key.childNodes;
      const currentValue = key.getAttribute('data-value');
      const newValue = layout[currentValue] || currentValue;
      key.setAttribute('data-value', newValue);
  
      keyNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          node.textContent = newValue;
        }
      });
    }
  });

  if (layout == russian) {
    localStorage.setItem('layout', 'Russian');
  } else {
    localStorage.setItem('layout', 'English');
  }
};

if (localStorage.getItem('layout') == 'Russian') {
  changeLanguage(russian);
} else {
  changeLanguage(english);
}

const findButton = (e) => {

  switch (e.key) {

  case ' ':
    textField.value += ' ';
    return buttons.find(button => button.innerText === 'Space');

  case 'Tab':
    textField.value += '  ';
    return buttons.find(button => button.innerText === 'Tab');

  case 'CapsLock':
    return buttons.find(button => button.innerText === 'Caps Lock');

  case 'Shift':

    shiftEvent(true);
    if (e.code === 'ShiftRight') {
      return buttons.find(button => button.classList.contains('key__shift_right'));
    } else {
      return buttons.find(button => button.classList.contains('key__shift_left'));
    }

  case 'Enter':
    addLine();
    return buttons.find(button => button.innerText === 'Enter');

  case 'Alt':

    if (e.code === 'AltRight') {
      altEvent(true);
      return buttons.find(button => button.classList.contains('key__alt_right'));
    } else {
      altEvent(true);
      return buttons.find(button => button.classList.contains('key__alt_left'));
    }

  case 'Control':
      
    if (e.code === 'ControlRight') {
      return buttons.find(button => button.classList.contains('key__ctrl_right'));
    } else {
      return buttons.find(button => button.classList.contains('key__ctrl_left'));
    } 

  case 'OS':
    return buttons.find(button => button.innerText === 'Win'); 

  case 'ArrowUp':
    textField.value += '\u2191';
    return buttons.find(button => button.innerText === '\u2191'); 

  case 'ArrowDown':
    textField.value += '\u2193';
    return buttons.find(button => button.innerText === '\u2193'); 

  case 'ArrowLeft':
    textField.value += '\u2190';
    return buttons.find(button => button.innerText === '\u2190');

  case 'ArrowRight':
    textField.value += '\u2192';
    return buttons.find(button => button.innerText === '\u2192');

  case 'Delete':
    delNext();
    return buttons.find(button => button.innerText === 'Del'); 

  case 'Backspace': 
    delPrevious();
    return buttons.find(button => button.innerText === 'Backspace'); 

  default:

    if (isShift) {
      textField.value += e.key;  
      return buttons.find(button => button.lastChild.textContent.toLowerCase() === e.key.toLowerCase());
    } else {
      textField.value += e.key;  
      return buttons.find(button => button.firstChild.textContent.toLowerCase() === e.key.toLowerCase()); 
    }
  }
};

document.addEventListener('keydown', (e) => {
  e.preventDefault();

  const button = findButton(e);

  try {
    button.classList.add('keyboard__key_push');
  } catch (error) {
    alert('Клавиши нет на виртуальной клавиатуре\nThis key doesn\'t exist on virtual keyboard');
    return;
  }

  if (button.classList.contains('key__caps')) {
    capsSwitch(button);
  }


  document.addEventListener('keyup', (e) => {
    e.preventDefault();

    if (e.key === 'Shift') {
      shiftEvent(false);
    }

    if (e.key === 'Alt') {
      altEvent(false);
    }
  
    button.classList.remove('keyboard__key_push');
  });
});