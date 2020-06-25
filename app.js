// we need:
// some items
// draw menu
// a cart that holds stuff n things

// add to cart function
// draw cart
// checkout function

let menuItems = {
    tacos: {
        title: "Tacos",
        ingredients: "Tortilla, meat, cheese.",
        vegan: false,
        price: "$5.00"
    },
    burrito: {
        title: "Burrito",
        ingredients: "Tortilla, meat, cheese.",
        vegan: false,
        price: "$8.00"
    },
    churros: {
        title: "Churros",
        ingredients: "Make it your own",
        vegan: true,
        price: "$12.00"
    },
    enchilada: {
        title: "Enchilada",
        ingredients: "Tortilla, meat, cheese, enchilada sauce.",
        vegan: true,
        price: "$1.00"
    }
}

let cart = []



// use the menu items, and print them on the screen, we already setup a row to dump these into
function drawMenu() {
    let template = ""
    for (let prop in menuItems) {
        let item = menuItems[prop]
        // if(even iteration add row)
        // template += whatever
        template += /*html*/`
        <div class="col-4 bg-light rounded border shadow-lg p-5">
                <h3>${item.title}</h3>
                <h5>${item.ingredients}</h5>
                <h5>Vegan: ${item.vegan}</h5>
                <h5>${item.price}</h5>
                <button class="btn btn-success btn-block" onclick="addToCart('${prop}')"> Buy ${item.title}</button>
            </div>
        `
    }

    document.getElementById("menu-items").innerHTML = template
}


// TODO do the things that make this work
function addToCart(itemIndex) {
    console.log(itemIndex)
    cart.push(menuItems[itemIndex])
}


drawMenu()