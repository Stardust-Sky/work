'use strict';

let money, time;

function start(){
     money = +prompt("Ваш бюджет на месяц?");
     time = prompt("Введите дату в формате YYYY-MM-DD");

     while(isNaN(money) || money=='' || money==null){
        money = +prompt("Ваш бюджет на месяц?");
     }
}
start();



let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpences: {},
    income: [],
    savings: true,
    chooseExpences: function(){    
        for (let i = 0; i<2; i++){
        let a = prompt('Введите обязательную статью расходов в этом месяце'),
            b = prompt( 'Во сколько обойдется?');
        if ((typeof(a))==='string' && (typeof(a)) !=null && ((typeof(b))==='string' && (typeof(b) !=null)) && a != '' && b != '' && a.length < 50)
        { console.log('done')
    
            appData.expenses[a] = b;
    
        } else{
            i--;
        }
        
    }
        
    },
    detectDayBudjet: function(){
        appData.moneyPerDay = (appData.budjet / 30).toFixed();

        alert('Бюджет на 1 день =' + appData.moneyPerDay);
    },
    detectLevel: function(){
        if(appData.moneyPerDay < 100){
            console.log('минимальный уровень достатка')
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000){
            console.log('middle уровень достатка')
        } else if ( appData.moneyPerDay >= 2000){
            console.log('high уровень достатка')
        } else {
            console.log('error')
        }

    },
    chechSavings: function(){
        if (appData.savings == true){
            let save = +prompt('Deposit value'),
                percent = +prompt('Percent');
    
                appData.monthIncome = save/100/12*percent;
                alert("month value:" + appData.monthIncome);
        }

    },
    choosoptExpencese: function(){
        for ( let i = 1; i<3; i++){
            let opt = prompt('статья необяз расходов', '');
            appData.optionalExpences[i] = opt;
        }
    },
    chooseIncome: function(){
        let items = prompt('что принесет доп доход?(перечислить через запятую', '');
        appData.income = items.split(', ');
        appData.income.push(prompt('Может еще?',''));
        appData.income.sort();
    }

};


// function chooseExpences(){
//     for (let i = 0; i<2; i++){
//         let a = prompt('Введите обязательную статью расходов в этом месяце'),
//             b = prompt( 'Во сколько обойдется?');
//         if ((typeof(a))==='string' && (typeof(a)) !=null && ((typeof(b))==='string' && (typeof(b) !=null)) && a != '' && b != '' && a.length < 50)
//         { console.log('done')
    
//             appData.expenses[a] = b;
    
//         } else{
//             i--;
//         }
        
//     }
// }
// chooseExpences();




// appData.moneyPerDay = (appData.budjet / 30).toFixed();

// alert('Бюджет на 1 день =' + appData.moneyPerDay);

// if(appData.moneyPerDay < 100){
//     console.log('минимальный уровень достатка')
// } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000){
//     console.log('middle уровень достатка')
// } else if ( appData.moneyPerDay >= 2000){
//     console.log('high уровень достатка')
// } else {
//     console.log('error')
// }

// function chechSavings(){
//     if (appData.savings == true){
//         let save = +prompt('Deposit value'),
//             percent = +prompt('Percent');

//             appData.monthIncome = save/100/12*percent;
//             alert("month value:" + appData.monthIncome);
//     }
// }

// chechSavings();