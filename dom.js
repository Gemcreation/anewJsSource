(
    function() {
        function clickHandler(message) {
            console.log(`"Hi..." ${message}`);
            // document.write(`"Hi..." ${message}`);
        }

        let myButton = document.getElementById("myButton");
        myButton.addEventListener("click", clickHandler("Gem"));

    }
) ();