const btnElement = document.getElementById('btn');
const inputRadioFieldElements = document.querySelectorAll('input[type="radio"]');

btnElement.addEventListener('click', (e) => {

    inputRadioFieldElements.forEach(element => {
        if (element.checked) {
            console.log(element);
        }
    })
})