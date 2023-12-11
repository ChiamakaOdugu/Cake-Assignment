// write a function that allows customers order variety of cakes
// if the customer orders anything asides cake, service not available


function cakeType(cake, flavour) {
    if (cake === "vaniila" || flavour === "redVelvet") {
        return "Okay, got your order";
    } else {
        return "Sorry, service not available";
    }
}

// result:
console.log(cakeType("vaniila", "redVelvet")); // Okay, got your order
console.log(cakeType("chocolate", "strawberry")); // Sorry, service not available
