const keyData = [
    [
        { key: { ru: '~', en: '`' }, shift: { ru: '`', en: '~' }, code: 'Backquote' },
        { key: { ru: '1', en: '1' }, shift: { ru: '!', en: '!' }, code: 'Digit1' },
        { key: { ru: '2', en: '2' }, shift: { ru: '"', en: '@' }, code: 'Digit2' },
        { key: { ru: '3', en: '3' }, shift: { ru: '№', en: '#' }, code: 'Digit3' }, 
        { key: { ru: '4', en: '4' }, shift: { ru: ';', en: '$' }, code: 'Digit4' }, 
        { key: { ru: '5', en: '5' }, shift: { ru: '%', en: '%' }, code: 'Digit5' }, 
        { key: { ru: '6', en: '6' }, shift: { ru: ':', en: '^' }, code: 'Digit6' }, 
        { key: { ru: '7', en: '7' }, shift: { ru: '?', en: '&' }, code: 'Digit7' }, 
        { key: { ru: '8', en: '8' }, shift: { ru: '*', en: '*' }, code: 'Digit8' }, 
        { key: { ru: '9', en: '9' }, shift: { ru: '(', en: '(' }, code: 'Digit9' }, 
        { key: { ru: '0', en: '0' }, shift: { ru: ')', en: ')' }, code: 'Digit0' }, 
        { key: { ru: '-', en: '-' }, shift: { ru: '_', en: '_' }, code: 'Minus' }, 
        { key: { ru: '=', en: '=' }, shift: { ru: '+', en: '+' }, code: 'Equal' }, 
        {key: 'Backspace', code: 'Backspace', class: 'key-backspace', noType: true,
        }
    ],


    [
        { key: 'Tab', code: 'Tab', class: 'key-tab', noType: true},
        { key: { ru: 'й', en: 'q' }, shift: { ru: 'Й', en: 'Q' }, class: 'letter', code: 'KeyQ' },
        { key: { ru: 'ц', en: 'w' }, shift: { ru: 'Ц', en: 'W' }, class: 'letter', code: 'KeyW' },
        { key: { ru: 'у', en: 'e' }, shift: { ru: 'У', en: 'E' }, class: 'letter', code: 'KeyE' },
        { key: { ru: 'к', en: 'r' }, shift: { ru: 'К', en: 'R' }, class: 'letter', code: 'KeyR' },
        { key: { ru: 'е', en: 't' }, shift: { ru: 'Е', en: 'T' }, class: 'letter', code: 'KeyT' },
        { key: { ru: 'н', en: 'y' }, shift: { ru: 'Н', en: 'Y' }, class: 'letter', code: 'KeyY' },
        { key: { ru: 'г', en: 'u' }, shift: { ru: 'Г', en: 'U' }, class: 'letter', code: 'KeyU' },
        { key: { ru: 'ш', en: 'i' }, shift: { ru: 'Ш', en: 'I' }, class: 'letter', code: 'KeyI' },
        { key: { ru: 'щ', en: 'o' }, shift: { ru: 'Щ', en: 'O' }, class: 'letter', code: 'KeyO' },
        { key: { ru: 'з', en: 'p' }, shift: { ru: 'З', en: 'P' }, class: 'letter', code: 'KeyP' },
        { key: { ru: 'х', en: '[' }, shift: { ru: 'Х', en: '{' }, class: 'letter', code: 'BracketLeft' },
        { key: { ru: 'ъ', en: ']' }, shift: { ru: 'Ъ', en: '}' }, class: 'letter', code: 'BracketRight' },
        {key: { ru: '\\', en: '\\' }, shift: { ru: '|', en: '|' }, code: 'Backslash', class: 'key-backslash'}
    ],

    [
        { key: '<span class="caps_icon">•</span><div>Caps<br>lock</div>', code: 'CapsLock', class: 'key-capslock', noType: true },
        { key: { ru: 'ф', en: 'a' }, shift: { ru: 'Ф', en: 'A' }, class: 'letter', code: 'KeyA' },
        { key: { ru: 'ы', en: 's' }, shift: { ru: 'Ы', en: 'S' }, class: 'letter', code: 'KeyS' },
        { key: { ru: 'в', en: 'd' }, shift: { ru: 'В', en: 'D' }, class: 'letter', code: 'KeyD' },
        { key: { ru: 'а', en: 'f' }, shift: { ru: 'А', en: 'F' }, class: 'letter', code: 'KeyF' },
        { key: { ru: 'п', en: 'g' }, shift: { ru: 'П', en: 'G' }, class: 'letter', code: 'KeyG' },
        { key: { ru: 'р', en: 'h' }, shift: { ru: 'Р', en: 'H' }, class: 'letter', code: 'KeyH' },
        { key: { ru: 'о', en: 'j' }, shift: { ru: 'О', en: 'J' }, class: 'letter', code: 'KeyJ' },
        { key: { ru: 'л', en: 'k' }, shift: { ru: 'Л', en: 'K' }, class: 'letter', code: 'KeyK' },
        { key: { ru: 'д', en: 'l' }, shift: { ru: 'Д', en: 'L' }, class: 'letter', code: 'KeyL' },
        { key: { ru: 'ж', en: ';' }, shift: { ru: 'Ж', en: ':' }, class: 'letter', code: 'Semicolon' },
        { key: { ru: 'э', en: '\'' }, shift: { ru: 'Э', en: '"' }, class: 'letter', code: 'Quote' },
        {key: 'Enter', code: 'Enter', class: 'key-enter', noType: true }
    ],

    [
        { key: 'Shift', code: 'ShiftLeft', class: 'key-shift', noType: true },
        { key: { ru: 'я', en: 'z' }, shift: { ru: 'Я', en: 'Z' }, class: 'letter', code: 'KeyZ' },
        { key: { ru: 'ч', en: 'x' }, shift: { ru: 'Ч', en: 'X' }, class: 'letter', code: 'KeyX' },
        { key: { ru: 'с', en: 'c' }, shift: { ru: 'С', en: 'C' }, class: 'letter', code: 'KeyC' },
        { key: { ru: 'м', en: 'v' }, shift: { ru: 'М', en: 'V' }, class: 'letter', code: 'KeyV' },
        { key: { ru: 'и', en: 'b' }, shift: { ru: 'И', en: 'B' }, class: 'letter', code: 'KeyB' },
        { key: { ru: 'т', en: 'n' }, shift: { ru: 'Т', en: 'N' }, class: 'letter', code: 'KeyN' },
        { key: { ru: 'ь', en: 'm' }, shift: { ru: 'Ь', en: 'M' }, class: 'letter', code: 'KeyM' },
        { key: { ru: 'б', en: ',' }, shift: { ru: 'Б', en: '<' }, class: 'letter', code: 'Comma' },
        { key: { ru: 'ю', en: '.' }, shift: { ru: 'Ю', en: '>' }, class: 'letter', code: 'Period' },
        { key: { ru: '.', en: '/' }, shift: { ru: ',', en: '?' }, code: 'Slash' },
        { key: '↑', code: 'ArrowUp', noType: true }, 
        { key: 'Shift', code: 'ShiftRight', class: 'key-shift', noType: true }
    ],


    [
        { key: 'Ctrl', code: 'ControlLeft', class: 'key-leftctrl', noType: true },
        { key: { ru: 'RU', en: 'EN' }, code: 'Lang', class: 'key-lang', noType: true },
        { key: 'Alt', code: 'AltLeft', class: 'key-leftalt', noType: true },
        { key: ' ', code: 'Space', class: 'key-space' },
        { key: 'Alt', code: 'AltRight', class: 'key-rightalt', noType: true },
        { key: 'Ctrl', code: 'ControlRight', class: 'key-rightctrl', noType: true },
        { key: '←', code: 'ArrowLeft', noType: true },
        { key: '↓', code: 'ArrowDown', noType: true },
        { key: '→', code: 'ArrowRight', noType: true }
    ],
];


function createDomElement(elem, text, styles) {
    const domElem = document.createElement(elem);
    domElem.innerHTML = text;
    domElem.classList.add(styles);
    return domElem;
}


const body = document.querySelector('body');
const textarea = createDomElement('textarea', '', 'textfield');
const keyboard = createDomElement('div', '', 'keyboard');
const keyboardContainer = createDomElement('div', '', 'keyboard-container');
let cursor = textarea.selectionStart;
let shift = false;
let lang = 'en';



body.append(textarea, keyboard);
keyboard.append(keyboardContainer);


createKeyboard()

function createKeyboard() {

    for (let i = 0; i < keyData.length; i++) {
        const row = createDomElement('div', '', 'keyboard-row');

        keyboardContainer.append(row);

        keyData[i].forEach((e) => {

            let keyLabel = shift && e.shift ? e.shift[lang] : e.key.ru && e.key.en ? e.key[lang] : e.key;

            const key = createDomElement('div', keyLabel, 'key');

            if (e.class) {
                key.classList.add(e.class);
            }

            key.dataset.code = e.code;

            if (e.key.ru && e.key.en) {
                key.dataset.ru = e.key.ru;
                key.dataset.en = e.key.en;
            }

            if (e.shift) {
                key.dataset.ruShift = e.shift.ru;
                key.dataset.enShift = e.shift.en;
            }

            if (e.noType) {
                key.dataset.noType = true;
            }


            row.append(key);
        })
    }
}

const capsIcon = document.querySelector('.caps_icon');
textarea.focus()


document.addEventListener('keydown', function(event) {
    textarea.focus();
    const elem = document.querySelector(`div[data-code=${event.code}]`);

    elem.classList.add('active');
    

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        keyboardContainer.innerHTML = '';
        shift = true;
        createKeyboard()
    }

    if (event.code === 'CapsLock') {
        capsIcon.classList.toggle('caps_on');
        if (capsIcon.classList.contains('caps_on')) {
            
            
            
        }
    }

    if (event.code === 'Backspace') {
        textarea.innerHTML = textarea.innerHTML.slice(0, -1);
    }

})

document.addEventListener('keyup', function(event) {
    const elem = document.querySelector(`div[data-code=${event.code}]`);

    elem.classList.remove('active');

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        keyboardContainer.innerHTML = '';
        shift = false;
        createKeyboard()
    }


})


keyboard.addEventListener('click', function(event) {
    const isKey = event.target.classList.contains('key');
    const isBackspace = event.target.classList.contains('key-backspace');

    if (isBackspace) {

        if (textarea.innerHTML === '') {
            return;
        }

        textarea.innerHTML = textarea.innerHTML.slice(0, -1);    
    }

    if(isKey) {
        
        const isLetter = event.target.dataset.en;
        if (isLetter) {

            textarea.innerHTML += event.target.innerHTML;
        }
    }
    
})
