let inventory = {};

function addProduct(productID, name, quantity){
    inventory[productID] = {name: name, quantity: quantity};
}

function displayInventory() {
    console.log("Current inventory:");
    let productIDs = [];
    let i = 0;
    for (let key in inventory) {
        productIDs[i] = key;
        i++;
    }
    for (let i = 0; i < productIDs.length; i++) {
        let productID = productIDs[i];
        let product = inventory[productID];
        // console.log(`Product ID: ${productID}, Name: ${product.name}, Quantity: ${product.quantity}`);
        console.log("Product ID: " + productID + ", Name: " + inventory[productID].name + ", Quantity: " + inventory[productID].quantity);

    }
}

function findProduct(productID) {
    if (inventory[productID]) {
        console.log(`Product ID: ${productID}, Name: ${inventory[productID].name}, Quantity: ${inventory[productID].quantity}`);
    } else {
        console.log("Product not found in inventory.");
    }
}

addProduct("SIGEBOX", "productName", 10);
addProduct("Lab09", "web", 5);
displayInventory();
