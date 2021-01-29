/* // keys
var map = {}; // You could also use an array
var repeat = false;

window.addEventListener('keydown', function (e) {
    if (!((e.key == "r" || "R" || "i" || "I") || e.ctrlKey || e.shiftKey)) {
        e.preventDefault(); // important!
    }
    map = (map || []);
    map[e.key] = (e.type == "keydown");
});
window.addEventListener('keyup', function (e) {
    map[e.key] = (e.type == "keydown");
});
*/

// minified version

var map={},repeat=!1;window.addEventListener("keydown",function(e){e.key,(map=map||[])[e.key]="keydown"==e.type}),window.addEventListener("keyup",function(e){map[e.key]="keydown"==e.type});