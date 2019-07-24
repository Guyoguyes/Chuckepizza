// create pizza constructor

function pizza(size, crust, topping){
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}

pizza.prototype.addMeat = function(meat){
    this.topping.push(meat);
}
pizza.prototype.addVeg = function(veg){
    this.topping.push(veg);
}
pizza.prototype.freshcost = function(){
    var cost = 0;

    if(this.pizza === "small"){
        cost = 500;
    }else if (this.pizza === "medium"){
        cost = 750;
    }else if (this.pizza === "large"){
        cost = 1000;
    }else if (this.pizza === "extralarge"){
        cost = 1200;
    }
    this.topping.meat(function(){
        cost += 200;
    });
    this.topping.veg(function(){
        cost += 100;
    });
    this.cost = cost;
}

function order(name, phone, address, payment){
    this.name = name;
    this.phone = phone;
    this.address = address;
    this.payment = payment;
    this.pizza1 = [];
}
order.prototype.addpizza = function (pizza){
    pizza.freshcost();
    this.pizza1.push(pizza);
};
order.prototype.remove = function (pizzano){
    this.pizza1.splice(pizzano -1);
}
order.prototype.Totalcost = function(){
    var totalCost = 0;
    this.pizzas.forEach(function (pizza) {
      totalCost += pizza.cost;
    });
    this.totalcost += totalcost
}
