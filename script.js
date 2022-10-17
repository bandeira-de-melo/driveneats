function selectFood(element, getFloatPrice) {
    const prevSelectedFoodItem = document.querySelector('.selected-food')
    if (prevSelectedFoodItem !== null) {
        prevSelectedFoodItem.classList.remove('selected-food');
    }
    const food = element
    food.classList.add("selected-food")
    //getFloatPrice()
    let foodPrice = Number.parseFloat(food.querySelector(".food-price").innerHTML).toFixed(2)
    
}

function selectDrink(element, getFloatPrice) {
    const prevSelectedFoodItem = document.querySelector('.selected-drink')
    if (prevSelectedFoodItem !== null) {
        prevSelectedFoodItem.classList.remove('selected-drink');
    }
    const drink = element
    drink.classList.add("selected-drink")
    //getFloatPrice()
    let foodPrice = Number.parseFloat(drink.querySelector(".drink-price").innerHTML).toFixed(2)
    
}

function selectDessert(element, getFloatPrice) {
    const prevSelectedFoodItem = document.querySelector('.selected-dessert')
    if (prevSelectedFoodItem !== null) {
        prevSelectedFoodItem.classList.remove('selected-dessert');
    }
    const dessert = element
    dessert.classList.add("selected-dessert")
    //getFloatPrice()
    let foodPrice = Number.parseFloat(dessert.querySelector(".dessert-price").innerHTML).toFixed(2)
    
}

const getFloatPrice = (item, itemClass) => {
    return Number.parseFloat(item.querySelector(itemClass).innerHTML).toFixed(2)
}


