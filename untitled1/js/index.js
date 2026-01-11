console.log('Happy developing ✨')

window.onload = function() {
    dragElement(document.getElementById('login-modal'));

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    usernameInput.addEventListener('focus', clearErrorStyle);
    passwordInput.addEventListener('focus', clearErrorStyle);

    usernameInput.addEventListener('keydown', handleKeyDown);
    passwordInput.addEventListener('keydown', handleKeyDown);

    document.getElementById('login-button').onclick = login;
};

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        login();
    }
}

function login() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    clearErrorStyle();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
        if (!username) {
            usernameInput.classList.add('error');
        }
        if (!password) {
            passwordInput.classList.add('error');
        }
        showMessage('用户名和密码不能为空', 'error');
        return;
    }

    if (username === 'admin123' && password === 'admin123') {
        showMessage('登录成功', 'success');
        window.location.href= '/home.html';
    } else {
        usernameInput.classList.add('error');
        passwordInput.classList.add('error');
        showMessage('用户名或密码错误', 'error');
    }
}

function clearErrorStyle() {
    document.getElementById('username').classList.remove('error');
    document.getElementById('password').classList.remove('error');
}

function showMessage(message, type) {
    let messageBox = document.createElement('div');
    messageBox.className = `message ${type}`;
    messageBox.innerHTML = `<span>${message}</span>`;

    document.body.appendChild(messageBox);
    messageBox.style.display = 'flex';

    setTimeout(() => {
        messageBox.style.opacity = '0';
        setTimeout(() => document.body.removeChild(messageBox), 500);
    }, 2000);
}

function dragElement(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (element.querySelector("h2")) {
        element.querySelector("h2").onmousedown = dragMouseDown;
    } else {
        element.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}