// create pizza constructor

function pizza(size, crust, topping){
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}
// topping
pizza.prototype.addOlive = function(olive){
    this.topping.push(olive);
}
pizza.prototype.addBacon = function(bacon){
    this.topping.push(bacon);
}
pizza.prototype.addChees = function(chees){
    this.topping.push(chees);
}
pizza.prototype.addBeef = function(beef){
    this.topping.push(beef)
}
pizza.prototype.addChicken = function(chicken){
    this.topping.push(chicken)
}

// crust
pizza.prototype.addStuffed = function(stuffed){
    this.crust.push(stuffed);
}
pizza.prototype.addGulten = function(gulten){
    this.crust.push(gulten);
}
pizza.prototype.addCrispy = function(crispy){
    this.crust.push(crispy);
}

// calculating cost


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
    this.topping.olive(function(){
        cost += 80;
    });
    this.topping.bacon(function(){
        cost += 100;
    });
    this.topping.chees(function(){
        cost += 120;
    });
    this.topping.beef(function(){
        cost += 150;
    });
    this.topping.chicken(function(){
        cost += 200;
    });
    this.crust.stuffed(function(){
        cost += 500;
    });
    this.crust.gulten(function(){
        cost += 200;
    });
    this.crust.crispy(function(){
        cost += 300;
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
