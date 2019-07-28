var totalOrderPrice = [];

function placeorder(size, crust, topping, price){
      this.size = size;
      this.crust = [];
      this.topping = [];
      this.price = price;
}

crust.prototype.Addcripsy = function(cripsy){
    this.crust.push(cripsy);
}
crust.prototype.Addstuffed = function(stuffed){
    this.crust.push(stuffed);
}
crust.prototype.AddGluten = function(gluten){
    this.crust.push(gluten);
}
topping.prototype.Addbacon = function(bacon){
    this.topping.psh(bacon);
}
topping.prototype.Addchicken = function(chicken){
    this.topping.push(chicken);
}
topping.prototype.Addbeef = function(beef){
    this.topping.push(beef);
}
topping.prototype.Addvegetables = function(vegetables){
    this.topping.push(vegetables);
};

placeorder.prototype.costOfPizza = function(){
    if (this.size === "small"){
        this.price = 500;
    } else if (this.size === "medium"){
        this.price = 750
    } else if (this.size === "large"){
        this.price = 1000;
    }
    if(this.crust === "crispy"){
        this.price += 100
    }else if(this.crust === "stuffed"){
        this.price += 200;
    }else if(this.crust === "gluten"){
        this.price += 300
    }
    if(this.topping === "bacon"){
        this.price += 100
    }else if (this.topping === "chicken"){
        this.price += 200
    }else if (this.topping === "beef"){
        this.price += 300
    }else if (this.topping === "vegetables"){
        this.price += 50
    }
    return this.price
};



placeorder.prototype.totalcost = function(){
    var shoppingCartTotal = 0;

    for (var order = 0; order < totalOrderPrice.length; order++){
        shoppingCartTotal += totalOrderPrice[order];
    }
    return shoppingCartTotal;
}

$("form#customized-pizza").submit(function(event) {
    event.preventDefault();
    var customSize = $("#size option:selected").val();
    var customcrust = $("#crust option:selected").val();
    var customtopping = $("#topping option:selected").val();
    var newPizzaOrder = new Placeorder(customSize , customcrust , customtopping);
    
    newPizzaOrder.costOfPizza();

    totalOrderPrice.push(newPizzaOrder.price);
});

$("#pizza-size").show();
$("#pizza-crust").show();
$("#pizza-topping").show();
$("button.btn").click(function(){
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