'use strict'

function game() {
    let answer = 55;
    let quastion = prompt("Угадай число от 1 до 100");

    function check() {              
        if (quastion === null) {
            alert("Игра закончена");
        } else if (quastion > 100 || quastion < 0) {
            alert("Число должно быть от 1 до 100!");
            game(answer)  
        } else if (quastion.length == 0 || isNaN(quastion) || (/^\s*$/.test(quastion))) {
            alert("Введи число!");
            game(answer) 
        } else if (quastion > answer) {
            alert("Загаданное число меньше");
            game(answer) 
        } else if (quastion < answer) {
            alert ("Загаданное число больше");
            game(answer) 
        } else if (quastion <= 100 && quastion >= 0) {
            return confirm("Вы угадали!");
        };
    }
    check();
}
game();
