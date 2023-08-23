
/**
 * Logic to create and charge orders of the user  
 */

const user = {
    name: "Roger",
    age: 20,
    debt: 0
}

let totalIncome = 0

let order = []

const showMenu = () => {
    console.log("CODE - PRODUCT NAME - PRICE")
    dishes.forEach(product => console.log(`${product.code} - ${product.dish} - $${product.cost}`))
}

const orderProduct = cod => {
    if (typeof cod != "string") return "Write a valid code"

    const fetch = dishes.find(dish => dish.code === cod)
    if (!fetch) return "The product does not exist"

    order.push(fetch)
    console.log("The product has been added at the order. Your order is:")
    totalIncome += fetch.cost
    return seeOrder()
}

const seeOrder = () => order

let calculateCost = () => {
    let productCost = 0
    for (product of order) {
        productCost += product.cost 
    }

    return productCost
}

const endOrder = () => {
    user.debt = calculateCost()

    order = []
    productCost = 0

    return `${user.name}, you have to pay $${user.debt}.`
}

const payOrder = total => {
    if (total < user.debt) return "This amount is not enough, try again please."
    else if (total === user.debt) {
        user.debt = 0
        return 'Your debt was settled.'
    }
    else if (total > user.debt){
        change = total - user.debt
        user.debt = 0
        return `Your debt was settled and the change is $${change}.`
    }
    else return "Wrong type, try again please"
} 