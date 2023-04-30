//let ageArray = new Array[8];
//let otherAgeArray = new Array[1,2,3,4,5,6,7,8];
// Q#1
let age =[3, 9, 23, 64, 2, 8, 28,93];
age.push(124);


let newAgeArray= age.slice();
newAgeArray = age.slice(-1) - age.slice(0,1);

console.log(newAgeArray);
//count =0;
function averageAge(age){
    let sum =0;
    for (let i=0; i<age.length; i++) {
        sum +=age[i];
    }return sum /age.length
}console.log(averageAge(age));

//#2

let names =[ 'Sam', 'Tommy', 'Tim', 'Sally', "Buck", "Bob"]
//function average(names){
let sum =0;

for (let i=0; i<names.length; i++){
    sum+= names.length
    
}average = sum/names.length

console.log(average) 

let list = ""
for (let i=0; i<names.length; i++){
    
    list += names[i] + " "
} 
    console.log(list)
//# 5

let nameLengths = [names.length]
for (let i=0; i<names.length; i++){
    nameLengths[i] = names[i].length
} console.log(nameLengths+ " ")

// #6
sum =0
for (let i =0; i< nameLengths.length; i++){
    sum += nameLengths[i]
}console.log(sum)

//#7
function rep(word,n){
    console.log(word.repeat(n))
}

//#8

function fullName (firstName, lastName){
    console.log( firstName + " " + lastName )
   
}
fullName("Steve", "S")

//#9

function sumAge(age){
    let sum =0;
    for (let i=0; i<age.length; i++) {
        sum +=age[i];
            if (sum>00){
                return true
            }
    }
}console.log(sumAge(age));

//#10

function averageAge(age){
    let sum =0;
    for (let i=0; i<age.length; i++) {
        sum +=age[i];
    }return sum /age.length
}console.log(averageAge(age));

//#11
   

    let age1 = [2,4]

    let age2 = [3,1]

function toatAge(age1,age2){

    //for(let t=0; t<age1.length; t++){
        if (age1[t].length - age2[t].length > 0){
            return true
        }
} 


//#12
function wilBuyDrink (isHotOutside, moneyInPocket){
    if (isHotOutside >90 && moneyInPocket>10.50){
        console.log(true) 
    }else{
        console.log(false)
    }
}wilBuyDrink(80,11)

//#13
function birthDay (month,year){
    if(month = 10 && year == 1996){
        console.log("Happy Birthday !!!")
    }else if (year <1996){
        console.log("Getting Older !")
    }else {
        console.log("Too Young !")
    }

    }birthDay(10,1996)
