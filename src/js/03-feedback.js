const throttle = require("lodash.throttle");
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');

autoSaveText();
let formData = {}

form.addEventListener('input', throttle(textTime, 1000));

function textTime() {
    
    formData = {
        email: input.value,
        message: textArea.value
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    
    console.log(formData);
}

function autoSaveText() {
        const saveText = localStorage.getItem('feedback-form-state');
        const parseText = JSON.parse(saveText);
        if (saveText) {
                input.value = parseText.email;
            textArea.value = parseText.message;
        }
}

form.addEventListener('submit', onSubmitForm)

function onSubmitForm(event) {
    event.preventDefault();
    const inputEmail = event.currentTarget.elements.email.value;
    const areaText = textArea.value;
    const obj = {
        email: inputEmail,
        message: areaText,
    }
        console.log(obj);
    localStorage.removeItem('feedback-form-state');
    form.reset();
}

