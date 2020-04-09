/*****************************
* Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = false;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);


//variable naming rules
var $3years = 3;
var johnMark = 'jm';
*/

/*****************************
* Variable mutation and type coertion
*/

//var firstName = 'John';
//var age = 28;

// Type coercion
/*
console.log(firstName + ' is ' + age + ' years old.');

var job, isMarried;

job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

//Variable mutation

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');

console.log(lastName);

*/

/*****************************
* Basic operators
*/

//Math operators
/*
var now = 2018;
var ageJohn = 28;
var ageMark = 33;
var yearJohn = now - ageJohn;
var yearMark  = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'johnOlder');
var x;
console.log(typeof x);

*/

/*****************************
* Operator precedence
*/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators

var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);


// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments

var x, y;
x = y = (3 + 5) * 4 - 6; // 8*4-6//32-6//26
console.log(x, y);

// More operators
x *= 2;
console.log(x, y);
x += 10;
console.log(x);
x--;
console.log(x);
*/

/*****************************
* CODING CHALLNGE 1 
*/
/*
var markWeight = 75;
var johnWeight = 80;

var markHeight = 1.90;
var johnHeight = 1.68;

var markBmi = markWeight / Math.pow(markHeight, 2);
var johnBmi = johnWeight / Math.pow(johnHeight, 2);

var isMarkHasHigherBmi = markBmi > johnBmi;

console.log('Mark BMI: ' + markBmi);
console.log('John BMI: ' + johnBmi);
console.log("Is Mark's BMI higher than John's? " + isMarkHasHigherBmi);

*/

/*****************************
* if / else statements 
*/

/* 
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + " is married!")
}

else {
     console.log(firstName + " will hopefully marry soon!")
}

var isMarried = false;

if (isMarried) {
    console.log(firstName + " is married!")
}

else {
     console.log(firstName + " will hopefully marry soon!")
}




var markWeight = 75;
var johnWeight = 80;

var markHeight = 1.90;
var johnHeight = 1.68;

var markBmi = markWeight / Math.pow(markHeight, 2);
var johnBmi = johnWeight / Math.pow(johnHeight, 2);

if (markBmi > johnBmi) {
    console.log("Mark has BIGGER than Mark!!!!");
}
    
else {
    console.log("ДЖОХН!! has BIGGER зен Марк!!!!");
}
*/

//var isMarkHasHigherBmi = markBmi > johnBmi;
/*
console.log('Mark BMI: ' + markBmi);
console.log('John BMI: ' + johnBmi);
console.log("Is Mark's BMI higher than John's? " + isMarkHasHigherBmi);
*/


/*****************************
* Boolean logic
*/
/*

var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
}

else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
}

else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
}

else {
    console.log(firstName + ' is a man.');
}
*/

/*****************************
* Ternary operator and switch statements
*/
/*

var firstName = 'John';
var age = 104;

// Ternary operator

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
 console.log(drink);


// Switch statement

var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else');
}
*/

/*****************************
* Truthy and falthy vakues and equality operators
*/

// falsy values: undefined, null, 0, '', NaN

// truthy values: undefined, null, 0, '', NOT falsy
/*
var height;
height = 23

if (height || height == 0) {
    console.log('Variable is defined');
}
else {
    console.log('Variable is NOT defined');
}


// Equality operators 

if (height == '23') {
    console.log('The == operator does type coercion!');
}
else {
    console.log('You used === !!!');
}
*/


/*****************************
* Coding challenge 2
*/

/*

var johnScore1 = 0;
var johnScore2 = 0;
var johnScore3 = 5;

var johnAverage = (johnScore1 + johnScore2 + johnScore3) / 3;


var mikeScore1 = 5;
var mikeScore2 = 0;
var mikeScore3 = 0;

var mikeAverage = (mikeScore1 + mikeScore2 + mikeScore3) / 3;

var maryScore1 = 0;
var maryScore2 = 5;
var maryScore3 = 0;

var maryAverage = (maryScore1 + maryScore2 + maryScore3) / 3;


 if (johnAverage > mikeAverage && johnAverage > maryAverage) {
     console.log('John\'s team average score: ' + johnAverage + '; Mike\'s team average score: ' + mikeAverage + '; Mary\'s team average score: ' + maryAverage +'.  John is winner!!!');
 }

else if (mikeAverage > johnAverage && mikeAverage> maryAverage ){
    console.log('John\'s team average score: ' + johnAverage + '; Mike\'s team average score: ' + mikeAverage + '; Mary\'s team average score: ' + maryAverage + '.  Mike is winner!!!');
}

else if (maryAverage > johnAverage && maryAverage > mikeAverage ){
    console.log('John\'s team average score: ' + johnAverage + '; Mike\'s team average score: ' + mikeAverage + '; Mary\'s team average score: ' + maryAverage + '.  Mary is winner!!!');
}



else {
    console.log('John\'s team average score: ' + johnAverage + '; Mike\'s team average score: ' + mikeAverage + '; Mary\'s team average score: ' + maryAverage + '.  D R A W ! ! !')
}
*/

/*****************************
* Functions
*/
/*

function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
                           
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    }
    
    else {
        console.log(firstName + ' was already retired ' + - retirement + ' years ago.');
    }
    
    
}

yearsUntilRetirement(1980, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/*****************************
* Function statements and expressions
*/

// Function declaration
// function whatDoYouDo(job, firstName){}



// Function expression
/*
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
            
        case 'driver':
            return firstName + ' drives Uber';
            
        case 'designer':
            return firstName + ' designs a good sites';
        default: 
            return firstName + ' does something else';
    }
    
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'L0la'));
console.log(whatDoYouDo('retired', 'Manya'));

*/



/*****************************
* Arrays
*/

// Initialize new array
/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);
console.log(names[2]);
console.log(names.length);

// Mutate
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('Blue');
john.unshift('Mr.');
console.log(john);


john.pop();
john.pop();
john.shift();

console.log(john);

console.log(john.indexOf(1998));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John IS a designer';
console.log(isDesigner);

*/


/*****************************
* Coding challenge 3
*/

/*

var rest = [124, 48, 268];


var tipCalc = function(bill){
    if ( bill < 50 ) {
        return bill * 0.2;
    }
    else if ( bill >= 50 && bill <= 200 ){
        return bill * 0.15;
    }
    else if (bill > 200) {
        return bill * 0.1;
    }
    else 
        return 'bill is unexpected: ' + bill;    
}

var tipsArr = [tipCalc(rest[0]), tipCalc(rest[1]), tipCalc(rest[2])];


var finalAmountArr = [];

for (var i = 0; i < 3; i++){
    finalAmountArr.push(tipsArr[i] + rest[i]);
}


console.log(tipsArr);
console.log(finalAmountArr);

*/


/******************************
ТУПА ЗАДАЧА ПРО ДРАКОНОВ:
Фермер решил завести 20 драконов, чтобы продавать яйца по 50 серебряных за штуку. Рептилии (драконы же рептилии?) несут по два яйца в неделю, и каждую неделю все яйца продаются. С этих денег фермер покупает ещё по два дракона в неделю по 300 серебряных, чтобы увеличить свой доход. Но расходы велики: чтобы кормить и содержать питомцев, хозяин каждый день тратит 500 серебряных.

Фермер решил: если прибыли от рептилий так и не будет, через год он продаст их всех одной любительнице драконов, а если будет — продолжит дело. Как вы думаете, продаст он их или нет?
*/
/*
var dragonsCount = 20;
var eggPrice = 50;
var eggsPerWeek = 2;
var dragonPrice = 300;
var spendsPerDay = 500;
var eggsCount = 0;
var weekIncome = 0;
var allIncome = 0;

var totalIncome = 0;




for (var week=1; week<=52; week++){
    eggsCount = eggsCount + eggsPerWeek * dragonsCount;
    eggsIncome = eggsCount * eggPrice;
    weekIncome = eggsIncome - 600 - spendsPerDay*7;
    dragonsCount+=2;
    eggsCount = 0;
    allIncome += weekIncome;
    totalIncome = allIncome - (20 * dragonPrice);//отсебятина. прибыль с учётом цены изначальных 20ти драконов
    if (allIncome > 0) {
        console.log('Ура, прибыль!!! неделя: '+ week + '. allIncome: ' + allIncome + ' . totalIncome: ' + totalIncome);
        break;
    }
    
}

//Result: week 23, ~161days
//Если учитывать стоимость изначальных 20 драконов, нужно ввести переменную totalIncome и проверить, когда она станет положительной и выходить из цикла.
*/



/*****************************
* Objects
*/

/*

// Object literal

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;

console.log(john);

// new Object syntax   
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';

console.log(jane);
*/

/*****************************
* Objects and methods
*/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1993,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {
        this.age =  2018 - this.birthYear;
    }
};

john.calcAge();

console.log(john);

*/

/*****************************
* Coding challenge 4
var markWeight = 75;
var johnWeight = 80;

var markHeight = 1.90;
var johnHeight = 1.68;
*/
/*
var mark = {
    fullName: 'Mark Smith',
    mass: 75,
    height: 1.9,
    bmiCalc: function(mass, height){
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
}

var john = {
    fullName: 'John Sena',
    mass: 80,
    height: 1.68,
    bmiCalc: function(mass, height){
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
}



if (mark.bmiCalc() > john.bmiCalc()) {
    console.log('Mark has higher BMI. ' + mark.fullName +' : ' + mark.bmi + ' ; ' + john.fullName +' : ' + john.bmi);
}

else if (mark.bmi < john.bmi){
    console.log('John has higher BMI. ' + mark.fullName +' : ' + mark.bmi + ' ; ' + john.fullName +' : ' + john.bmi);
}

else {
    console.log('BMI\'s are equal. ' + mark.fullName +' : ' + mark.bmi + ' ; ' + john.fullName +' : ' + john.bmi);
}


*/
/*
for (var i = 0; i<=10; i+=2) {
    console.log(i);
}


var john = ['John', 'Smith', 1990, 'designer', false, 101];
*/
/*
for (var i = 0; i<john.length; i++) {
    console.log(john[i] );
}



var i=0;
while ( i<john.length) {
    console.log(john[i] );
    i++;
}
*/

// continue and break
// break - прервать цикл; continue - выйти из текущей итерации и перейти на следующую

/*
var john = ['John', 'Smith', 1990, 'designer', false, 101];

for (var i = 0; i<john.length; i++) {
    if (typeof john[i] !== 'string') { continue; }
    console.log(john[i] );
}


for (var i = 0; i<john.length; i++) {
    if (typeof john[i] !== 'string') { break; }
    console.log(john[i] );
}
console.log('' );

for (var i = john.length-1; i>=0; i--) {
   
    console.log(john[i] );
}

*/

/*****************************
* Coding challenge 5
*/

var restTrip = {
    billsArr : [124, 48, 268, 180, 42],
    tipsArr : [],
    finalAmountsArr: [],
    tipsCalc : function() {
        for (var i=0; i < this.billsArr.length; i++) {
            var percentage;
            if (this.billsArr[i]<50) {
                percentage = 0.2;
            }
            else if (this.billsArr[i]>=50 && this.billsArr[i]<=200) {
                percentage = 0.15;
            }
            else {
                percentage = 0.1;
            }
            this.tipsArr[i] = this.billsArr[i] * percentage;
        }
        return this.tipsArr;
    },
    
    finalAmountsCalc: function(){
        for (var i=0; i<this.billsArr.length; i++){
            this.finalAmountsArr.push(this.billsArr[i]+this.tipsArr[i]);
        }
        return this.finalAmountsArr;
    }
}

console.log(restTrip.tipsCalc(), restTrip.finalAmountsCalc());


var markTrip = {
    billsArr: [77, 375, 110, 45],
    tipsArr : [],
    finalAmountsArr: [],
    tipsCalc : function() {
        for (var i=0; i < this.billsArr.length; i++) {
            var percentage;
            if (this.billsArr[i]<100) {
                percentage = 0.2;
            }
            else if (this.billsArr[i]>=100 && this.billsArr[i]<=300) {
                percentage = 0.1;
            }
            else {
                percentage = 0.25;
            }
            this.tipsArr[i] = this.billsArr[i] * percentage;
        }
        return this.tipsArr;
    },
    
    finalAmountsCalc: function(){
        for (var i=0; i<this.billsArr.length; i++){
            this.finalAmountsArr[i] = (this.billsArr[i]+this.tipsArr[i]);
        }
        return this.finalAmountsArr;
    }
}

console.log(markTrip.tipsCalc(), markTrip.finalAmountsCalc());





var averageBillCalc = function(bills){
    var totalSum = 0;
    for (var i = 0; i<bills.length; i++){
        
        totalSum+=bills[i];
        
    }
    return totalSum/bills.length;
}


if (averageBillCalc(restTrip.tipsArr) > averageBillCalc(markTrip.tipsArr)) {
    console.log('John\'s average tip is greater. John: ' + averageBillCalc(restTrip.tipsArr) + ' ; Mark: ' +averageBillCalc(markTrip.tipsArr));
}

else if (averageBillCalc(restTrip.tipsArr) < averageBillCalc(markTrip.tipsArr)) {
    console.log('Mark\'s average tip is greater. John: ' + averageBillCalc(restTrip.tipsArr) + ' ; Mark: ' +averageBillCalc(markTrip.tipsArr));
}

else {
    console.log('Average tips are equal. John: ' + averageBillCalc(restTrip.tipsArr) + ' ; Mark: ' +averageBillCalc(markTrip.tipsArr));
}

console.log('TIPS ARRAYS. jon: ' + restTrip.tipsArr + ' ; MARK: ' + markTrip.tipsArr);



















