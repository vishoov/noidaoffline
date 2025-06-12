
// class BankAccount{

// 	#balance 
	
// constructor(balance){
// 	this.#balance=balance;
// }

// 	deposit(amount){
// 		this.#balance+=amount;
// 	}

// 	withdrawal(amount){
// 		if(amount <= this.#balance){
// this.#balance-=amount;
// }else{
//     console.log("Not sufficient balance")
// }
// 	}

// 	getBalance(){
// 	return this.#balance;
// }
// }

// const newaccount = new BankAccount(1000);
// console.log(newaccount.getBalance())
// newaccount.deposit(100000000000000000000000000)
// console.log(newaccount.getBalance())


class Stakk{
    constructor(){
        this.items=[];
    }
    push(value){
        this.items.push(value);
    }

    pop(){
        if(this.isEmpty()){ throw new Error("Stack is empty")}
        return this.items.pop();
    }

    isEmpty(){
        return this.items.length===0;
    }
}

let Stack = new Stakk();
console.log(Stack)
Stack.push(10)
console.log(Stack)

Stack.push(20)
console.log(Stack)

Stack.push(30)
console.log(Stack)

console.log(Stack.pop());
console.log(Stack)

console.log(Stack.pop());
console.log(Stack)

console.log(Stack.pop());
console.log(Stack)

Stack.pop();
