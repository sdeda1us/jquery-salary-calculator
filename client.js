let employeeRegistry = [];
let firstName = '';
let lastName = '';
let idNumber = '';
let title = ''
let annualSalary = 0;

$(document).ready(onReady);

function onReady(){
    $('#submitButton').on('click', logEmployee)
}

function logEmployee(){
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
    employeePublish(employee);
    totalMonthlyUpdate(employeeRegistry);
}

function employeePublish(rowData) {
    $('#employeeTable').append(`<tr><td>${rowData.firstName}</td><td>${rowData.lastName}</td><td>${rowData.idNumber}</td><td>${rowData.title}</td><td>${rowData.annualSalary}</td><td><button class="delete">Delete</button></td></tr>`);
}

function totalMonthlyUpdate(registry){
    let totalMonthly = 0;
    for(person of registry){
        totalMonthly += person.annualSalary/12;
    }
    console.log(totalMonthly);
    el = $('#totalMonthlyOut');
    el.empty();
    el.append(`Total Monthly: $${totalMonthly}`);
}