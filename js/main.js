'use strict';
const button = document.querySelector('.btn');
const input = document.querySelector('#input_name');
const result_cards = document.querySelector('.result');

const showInfo = () => {
    fetch(`https://api.github.com/users/${input.value}`) 
    .then(response => response.json())
    .then(data => {
        console.log(data);
        //result_cards.innerHTML = data.name;
        //userName esencialmente es un array. Con el split le digo que me separe los elementos por espacios y entonces tenemos dos arrays diferentes. Con el 0 le decimos que nos coja el primer elemento de los dos que se han creado, en este caso el nombre.
        const userName = data.name.split(' ')[0];
        //Recorremos el array del nombre, es decir, cada una de las letras.
        for(const item of userName) {
            //En el ul vete añadiéndome += por cada item del array un li
            result_cards.innerHTML += `<li>${item}</li>`
        }
    })
}
button.addEventListener('click', showInfo);

