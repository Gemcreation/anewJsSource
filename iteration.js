for (i = 0; i < 10; i++) {
    console.log("Loop " + i);
}


let food = ["rice", "beans", "yam", "egg","maize", "corn", "flour"];
for (i = 0; i < food.length; i++){
    console.log("Food " + food[i]);
}

function meal() {
    setTimeout(function() {
        let fruits = ["apple", "mango", "cashew", "watermelon","grape", "banana", "pawpaw"];
        for (i = 0; i < fruits.length; i++){
            console.log("Food " + fruits[i]);
        }
        // meal();
    }, 2000);
}
meal();