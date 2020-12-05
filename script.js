stripe.onclick = function () {
    stripe.classList.add('animate');
};

stripe2.onclick = function () {
    let sec = new Date().getSeconds() % 10;
    stripe2.style.transitionDelay = '-' + sec + 's';
    stripe2.classList.add('animate');
};