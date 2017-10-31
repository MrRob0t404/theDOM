// With​ ​the​ ​files​ prompt-click.html​ ​and​ ​prompt-click.js,​ ​ ​build​ ​a​ ​page​ ​with:

// a​ ​centered​ ​input element ​that has​ an attribute ​id="​container"​.​​
// a centered div that has an attribute id="input".
// A button with an onclick attribute. Whenever the user clicks on the button,​ ​change​ ​the​ ​container​ ​div​ ​to​ hold the user's input​.​ To get the text of an input element use the .value property.

var button = document.getElementById("button"); 


button.onclick = function () {
    var input = window.prompt("Enter text to be displayed");

    document.getElementById("input").innerHTML = input;
}
