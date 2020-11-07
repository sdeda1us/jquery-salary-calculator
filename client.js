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
        el.append(`<tr class="rowLocation"><td class="firstNameCell">${worker.firstName}</td><td class="lastNameCell">${worker.lastName}</td><td class="workerIdCell">${worker.idNumber}</td><td>${worker.title}</td><td class="salaryCell">${worker.annualSalary}</td><td><button class="delete">Delete</button></td></tr>`);
    }
    el.append(`<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>`);
}

function totalMonthlyUpdate(registry){
    let totalMonthly = 0;
    for(person of registry){
        totalMonthly += person.annualSalary/12;
    }
    el = $('#totalMonthlyOut');
    el.empty();
    el.append(`Total Monthly: $${totalMonthly.toFixed(2)}`);
}

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

function deleteRecord(fName, lName, workID, salary){
    for(record of employeeRegistry){
      if(record.lastName === lName && record.idNumber === workID){
           employeeRegistry.splice(employeeRegistry.indexOf(record), 1);
      }
    }
}