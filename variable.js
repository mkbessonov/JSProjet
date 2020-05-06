"use strict"

function localVariable() {
    let message = "Hello world!";
    console.log(message);
    let $ = 1;                  //Так можно
    let _ = 2;                  //Так тоже можно
    console.log($);
    console.log(_);

    //let 1a = 5;               //не может начинаться с цифры
    //let my-name;              //- не разрешен

    let apple = "яблоко";
    let Apple = "тыква";        //Регистр имеет значение
    console.log(apple);
    console.log(Apple);

    let яблоко = "Яблоко";      //Нелатинские буквы можно, но не рекомендуется.
    console.log(яблоко);

    //num = 5;                  //можно без use strict

    const myBirthday = "01.01.1990";            //константа
    console.log(myBirthday);
    //myBirthday = "02.01.1990";                //Ошибка
    //константы с именами, записанными заглавными буквами,
    // используются только как псевдонимы для «жёстко закодированных» значений
    const COLOR_BLUE = "#00F";
    console.log(COLOR_BLUE);
}

localVariable();
