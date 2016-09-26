$(document).ready(function(){
    var totalMonthlySalary = 0;
//Takes in the form data.
$('#total').append('$' + totalMonthlySalary);
  $('#employee').on('submit', function(event){

      event.preventDefault();

      var employee = {};
      var fields = $('#employee').serializeArray();
      //creates an empty employee object and adds form elements to it
      fields.forEach(function(element, index){
        employee[element.name] = element.value;
      });
      //console.log(employee);

      $('#employee').find('input').val('');
      //appends the employee object to the dom
      appendDom(employee);

      totalMonthlySalary = getMonthlySalary(employee, totalMonthlySalary);
      //calculates totalMonthlySalary
      //console.log(totalMonthlySalary);

      $('#total').empty();
      $('#total').append('$' + totalMonthlySalary.toFixed(2));
      //emptys the #total element and updates to the new total
    })



    $('.employeeList').on('click','.delete', function (){
      //takes the .data of the parent element and sets it to salary
    var salary = $(this).parent().data('salary');
    totalMonthlySalary = ((totalMonthlySalary * 12 - salary)/12)
    //removes the row and subtracts it from the total amount then updates the total
     $(this).parent().parent().remove();
     $('#total').empty();
     $('#total').append('$' + Math.round(totalMonthlySalary));
})
})

    function appendDom(emp) {
      var $emp = $('<tr></tr>');
      $emp = $emp.append('<td>' + emp.employeeFirstName + '</td>');
      $emp = $emp.append('<td>' + emp.employeeLastName + '</td>');
      $emp = $emp.append('<td>' + emp.employeeId + '</td>');
      $emp = $emp.append('<td>' + emp.employeeJob + '</td>');
      $emp = $emp.append('<td class="salary">' + emp.employeeAnnualSalary + '</td>');
      $emp = $emp.append('<td><button class="delete">Delete</button></td>')
      //appends the emp object to the dom

      $('#employees').append($emp);
      $('td').last().data('salary', emp.employeeAnnualSalary);
      //adds the data attribute to the end with the salary amount
  }
  function getMonthlySalary(emp, monthlySalary){
    var annualSalary = emp.employeeAnnualSalary;
    //gets the annual salary
    var empMonthlySalary = annualSalary / 12;
    //gets monthly salary
    var total = empMonthlySalary + monthlySalary;
    //calculates the new total
    total = total;
    return total;
  }
