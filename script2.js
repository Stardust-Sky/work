'use strict';
let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpences: {},
    income: [],
    savings: false

};



for (let i = 0; i<2; i++){
    let a = prompt('Введите обязательную статью расходов в этом месяце'),
        b = prompt( 'Во сколько обойдется?');
    if ((typeof(a))==='string' && (typeof(a)) !=null && ((typeof(b))==='string' && (typeof(b) !=null)) && a != '' && b != '' && a.length < 50)
    { console.log('done')

        appData.expenses[a] = b;

    } else{
        i--;
    }
    
};
appData.moneyPerDay = appData.budjet / 30;

alert('Бюджет на 1 день =' + appData.moneyPerDay);

if(appData.moneyPerDay < 100){
    console.log('минимальный уровень достатка')
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000){
    console.log('middle уровень достатка')
} else if ( appData.moneyPerDay >= 2000){
    console.log('high уровень достатка')
} else {
    console.log('error')
}