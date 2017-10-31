// Add a script tag to the bottom of the HTML body.
// (In the JavaScript) Replace each of the spans (nickname, favorites, hometown) with your own information.
// (In the JavaScript) Change the body's style so it has a font-family of "Arial, sans-serif".
// Bonus: (In Javascript) Create a new img element and set its src attribute to a picture of you. Append that element to the page.


function replace() {
    var nickname = window.prompt("What is your nickname?");
    var favorite = window.prompt("Favorites?");
    var hometown = window.prompt("What is your hometown?");

    document.getElementById("nickname").innerHTML = nickname;
    document.getElementById("favorites").innerHTML = favorite;
    document.getElementById("hometown").innerHTML = hometown;

}

replace();