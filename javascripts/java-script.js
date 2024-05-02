document.addEventListener("DOMContentLoaded", function() {

    let myFunction = function() { // Тело функции
        let integriruemtext = document.getElementById('integriruemtext');

        integriruemtext.textContent = "Hi student!"; // Добавили текст в див

        integriruemtext.style.fontFamily = 'CarlaSansLight'; // добавили стили к тексту 
        integriruemtext.style.fontSize = "35px"; // добавили стили к тексту 
    }; 
    
    myFunction(); // Вызов функции
    
    
});
