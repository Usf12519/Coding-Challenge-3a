// Step2: Create Customer Objects
let customers = [{
    name: "Alice",
    email: "alice1234@example.com",
    purchases: ["labtop","phone","playstation"],
},
 {
    name: "Brandon",
    email: "brandon456@example.com",
    purchases: ["apples","bananas","carrots"],
},
{
name: 'Cameron',
    email: "Cameron789@example.com",
    purchases: ["eggs","ice cream","pizza"],
}];

// Step 3: Add and Remove Data

let newCustomer = {
    name:'Daniel'
};

customers.push(newCustomer);
console.log(newCustomer);
customers.shift();

// Step 4: Update Customer Info

customers[2].email = "daniel1234@example.com";
let purchases = ["apples","bananas","carrots"];
purchases.push("deli meat");
console.log(purchases);


// Step 5: Display Customer Information

const customers = ["brandon","cameron","daniel"]
customers.forEach(myFuncton);


