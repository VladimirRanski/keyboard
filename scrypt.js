alert ('Подождите пожалуйста с проверкой до вечера среды. В связи с запарой на работе и дома, не успел. Если оставете контакты - сообщу как будет готово. Спасибо за понимание.');

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
        keyboardWrap = document.querySelector('.keyboard-wrap');

let capsLockFlag = false;

for (let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('upperCaseName', keys[i].innerText.toUpperCase());
}

document.onkeydown = function (event) {
    console.log(event);
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
        // MetaLeft
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
            controlRight.classList.remove('active');
        }
        if(e.code == 'ControlRight') {
            controlLeft.classList.remove('active');
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
            controlRight.classList.remove('active');
            controlRight.classList.remove('remove');
        }
        if(e.code == 'ControlRight') {
            controlLeft.classList.remove('active');
            controlLeft.classList.remove('remove');
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