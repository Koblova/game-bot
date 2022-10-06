let quastion;
let answer = 55;


function check() {
    
    quastion = prompt("Угадай число от 1 до 100");
    
    if (quastion === null) {
        alert("Игра закончена");
    } else if (quastion > 100 || quastion < 0) {
        alert("Число должно быть от 1 до 100!");
        check();  
    } else if (quastion.length == 0 || isNaN(quastion) || (/^\s*$/.test(quastion))) {
        alert("Введи число!");
        check();
    } else if (quastion > answer) {
        alert("Загаданное число меньше");
        check();
    } else if (quastion < answer) {
        alert ("Загаданное число больше");
        check();
    } else if (quastion <= 100 && quastion >= 0) {
        return confirm("Вы угадали!");
    };
}
check();
