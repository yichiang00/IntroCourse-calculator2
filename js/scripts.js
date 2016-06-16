var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var choice = $("input:radio[name=operator]:checked").val();
    var number1 = parseFloat($("#add1").val());
    var number2 = parseFloat($("#add2").val());
    var result;

    if (!number1 || !number2) {

      $("#numberText1").removeClass("has-success").addClass("has-error");
      $("#numberText2").removeClass("has-success").addClass("has-error");
      $("#output").html("<h1 id=\"scold\">Please use a number!</h1>");
    }else{
    if (choice === "add") {
      result = add(number1, number2);
    } else if (choice === "subtract") {
      result = subtract(number1, number2);
    }else if (choice === "multiply") {
      result = multiply(number1, number2);
    }else{
      result = divide(number1, number2);
    }

    $("#output").text(result);
    }
    // alert(subtract(number1, number2));
    // alert(multiply(number1, number2));
    // alert(divide(number1,number2));
  });
});
