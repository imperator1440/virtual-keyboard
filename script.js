const container = document.createElement('main');
const textField = document.createElement('textarea');
const keyboard = document.createElement('div');

keyboard.setAttribute('class', 'keyboard');

const createKey = (keyText, extraClass, extraText) => {
  const key = document.createElement('button');
  key.innerText = keyText;
  key.setAttribute('class', 'keyboard__key');

  if (extraClass) {
    key.classList.add(extraClass);
  }

  if (extraText) {
    const extraValue = document.createElement('span');
    extraValue.innerText = extraText;
    extraValue.setAttribute('class', 'key__extraText');
    key.append(extraValue);
  }

  return key;
};

const addKey = (keyboard, key) => {
  keyboard.append(key);
};

addKey(keyboard, createKey('`', '_printable', '~'));
addKey(keyboard, createKey('1', '_printable', '!'));
addKey(keyboard, createKey('2', '_printable', '@'));
addKey(keyboard, createKey('3', '_printable', '#'));
addKey(keyboard, createKey('4', '_printable', '$'));
addKey(keyboard, createKey('5', '_printable', '%'));
addKey(keyboard, createKey('6', '_printable', '^'));
addKey(keyboard, createKey('7', '_printable', '&'));
addKey(keyboard, createKey('8', '_printable', '*'));
addKey(keyboard, createKey('9', '_printable', '('));
addKey(keyboard, createKey('0', '_printable', ')'));
addKey(keyboard, createKey('-', '_printable', '_'));
addKey(keyboard, createKey('=', '_printable', '+'));
addKey(keyboard, createKey('Backspace', 'key__backspace'));
addKey(keyboard, createKey('Tab', 'key__tab'));
addKey(keyboard, createKey('Q', '_printable'));
addKey(keyboard, createKey('W', '_printable'));
addKey(keyboard, createKey('E', '_printable'));
addKey(keyboard, createKey('R', '_printable'));
addKey(keyboard, createKey('T', '_printable'));
addKey(keyboard, createKey('Y', '_printable'));
addKey(keyboard, createKey('U', '_printable'));
addKey(keyboard, createKey('I', '_printable'));
addKey(keyboard, createKey('O', '_printable'));
addKey(keyboard, createKey('P', '_printable'));
addKey(keyboard, createKey('[', '_printable'));
addKey(keyboard, createKey(']', '_printable'));
addKey(keyboard, createKey('\\', '_printable', '/'));
addKey(keyboard, createKey('Del'));
addKey(keyboard, createKey('Caps Lock', 'key__caps'));
addKey(keyboard, createKey('A', '_printable'));
addKey(keyboard, createKey('S', '_printable'));
addKey(keyboard, createKey('D', '_printable'));
addKey(keyboard, createKey('F', '_printable'));
addKey(keyboard, createKey('G', '_printable'));
addKey(keyboard, createKey('H', '_printable'));
addKey(keyboard, createKey('J', '_printable'));
addKey(keyboard, createKey('K', '_printable'));
addKey(keyboard, createKey('L', '_printable'));
addKey(keyboard, createKey(';', '_printable'));
addKey(keyboard, createKey(`'`, '_printable'));
addKey(keyboard, createKey('Enter', 'key__enter'));
addKey(keyboard, createKey('Shift', 'key__shift_left'));
addKey(keyboard, createKey('Z', '_printable'));
addKey(keyboard, createKey('X', '_printable'));
addKey(keyboard, createKey('C', '_printable'));
addKey(keyboard, createKey('V', '_printable'));
addKey(keyboard, createKey('B', '_printable'));
addKey(keyboard, createKey('N', '_printable'));
addKey(keyboard, createKey('M', '_printable'));
addKey(keyboard, createKey(',', '_printable'));
addKey(keyboard, createKey('.', '_printable'));
addKey(keyboard, createKey('/', '_printable'));
addKey(keyboard, createKey('\u2191', 'key__up'));
addKey(keyboard, createKey('Shift', 'key__shift_right'));
addKey(keyboard, createKey('Ctrl', 'key__ctrl'));
addKey(keyboard, createKey('Win', 'key__win'));
addKey(keyboard, createKey('Alt', 'key__alt'));
addKey(keyboard, createKey('Space', 'key__space'));
addKey(keyboard, createKey('Alt', 'key__alt'));
addKey(keyboard, createKey('Ctrl', 'key__ctrl'));
addKey(keyboard, createKey('\u2190', 'key__left'));
addKey(keyboard, createKey('\u2193', 'key__down'));
addKey(keyboard, createKey('\u2192', 'key__right'));

container.append(textField, keyboard);
document.body.append(container);
