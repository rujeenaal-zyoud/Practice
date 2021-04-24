'use strict';
// we want to calculate the cookies per hour in my oun accoding to the min&max in each storse so we need to find number of customer that they came to stoe each hour 
// then calc the number of cookies per hour
// first the number of customer we can find by random
//function for cookies
//function for total
//function total of totals

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// creat array for all stores
let stores = [];

//create the function for random custemer number by using the min and max number that we have in each store
function randomnumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



//  create consrtactre for stores information
function Cookie(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    // create varabile to using it in functions without crate it as arragument and we can create a globel total
    this.total = 0;
    // create array in constroctre to use it each time we call the constracter
    this.cookiesperhour = [];
    // push the data in constracter to the globel array stores each time we created object from this constracter
    stores.push(this);
}
// WE use prototype for create  function as constructre each time we call the function it will append to constractor

// create prototype function that calac the customre number that come to the each store by randome according to min and max number for customre
// when return data w store this data when call the function so we don't need to make array for it

Cookie.prototype.calcCustomerPerHour = function () {
    // we use this so that we use prototype to using the constracter and this will determine the varabile in constacter

    return randomnumber(this.min, this.max);

}

// create the function to calc the number of cookies per hour by using avg methode

Cookie.prototype.calcCookiesPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
        //here calculate the number cookies and multiply with avg in same function to find the number of cookies
        this.cookiesperhour.push(Math.floor(this.calcCustomerPerHour() * this.avg));
        // calc the total of cookies per hour  and [i] it is according to the hour
        this.total += this.cookiesperhour[i];
    }
}




// create the objects in same order for data

const Seattle = new Cookie('Seattle', 23, 65, 6.3);
// console.log(Seattle);

const Tokyo = new Cookie('Tokyo', 3, 24, 1.2);
// console.log(Tokyo);

const Dubai = new Cookie('Dubai', 11, 38, 3.7);
// console.log(Dubai);

const Paris = new Cookie('Paris', 20, 38, 2.3);
// console.log(Paris);

const Lima = new Cookie('Lima', 2, 16, 4.6);
// console.log(Lima);
// here will show all stores in object in consol
console.log('stores', stores);

// know using DOM to craet and render the table for all data 
//  Document object model 
//  What DOM?  programe interface  for HTML ,XML  by using js we can access it and programming by create id from HTML and using it in JS 
// WHY name object ? becuase we create all element that render in our bage by using object methode
// IN JS we can create element and delete the element ,also create events in our page and modifiy the text so it fully control
// SO JS can mainulate the DOM 


// create table using DOM
// in DOM we can just pass the table element as arragument 
let parent= document.getElementById('parent');
// create a table in globel for data contenet by passing table 
let table=document.createElement('table');
parent.appendChild(table);

// create making header for the table that will be constant in table

function MakingHeader(){
    // create the row for table 
    let headerRow=document.createElement('tr');
    table.appendChild(headerRow);
    //create each cell and pass a data for it 
    // create the first cell in row
    let firtCell=document.createElement('th');
    headerRow.appendChild(firtCell);
    firtCell.textContent='NAME';


    for(let i=0;i<hours.length;i++){
        let cellsHour=document.createElement('th');
        headerRow.appendChild(cellsHour);
        cellsHour.textContent=hours[i];


    }
    let lastCell=document.createElement('th');
    headerRow.appendChild( lastCell);
    lastCell.textContent='total daily';

}
MakingHeader();


// here create render for each storeplace to ceate a rows and  fill it with same table in globel
Cookie.prototype.renedr=function(){
    let storeRow=document.createElement('tr');
    table.appendChild(storeRow);
    // when append data to each cell in row we using td
    let nameTd=document.createElement('td');
    storeRow.appendChild(nameTd);
    // give text content for cell by using constracter data
    nameTd.textContent=this.name;
    // now create all rows for hour that the number of cookies per hour
    for(let i=0;i<hours.length;i++){
      // when append data to each cell in row we using td
    let hourTd=document.createElement('td');
    storeRow.appendChild(hourTd);
    // give text content for cell by using constracter data
    hourTd.textContent=this.cookiesperhour[i];  
    }
    let totalTd=document.createElement('td');
    storeRow.appendChild(totalTd);
    totalTd.textContent=this.total;

}
function makingFooter() {
    // making footer row
    let footerRow = document.createElement('tr');

    // append footer row to the table
    table.appendChild(footerRow);

    // make first th for footer

    let firstTh = document.createElement('th');

    // append th to the footer row
    footerRow.appendChild(firstTh);

    // give text content
    firstTh.textContent = 'Totals';


    //find the totals in same clock in all store each day not the dailt total
    let totalHour=0;
    let totalOfTotal =0;
    for( let i=0;i<hours.length;i++){
       

        for( let j=0;j<stores.length;j++){
            console.log(hours[i]);
            console.log(stores[j]);

            totalHour +=stores[j].cookiesperhour[i];
            totalOfTotal +=stores[j].cookiesperhour[i];
            console.log(totalHour);


        }
        let footerTh = document.createElement('th');
        footerRow.appendChild(footerTh);
        footerTh.textContent=totalHour;
    }
let totalTh=document.createElement('th');
footerRow.appendChild(totalTh);
totalTh.textContent =totalOfTotal;

}
    makingFooter();
//   Cookie.renedr();







// creat form 
let form =document.getElementById('form');
form.addEventListener('submit',newStore);
 function newStore(event)
{
    event.preventDefault();
let newplace = event.target.newStroe.value;
let Min =event.target.minCustmarPerHour.value;
}