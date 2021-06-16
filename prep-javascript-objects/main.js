var person = { firstName: 'Thomas', lastName: 'Alexander', hobby: 'camping' };
console.log('Person:', person);

var fullName = person.firstName + ' ' + person.lastName;
console.log('the person name is:', fullName);

person.job = 'IT Manager';
console.log('This person job current job is:', person.job);

person.previousJob = 'Senior Systems Adminstrator';
console.log('This person previous job is:', person.previousJob);

console.log('The complete person:', person);
