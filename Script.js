const p1 = document.querySelector('.FIRST_P');
const p2 = document.querySelector('.SECOND_P');
const p3 = document.querySelector('.THIRD_P');
const STM = document.querySelector('.stm');
const S = document.querySelector('.nck')
const N = document.getElementById('name');
const title = document.getElementById('title');
const B = document.getElementById('bill');
const P = document.getElementById('paid');
const rate = document.getElementById('rate');
const button = document.getElementById('btn');
const sp1 = document.querySelector('.ch1');
const sp2 = document.querySelector('.ch2');

button.addEventListener('click', () => {
    if (N.value == '' || title.value == '' || B.value == '' || P.value == '' || rate.value == '') {
        S.classList.add('r');
        p1.innerHTML = 'Make sure all fields are filled';
        p2.innerHTML = 'Input your name';
        setTimeout(() => {
            S.remove();
        }, 6000);
        a();
        sp1.innerHTML = `<i class="fa">&#xf00d;</i>`;
        sp2.innerHTML = `$${P.value - B.value}`;
    }
    if (B.value > P.value) {
        S.classList.add('r')
        p1.innerHTML = `${title.value} ${N.value},It seems like you have not cleared your bill`;
        setTimeout(() => {
            S.remove();
        }, 6000);
        a();
        sp1.innerHTML = `<i class="fa">&#xf00d;</i>`;
        sp2.innerHTML = `$${P.value - B.value}`;
    }
    if (P.value > B.value) {
        S.classList.add('s');
        p1.innerHTML = 'Thank you for your ratings,We`ll be better';
        p2.innerHTML = `${title.value} ${N.value},you have cleared your bills and $${Math.round(P.value) - Math.round(B.value)} for Tip`;
        p3.innerHTML = 'Thanks for your patronage';
        setTimeout(() => {
            S.remove();
        }, 6000);
        a();
        sp1.innerHTML = `&#10003;`;
        sp2.innerHTML = `$${Math.floor(Math.round(P.value) - Math.round(B.value))}`;
    }
})

let a = () => {
    sp1.style.visibility = 'visible';
    sp2.style.visibility = 'visible';
}