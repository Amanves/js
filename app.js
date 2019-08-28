const product1 = "Pizza",
      price1 = 30,
      product2 = "Hamburger",
      price2 = 40;
/*
let html;
html = '<ul>' + 
       '<li>Item: ' + product1 + '</li>' + 
       '<li>Price: ' + price1 + '</li>' +
       '<li>Item: ' + product2 + '</li>' +
       '<li>Price: ' + price2 + '</li>' +
       '</ul>';
*/
let html;
html = `<ul>
           <li>Item: ${product1} </li>
           <li>Price: ${price1} </li>
           <li>Item: ${product2} </li>
           <li>Price: ${price2} </li>
           <li>Total: ${total(price1 , price2)} </li>
        <ul> `;

function total(price1 , price2){
        return price1 + price2;
}
let app = document.querySelector('#app');
app.innerHTML = html;

const number = [10,20,30,40,50];
console.log(number);

const month = new Array("January","February","March","April","May","June");
console.log(month);
console.log(month[5]);

const mixedarray = ["Number",23.43,22,"34",true,false,0,"1"];
console.log(mixedarray);

let months = ["January","February","March","April"];
console.log(months[1]);
console.log(months);
months[2] = "Holi";
months[3] = "April fool";
console.log(months);
console.log(months.indexOf("January"));
console.log(months.indexOf("February"));

let monthss = ["January", "February", "March", "April", "May", "June", "July"];
monthss[1] = "New Months";
monthss[2] = "Hey Hey";
console.log(monthss);
console.log(monthss[2]);
console.log(monthss.indexOf("Hey Hey"));
monthss.push("August");
monthss.unshift("Months 0");
monthss.splice(3, null, "new new months");
console.log(monthss);
monthss.pop();
monthss.shift();
monthss.splice(3, 4);
console.log(monthss);
monthss.reverse();
console.log(monthss);

const array1 = [1,2,3],
      array2 = [9,8,7];
console.log(array1.concat(array2));

let fruits = ["Orange", "Apple", "Grapes", "Strawberry"];
console.log(fruits.sort().reverse());

let arrayNumbers = [1,3,21,12,89,65,100,52,2];
console.log(arrayNumbers.sort(function(number1, number2){
        return number1 - number2;
}).reverse());


let arrayNumberss = [1,3,21,12,89,65,100,52,2];
console.log(arrayNumberss.sort(function(number1, number2){
        return number2 - number1;
}));


let person = {
        firstName : "Aman",
        lastName  : "Kumar",
        job : "Developer",
        age : 21,
        fabCar : ["Benz","BMW","Audi"],
        address : {
                homeTown : "Bhagalpur",
                currentCity : "Kolkata"
        },
        bornYear: function(){
                return new Date().getFullYear() - this.age;
        }
};
console.log(person.firstName);
console.log(person.job);
console.log(person.age);
console.log(person.fabCar);
console.log(person.address);
console.log(person.bornYear);