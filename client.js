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
}

function employeePublish(rowData) {
    $('#employeeTable').append(`<tr><td>${rowData.firstName}</td><td>${rowData.lastName}</td><td>${rowData.idNumber}</td><td>${rowData.title}</td><td>${rowData.annualSalary}</td></tr>`);
}
