// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом:

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби.


let fraction1 = {
    numerator1: parseInt(prompt("Введите числитель дроби")),
    denominator1: parseInt(prompt("Введите знаменатель дроби")),
};

console.log(fraction1);

let fraction2 = {
    numerator2: parseInt(prompt("Введите числитель дроби")),
    denominator2: parseInt(prompt("Введите знаменатель дроби")),
};

console.log(fraction2);

function plus() {
    b = fraction1.denominator1 * fraction2.numerator2;
    a = fraction2.denominator2 * fraction1.numerator1 + fraction1.denominator1 * fraction2.numerator2;
    alert(`${a}/${b}`);
}

plus();

function minus() {
    b = fraction1.denominator1 * fraction2.denominator2;
    a = fraction2.denominator2 * fraction1.numerator1 - fraction1.denominator1 * fraction2.numerator2;
    alert(`${a}/${b}`);
}
minus();

function multiply() {
    a = fraction1.numerator1 * fraction2.numerator2;
    b = fraction1.denominator1 * fraction2.denominator2;
    alert(`${a}/${b}`);
}
multiply();

function division() {
    a = fraction1.numerator1 * fraction2.denominator2;
    b = fraction1.denominator1 * fraction2.numerator2;
    alert(`${a}/${b}`);
}
division();

function reduction() {
    if (fraction1.numerator1 >= fraction1.denominator1) {
        max = fraction1.numerator1;
        min = fraction1.denominator1;
    } else {
        min = fraction1.numerator1;
        max = fraction1.denominator1;
    }
    let r = max % min;
    if (r == 0) {
        max = min;

        while (r !== 0) {
            r = max % min;
            max = min;
            min = r;
        }
        console.log(max);
        a = fraction1.numerator1 / max;
        b = fraction1.denominator1 / max;
    }
    reduction();
    alert((`${a}/${b}`));
}

