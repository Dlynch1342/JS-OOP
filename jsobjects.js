//Challenge I:
//Print all of the students and their cohort.
let students = [
    { name: 'Remy', cohort: 'Jan' },
    { name: 'Genevieve', cohort: 'March' },
    { name: 'Chuck', cohort: 'Jan' },
    { name: 'Osmund', cohort: 'June' },
    { name: 'Nikki', cohort: 'June' },
    { name: 'Boris', cohort: 'June' }
];

for(let name in students){
    console.log(students[name]);
}


//Challenge II:
// printing each in organization of: number + last name + first name + sum of length of first & last name
let users = {
    employees: [
        { 'first_name': 'Miguel', 'last_name': 'Jones' },
        { 'first_name': 'Ernie', 'last_name': 'Bertson' },
        { 'first_name': 'Nora', 'last_name': 'Lu' },
        { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
    ],
    managers: [
        { 'first_name': 'Lillian', 'last_name': 'Chambers' },
        { 'first_name': 'Gordon', 'last_name': 'Poe' }
    ]
};

var emp_title = "EMPLOYEES"
var managers = 'MANAGERS'
var x;
var y;
console.log(emp_title);
for (var i = 0; i < users.employees.length; i++){
    const leng1 = users.employees[i].last_name.length;        
    const leng2 = users.employees[i].first_name.length;   
    var sum = leng1 + leng2;        
    var x = i + 1 + " - " + users.employees[i].last_name + ", " + users.employees[i].first_name + " - " + sum;
    console.log(x)
}

console.log(managers);
for (var j = 0; j < users.managers.length; j++){
    let count1 = users.managers[j].last_name.length;
    let count2 = users.managers[j].first_name.length;
    let sum2 = count1 + count2
    var y = j + 1 + " - " + users.managers[j].last_name + ", " + users.managers[j].first_name + " - " + sum2;
    console.log(y);
}