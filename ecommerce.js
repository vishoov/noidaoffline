//ecommerce product class
//physical product
//digital product -> download 

class Product{
    //we define theseprivate variables so that they cannot be accessed directly from outside the class that ould prevent unauthorized access or modification
    #id;
    #name;
    #price;

    constructor(id, name, price){
        this.#id = id;
        this.#name = name;
        this.#price = price;
    }

    //public method to get product details
    get id(){
        return this.#id; //getter for private property
    }
    get name(){
        return this.#name; //getter for private property
    }
    get price(){
        return this.#price; //getter for private property
    }
    //set method to modify the price
    set price(newPrice){
        if(newPrice > 0) {
            this.#price = newPrice; //setter for private property
        } else {
            console.log("Price must be positive.");
        }
    }

    showProductDetails(){
        console.log(`Product ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`);
    }

}

//physical product -> weight, shippingCost{
//encapsulation means defining methods inside the class, meaning you cannot call it outside of the class

class PhysicalProduct extends Product {
   //abstraction
    #weight;
    #shippingCost;

    constructor(id, name, price, weight){
        //inheritence 
        super(id, name, price);
        this.#weight=weight;
        this.#shippingCost=this.calculateShipping();
    }

    get weight(){
        return this.#weight;
    }

    get shippingCost(){
        return this.#shippingCost
    }
//encapsulation means defining methods inside the class, meaning you cannot call it outside of the class
    calculateShipping(){
        return this.#weight*10;
    }
//showProductDetails is an example of polymorphism because the parent class contains the same function
    showProductDetails(){
        return `${super.showProductDetails()}, Weight: ${this.#weight}, Shipping Cost : ${this.#shippingCost}`
    }
}

class DigitalProduct extends Product{
    #downloadLink;

    //constructor 

    //showproductDetails

    //get for download link

}