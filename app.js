
var app = angular.module('employeeApp', []);

app.controller('EmployeeController', function ($scope) {
  console.log('EmployeeController loaded');

  var self = this;

  self.employees = [];
  self.totalMonthlySalary = 0;
  self.total = 0;
  self.createEmployee = function () {
    console.log('Submited employee ', self.employee);
    self.employees.push(angular.copy(self.employee));
    self.getTotal();
    self.employee = {};
    $scope.addForm.$setPristine();

    //make a copy of object instead of storing object itself
  };

  self.getTotal = function () {
    self.totalMonthlySalary = 0;
    self.total = 0;
    self.employees.forEach(function (employee) {
      self.totalMonthlySalary += employee.salary;
    });

    self.total = Math.round(self.totalMonthlySalary / 12);
  };

  self.remove = function (index) {
    console.log(index);
    self.employees.splice(index, 1);
    self.getTotal();
    console.log(self.employees);
  };
});

angular.export = app;
