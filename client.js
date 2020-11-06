let employeeRegistry = [];
let firstName = '';
let lastName = '';
let idNumber = '';
let title = ''
let annualSalary = 0;

$(document).ready(onReady);

function onReady(){
    $('#submitButton').on('click', logEmployee)
    $('#employeeTable').on('click', '.delete', deleteData);
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
    employeePublish(employeeRegistry);
    totalMonthlyUpdate(employeeRegistry);
}

function employeePublish(rowData) {
    let el = $('#employeeTable');
    el.empty();
    el.append(`<tr><th>First Name</th><th>Last Name</th><th>ID</th><th>Title</th><th>Annual Salary</th><th></th></tr>`);
    for(worker of rowData){
        el.append(`<tr><td>${worker.firstName}</td><td>${worker.lastName}</td><td>${worker.idNumber}</td><td>${worker.title}</td><td>${worker.annualSalary}</td><td><button class="delete">Delete</button></td></tr>`);
    }
    el.append(`<tr></tr>`);
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

function deleteData(){
    console.log('just hanging out for right now');
    console.log($(this));
}