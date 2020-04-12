// Write a function that takes a list of student ID's, retrives a record, sort it by name ascending
// Then print each record to the console with the id and whether or not paid
var students = document.querySelector('.student-records');
var paidStudents = document.querySelector('.paid');
var tableData = document.querySelector('tbody');



var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [{
        id: 313,
        name: "Frank",
        paid: true,
    },
    {
        id: 410,
        name: "Suzy",
        paid: true,
    },
    {
        id: 709,
        name: "Brian",
        paid: false,
    },
    {
        id: 105,
        name: "Henry",
        paid: false,
    },
    {
        id: 502,
        name: "Mary",
        paid: true,
    },
    {
        id: 664,
        name: "Bob",
        paid: false,
    },
    {
        id: 250,
        name: "Peter",
        paid: true,
    },
    {
        id: 375,
        name: "Sarah",
        paid: true,
    },
    {
        id: 867,
        name: "Greg",
        paid: false,
    },
];


function createRowForName() {
    var tr = document.createElement('tr')
    tableData.appendChild(tr)
    studentRecords.forEach(function getName(student) {
        var td = document.createElement('td');
        td.textContent = `Name: ${student.name}`;
        tr.appendChild(td)
    })
}

function createRowForId() {
    var tr = document.createElement('tr')
    tableData.appendChild(tr)
    studentRecords.forEach(function getName(student) {
        var td = document.createElement('td');
        td.textContent = `ID: ${student.id}`;
        tr.appendChild(td)
    })
}
function createRowForPaid() {
    var tr = document.createElement('tr')
    tableData.appendChild(tr)
    studentRecords.forEach(function getName(student) {
        var td = document.createElement('td');
        td.textContent = `Paid: ${student.paid}`;
        tr.appendChild(td)
    })
}




createRowForName()
createRowForId()
createRowForPaid()