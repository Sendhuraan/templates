const getStatusPromise = new Promise((resolve, reject) => {
	resolve({ 
		'message': 'Checkin', 
		'totalWorkHours': '2:15:54', 
		'statusCode': 200
	});
});

const userCheckinPromise = new Promise((resolve, reject) => {
	resolve({ 
	  'message': 'User checked in',
	  'statusCode': 200
	  });
});
  
const userCheckoutPromise = new Promise((resolve, reject) => {
	resolve({ 
	  'message': 'User checked out',
	  'statusCode': 200
	  });
});

const employeeDetailsPromise = new Promise((resolve, reject) => {
	resolve({'name':'Akshay K N','jobTitle':'Software Engineer','employee_code':'E0250'});
});

export const staticFetch = {
	getTodo: fetch('https://jsonplaceholder.typicode.com/todos/1'),
	getStatus: getStatusPromise,
	getUsername:window.go.main.App.UserName(),
	getHostInfo:window.go.main.App.HostInfo(),
	getUserStatus:getStatusPromise,
	userCheckin:userCheckinPromise,
	userCheckout:userCheckoutPromise,
	getEmployeeDetails:employeeDetailsPromise
};