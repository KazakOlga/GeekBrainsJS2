const nameForm = /^[а-яА-ЯЁё]+$/;
const emailForm = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
const phoneForm = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;

const firstName = document.querySelector('.name');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');



document.querySelector('.join').onclick = function (e) {
    e.preventDefault();
    if (!nameForm.test(firstName.value)) {
        console.log('Имя должно содержать только буквы!')
    } else {
        console.log('input is correct')
    };
    if (!emailForm.test(email.value)) {
        console.log('Email введен не корректно')
    } else {
        console.log('input is correct')
    };
    if (!phoneForm.test(phone.value)) {
        console.log('Телефон введен не корректно')
    } else {
        console.log('input is correct')
    };
}