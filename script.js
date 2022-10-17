
let foodPrice = 0
let drinkPrice = 0
let dessertPrice = 0
let foodItem = 0
let drinkItem = 0
let dessertItem = 0
let contador = 0

function selectFood(element, getFloatPrice) {
    const prevSelectedFoodItem = document.querySelector('.selected-food')
    if (prevSelectedFoodItem !== null) {
        prevSelectedFoodItem.classList.remove('selected-food');
        foodItem = 0
    }
    const food = element
    food.classList.add("selected-food")
    //getFloatPrice()
    foodPrice = Number.parseFloat(food.querySelector(".food-price").innerHTML).toFixed(2)
    
}

function selectDrink(element, getFloatPrice) {
    const prevSelectedDrinkItem = document.querySelector('.selected-drink')
    if (prevSelectedDrinkItem !== null) {
        prevSelectedDrinkItem.classList.remove('selected-drink');
        drinkItem = 0
    }
    const drink = element
    drink.classList.add("selected-drink")
    //getFloatPrice()
    drinkPrice = Number.parseFloat(drink.querySelector(".drink-price").innerHTML).toFixed(2)
    return(drinkPrice)
}

function selectDessert(element, getFloatPrice) {
    const prevSelectedDessertItem = document.querySelector('.selected-dessert')
    if (prevSelectedDessertItem !== null) {
        prevSelectedDessertItem.classList.remove('selected-dessert');
        dessertItem = 0
    }
    const dessert = element
    dessert.classList.add("selected-dessert")
    //getFloatPrice()
    dessertPrice = Number.parseFloat(dessert.querySelector(".dessert-price").innerHTML).toFixed(2)
    return(dessert)

}



function total(){
    contador++
    if(contador > 2){
        const button = document.querySelector(".btn")
        button.classList.add("green")
        const drinP = drinkPrice
        const desP = dessertPrice
    }
}



