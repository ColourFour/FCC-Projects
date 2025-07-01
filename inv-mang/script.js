let inventory=[];
let product = {
    name: "",
    quantity: 0
    }

function findProductIndex(productName){
    let productCheck = productName.toLowerCase();
    for(let i = 0; i < inventory.length; i++){
    if (inventory[i].name.toLowerCase() == productCheck){
        return i;}
    }
        return -1;}

function addProduct(product){
    const index = findProductIndex(product.name);
    if(index != -1){
        inventory[index].quantity += product.quantity;
         console.log(`${product.name.toLowerCase()} quantity updated`)
    }
    else{
        inventory.push({name: product.name.toLowerCase(), quantity: product.quantity});
        console.log(`${product.name.toLowerCase()} added to inventory`)
       
    }
}   
function removeProduct(name, quantity) {
    const productName = name.toLowerCase();
    const index = findProductIndex(productName);

    if (index === -1) {
        console.log(`${productName} not found`);
        return;
    }

    const currentQty = inventory[index].quantity;

    if (currentQty > quantity) {
        inventory[index].quantity -= quantity;
        console.log(`Remaining ${productName} pieces: ${inventory[index].quantity}`);
    } else if (currentQty === quantity) {
        inventory.splice(index, 1);
        console.log(`${productName} completely removed from inventory`);
    } else {
        console.log(`Not enough ${productName} available, remaining pieces: ${currentQty}`);
    }
}