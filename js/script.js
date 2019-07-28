
// // Business logic
var totalOrderPrice = [];

function Placeorder(size, crust, topping) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.price = 0;
 
}

var pizzaSize = ["Small", "Medium", "Large"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-free"];
var pizzaTopping = ["Bacon", "Chicken", "Beef", "Vegetables"];

Placeorder.prototype.costOfPizza = function() {
  if (this.size === pizzaSize[0]) {
    this.price += 500;
  } else if (this.size === pizzaSize[1]) {
    this.price += 750;
  } else if (this.size === pizzaSize[2]) {
    this.price += 1000;
  }
  if (this.crust === pizzaCrust[0]) {
    this.price += 100;
  } else if (this.cheese === pizzaCrust[1]) {
    this.price += 200;
  } else if (this.cheese === pizzaCrust[2]) {
    this.price += 300;
  }
  if (this.topping === pizzaTopping[0]) {
    this.price += 100;
  } else if (this.topping === pizzaTopping[1]) {
    this.price += 200;
  } else if (this.topping === pizzaTopping[2]) {
    this.price += 300;
  } else if (this.topping === pizzaTopping[3]) {
    this.price += 50;
  }
  return this.price;
}





Placeorder.prototype.totalCost = function() {
 
  var shoppingCartTotal = 0;
  
  for (var order = 0; order < totalOrderPrice.length; order++) {
  
    shoppingCartTotal += totalOrderPrice[order];
  }
  return shoppingCartTotal;
}

function ShippingAddress(cityName, cityAvenueName, cityStreetName, nameOfBuilding, phoneNumber) {
  this.cityName = cityName;
  this.cityAvenueName = cityAvenueName;
  this.CityStreetName = cityStreetName;
  this.nameOfBuilding = nameOfBuilding;
  this.phoneNumber = phoneNumber;
  this.deliveryAddress = (cityStreetName + " : \n" + cityAvenueName + " : \n" + nameOfBuilding + " : \n");
}

// // User interface
// $(document).ready(function() {
//   $(".submit-btn").click(function() {
//     $(".contacts").hide(2000);
//   });
 
  

  $("form#customized-pizza").submit(function(event) {
    event.preventDefault();
    var customSize = $("select#size option:selected").val();
    var customcrust = $("select#crust option:selected").val();
    var customtopping = $("select#topping option:selected").val();
    var newPizzaOrder = new Placeorder(customSize , customcrust , customtopping);
    
    // var totalOrderPrice = customSize + customcrust + customtopping;

    newPizzaOrder.costOfPizza();

    totalOrderPrice.push(newPizzaOrder.price);



    $("#pizza-size").show();
    $("#pizza-crust").show();
    $("#pizza-topping").show();
    $("#pizza-size").append("\t" + "\t" + customSize);
    $("#pizza-crust").append("\t" + "\t" + customcrust);
    $("#pizza-topping").append("\t" + "\t" + customtopping);
    $("#final-cost").text("\t" + "\t" + newPizzaOrder.totalCost());
    
    var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $("#pizza-size").text() + " - " + customSize + '</td><td id="crust">' + $("#pizza-crust").text() + " - " + customcrust + '</td><td id="topping">' + $("#pizza-topping").text() + " - " + customtopping + '</td><td id="final-cost">' + $("#final-cost").text()+" - "+ newPizzaOrder.totalCost() + '</td></tr>'

      $("#pizza").append(newRow);
  });
  $("#checkout-btn").click(function() {
    location.reload();
  });
  

