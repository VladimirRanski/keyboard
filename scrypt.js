// alert ('Подождите пожалуйста с проверкой до вечера среды. В связи с запарой на работе и дома, не успел. Если оставете контакты - сообщу как будет готово. Спасибо за понимание.');

const   ruNotShiftKey = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'CapsLock',  'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Control', 'AltGraph', 'ContextMenu', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
        ruNotShiftTextKey = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'CapsLock',  'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Ctrl', 'Alt', '☰', 'Control', '◄', '▼', '►'],
        ruShiftKey = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Control', 'AltGraph', 'ContextMenu', 'CONTROL', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
        ruShiftTextKey = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'CapsLock',  'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Ctrl', 'Alt', '☰', 'Control', '◄', '▼', '►'],
        enNotShiftKey = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ContextMenu', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
        enNotShiftTextKey = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '☰', 'Ctrl', '◄', '▼', '►'],
        enShiftKey = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ContextMenu', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
        enShiftTextKey = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '☰', 'Ctrl', '◄', '▼', '►'],
        enCapsKey = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ContextMenu', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
        enCapsTextKey = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '☰', 'Ctrl', '◄', '▼', '►'],
        ruCapsKey = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'AltGraph', 'ContextMenu', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
        ruCapsTextKey = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '☰', 'Ctrl', '◄', '▼', '►'],
        keyLength = ruCapsKey.length;


function initEnNotShift() {
    document.querySelector('#keyboard-wrap').innerHTML = '<div class="keyboard-keys"></div>';
    document.querySelector('.keyboard-keys').innerHTML =
        `
            <div class="row0"></div>
            <div class="row1"></div>
            <div class="row2"></div>
            <div class="row3"></div>
            <div class="row4"></div>
        `;
    
    let row = '';
    for (let i = 0; i < 14; i++) {
        if (i == 13) {
            row += '<div class = "keys backspase-key">' + enNotShiftTextKey[i] + '</div>'
            continue;
        }
        row += '<div class = "keys">' + enNotShiftTextKey[i] + '</div>'
    }
    document.querySelector('.row0').innerHTML = row;

    row = '';
    for (let i = 14; i < 28; i++) {
        if (i == 14) {
            row += '<div class = "keys tab-key">' + enNotShiftTextKey[i] + '</div>'
            continue;
        }
        if (i == 27) {
            row += '<div class = "keys slash-key">' + enNotShiftTextKey[i] + '</div>'
            continue;
        }
        row += '<div class = "keys">' + enNotShiftTextKey[i] + '</div>'
    }
    document.querySelector('.row1').innerHTML = row;

    row = '';
    for (let i = 28; i < 41; i++) {
        if (i == 28) {
            row += '<div class = "keys capslk-key">' + enNotShiftTextKey[i] + '</div>'
            continue;
        }
        if (i == 40) {
            row += '<div class = "keys enter-key">' + enNotShiftTextKey[i] + '</div>'
            continue;
        }
        row += '<div class = "keys">' + enNotShiftTextKey[i] + '</div>'
    }
    document.querySelector('.row2').innerHTML = row;

    row = '';
    for (let i =41; i < 54; i++) {
        if (i == 41) {
            row += '<div class = "keys shift-left-key">' + enNotShiftTextKey[i] + '</div>'
            continue;
        }
        if (i == 52) {
            row += '<div class = "keys up-key">' + enNotShiftTextKey[i] + '</div>'
            continue;
        }
        if (i == 53) {
            row += '<div class = "keys shift-right-key">' + enNotShiftTextKey[i] + '</div>'
            continue;
        }
        row += '<div class = "keys">' + enNotShiftTextKey[i] + '</div>'
    }
    document.querySelector('.row3').innerHTML = row;

    // row = '';
    // for (let i = 54; i < keyLength; i++) {
    //     if (i == 14) {
    //         row += '<div class = "keys tab-key">' + enNotShiftTextKey[i] + '</div>'
    //         continue;
    //     }
    //     if (i == 27) {
    //         row += '<div class = "keys slash-key">' + enNotShiftTextKey[i] + '</div>'
    //         continue;
    //     }
    //     row += '<div class = "keys">' + enNotShiftTextKey[i] + '</div>'
    // }
    document.querySelector('.row4').innerHTML = `
        <div class="keys ctrl-left-key">Ctrl</div>
        <div class="keys win-key">Win</div>
        <div class="keys alt-left-key">Alt</div>
        <div class="keys space-key"></div>
        <div class="keys alt-right-key">Alt</div>
        <div class="keys context-menu-key">☰</div>
        <div class="keys ctrl-right-key">Ctrl</div>
        <div class="keys left-key">◄</div>
        <div class="keys down-key">▼</div>
        <div class="keys right-key">►</div>
    `;
}

initEnNotShift();

const   keys = document.querySelectorAll('.keys'),
        space = document.querySelector('.space-key'),
        сontextMenu = document.querySelector('.context-menu-key'),
        shiftLeft = document.querySelector('.shift-left-key'),
        shiftRight = document.querySelector('.shift-right-key'),
        altLeft = document.querySelector('.alt-left-key'),
        altRight = document.querySelector('.alt-right-key'),
        controlLeft = document.querySelector('.ctrl-left-key'),
        controlRight = document.querySelector('.ctrl-right-key'),
        win = document.querySelector('.win-key'),
        capsLock = document.querySelector('.capslk-key'),
        toggleCircle = document.querySelector('.toggle-circle'),
        nightMode = document.querySelector('.night-mode'),
        body = document.querySelector('body'),
        textInput = document.querySelector('.text'),
        changeColor = document.querySelector('.change-light-color'),
        colorsInput = document.querySelector('.colors-input'),
        keyboardsLight = document.querySelector('.keyboard-lights'),
        keyboardWrap = document.querySelector('.keyboard-wrap'),
        up = document.querySelector('.up-key'),
        left = document.querySelector('.left-key'),
        down = document.querySelector('.down-key'),
        right = document.querySelector('.right-key');
let lenKeyboad = 'en';
let capsLockFlag = false;
let shiftFlag = false;
let masSimbol = [];

// for (let i = 0; i < keys.length; i++) {
//     masSimbol.push(enNotShiftTextKey[i].toUpperCase());
//     // console.log(ruNotShiftTextKey[i].toUpperCase());
// }
// console.log(masSimbol);
for (let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('upperCaseName', keys[i].innerText.toUpperCase());
}

document.onkeydown = function (event) {
    // console.log(event);
    masSimbol.push(event.key);
    console.log(masSimbol);
}

window.addEventListener('keydown', function(e) {
    for (let i = 0; i < keys.length; i++) {
        if((e.key == keys[i].getAttribute('keyname')) || (e.key == keys[i].getAttribute('upperCaseName'))) {
            keys[i].classList.add('active');
        }
        if(e.code == 'Space') {
            space.classList.add('active');
        }
        if(e.code == 'ContextMenu') {
            сontextMenu.classList.add('active');
        }
        if(e.code == 'MetaLeft') {
            win.classList.add('active');
        }
        if(e.code == 'ShiftLeft') {
            shiftRight.classList.remove('active');
        }
        if(e.code == 'ShiftRight') {
            shiftLeft.classList.remove('active');
        }
        if(e.code == 'AltLeft') {
            altRight.classList.remove('active');
        }
        if(e.code == 'AltRight') {
            altLeft.classList.remove('active');
        }
        if(e.code == 'ControlLeft') {
            controlLeft.classList.add('active');
            controlRight.classList.remove('active');
        }
        if(e.code == 'ControlRight') {
            controlRight.classList.add('active')
            controlLeft.classList.remove('active');
        }
        if(e.code == 'ArrowUp') {
            up.classList.add('active');
            up.classList.add('remove');
        }
        if(e.code == 'ArrowLeft') {
            left.classList.add('active');
            left.classList.add('remove');
        }
        if(e.code == 'ArrowDown') {
            down.classList.add('active');
            down.classList.add('remove');
        }
        if(e.code == 'ArrowRight') {
            right.classList.add('active');
            right.classList.add('remove');
        }
        if(e.code == 'CapsLock') {
            if (capsLockFlag == false) {
                capsLock.classList.add('active');
                capsLockFlag = true;
                break;
            } else {
                capsLock.classList.remove('active');
                capsLockFlag = false;
                break;
            }
        }
    }
})

window.addEventListener('keyup', function(e) {
    for (let i = 0; i < keys.length; i++) {
        if((e.key == keys[i].getAttribute('keyname')) || (e.key == keys[i].getAttribute('upperCaseName'))) {
            keys[i].classList.remove('active');
            keys[i].classList.add('remove');
        }
        if(e.code == 'Space') {
            space.classList.remove('active');
            space.classList.add('remove');
        }
        if(e.code == 'ContextMenu') {
            сontextMenu.classList.remove('active');
            сontextMenu.classList.add('remove');
        }
        if(e.code == 'MetaLeft') {
            win.classList.remove('active');
            win.classList.add('remove');
        }
        if(e.code == 'ShiftLeft') {
            shiftRight.classList.remove('active');
            shiftRight.classList.remove('remove');
        }
        if(e.code == 'ShiftRight') {
            shiftLeft.classList.remove('active');
            shiftLeft.classList.remove('remove');
        }
        if(e.code == 'AltLeft') {
            altRight.classList.remove('active');
            altRight.classList.remove('remove');
        }
        if(e.code == 'AltRight') {
            altLeft.classList.remove('active');
            altLeft.classList.remove('remove');
        }
        if(e.code == 'ControlLeft') {
            controlLeft.classList.remove('active');
            controlLeft.classList.add('remove');
            controlRight.classList.remove('active');
            controlRight.classList.remove('remove');
        }
        if(e.code == 'ControlRight') {
            controlRight.classList.remove('active');
            controlRight.classList.add('remove');
            controlLeft.classList.remove('active');
            controlLeft.classList.remove('remove');
        }
        if(e.code == 'ArrowUp') {
            up.classList.remove('active');
            up.classList.remove('remove');
        }
        if(e.code == 'ArrowLeft') {
            left.classList.remove('active');
            left.classList.remove('remove');
        }
        if(e.code == 'ArrowDown') {
            down.classList.remove('active');
            down.classList.remove('remove');
        }
        if(e.code == 'ArrowRight') {
            right.classList.remove('active');
            right.classList.remove('remove');
        }
        setTimeout(() => {
            keys[i].classList.remove('remove')
        }, 1000);
    }
})

nightMode.addEventListener('click', function() {
    toggleCircle.classList.toggle('active');
    body.classList.toggle('active');
    nightMode.classList.toggle('active');
    keyboardWrap.classList.toggle('active');
    textInput.classList.toggle('active');
    changeColor.classList.toggle('active');
    for (let i = 0; i < keys.length; i++) {
        keys[i].classList.toggle('keys-night');
    }
})

keys.forEach(function(element) {
    element.onclick = function (event) {
        keys.forEach(function(element) {
            element.classList.remove('active');
        })
        this.classList.add('active');
        setTimeout(() => {
            this.classList.remove('active');
            this.classList.add('remove')
        }, 200);
    }
})

colorsInput.addEventListener('input', function () {
    for (let i = 0; i < keys.length; i++) {
        keys[i].style.color = colorsInput.value;
    }
    keyboardsLight.style.background = colorsInput.value;
})