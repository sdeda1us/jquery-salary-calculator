// -- Global Variables
let employeeRegistry = [];
let firstName = '';
let lastName = '';
let idNumber = '';
let title = ''
let annualSalary = 0;

// -- jQuery Ready
$(document).ready(onReady);

// -- on click event handlers
function onReady(){
    $('#submitButton').on('click', logEmployee)
    $('#employeeTable').on('click', '.delete', deleteData);
}

/* -- commits data to employeRegistry 
   -- calls function to publish to DOM
   -- calls function to update monthly salary output
   -- resets input fields to placeholder value 
*/
function logEmployee(){
    event.preventDefault();
    firstName = $('#firstNameField').val();
    lastName = $('#lastNameField').val();
    idNumber = $('#idNumberField').val();
    title = $('#titleField').val();
    annualSalary = $('#annualSalaryField').val();
    let employee = {
        firstName,
        lastName,
        idNumber,
        title,
        annualSalary,
    }
    employeeRegistry.push(employee);
    employeePublish(employeeRegistry);
    totalMonthlyUpdate(employeeRegistry);
    //resetting inputs
    $('#firstNameField').val('');
    $('#lastNameField').val('');
    $('#idNumberField').val('');
    $('#titleField').val('');
    $('#annualSalaryField').val('');
}


// commits employeeRegistry to the DOM
function employeePublish(rowData) {
    let el = $('#employeeTable');
    el.empty();
    el.append(`<tr><th>First Name</th><th>Last Name</th><th>ID</th><th>Title</th><th>Annual Salary</th><th></th></tr>`);
    for(worker of rowData){
        el.append(`<tr class="rowLocation"><td class="firstNameCell">${worker.firstName}</td><td class="lastNameCell">${worker.lastName}</td><td class="workerIdCell">${worker.idNumber}</td><td>${worker.title}</td><td class="salaryCell">${worker.annualSalary}</td><td class="deleteCell"><button class="delete">Delete</button></td></tr>`);
    }
    el.append(`<tr id="lastRow"><td></td><td></td><td></td><td></td><td></td><td></td></tr>`);
}

/* -- calulates total monthly salary 
   -- calls function to add commas to total monthly salary
   -- outputs to the DOM
*/
function totalMonthlyUpdate(registry){
    let totalMonthly = 0;
    for(person of registry){
        totalMonthly += person.annualSalary/12;
    }
    totalMonthlyCommas = commaMyNumber(totalMonthly);
    el = $('#totalMonthlyOut');
    el.empty();
    el.append(`Total Monthly: $${totalMonthlyCommas}`);
}

// removes data from DOM and calls deleteRecord
function deleteData(){
    let targetLocation = $(this).parents('.rowLocation');
    let getfirstNameCell = targetLocation.children('.firstNameCell').text();
    let getlastNameCell = targetLocation.children('.lastNameCell').text();
    let getworkerIdCell = targetLocation.children('.workerIdCell').text();
    let getsalaryCell = targetLocation.children('.salaryCell').text();
    deleteRecord(getfirstNameCell, getlastNameCell, getworkerIdCell, getsalaryCell);
    employeePublish(employeeRegistry);
    totalMonthlyUpdate(employeeRegistry);
}

// removes the delted record from employeeRegistry
function deleteRecord(fName, lName, workID, salary){
    for(record of employeeRegistry){
      if(record.lastName === lName && record.idNumber === workID){
           employeeRegistry.splice(employeeRegistry.indexOf(record), 1);
      }
    }
}

//converts total monthly ouput into a number with commas
function commaMyNumber(rawNumber){
    let stringNumber = rawNumber.toFixed(2).toString().split('.');
    let decimalCounter = 0;
    for(i=stringNumber[0].length-1; i > 0; i--){
        decimalCounter ++;
        if(decimalCounter % 3 === 0){
            commaPlaces.push(i);
            stringNumber[0] = stringNumber[0].slice(0, i) + ',' + (stringNumber[0].slice(i));
        } 
    }
    return stringNumber[0] + '.' + stringNumber[1];  
}