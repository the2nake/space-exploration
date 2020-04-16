var resources = {}
var resource_name_list = ["audio/title-screen.ogg", "audio/endless.wav", "images/Lasers/laserRed08.png", "images/Lasers/laserBlue08.png", "images/Lasers/laserGreen08.png", "images/Enemies/enemyBlack1.png", "images/Enemies/enemyBlack2.png", "images/Enemies/enemyBlack3.png", "images/Enemies/enemyBlack4.png", "images/Enemies/enemyBlack5.png", "images/background.jpg", "images/UI/endless.png", "images/UI/campaign.png", "images/playerShip2_blue.png", "audio/sfx_laser2.ogg", "audio/sfx_twoTone.ogg", "audio/sfx_lose.ogg", "images/UI/numeral0.png", "images/UI/numeral1.png", "images/UI/numeral2.png", "images/UI/numeral3.png", "images/UI/numeral4.png", "images/UI/numeral5.png", "images/UI/numeral6.png", "images/UI/numeral7.png", "images/UI/numeral8.png", "images/UI/numeral9.png"];
var resources_loaded = 0;
var total_resources_needed = resource_name_list.length + 1;

function checkResourceType(filepath) {
    if (typeof (filepath) == "string") {
        if (filepath.split(".")[1] == "png" || filepath.split(".")[1] == "jpg" || filepath.split(".")[1] == "jpeg" || filepath.split(".")[1] == "svg") {
            return "img";
        } else if (filepath.split(".")[1] == "wav" || filepath.split(".")[1] == "ogg" || filepath.split(".")[1] == "mp3" || filepath.split(".")[1] == "m4a") {
            return "audio";
        }
    }
}

for (let i = 0; i < resource_name_list.length; i++) {
    let temp = document.createElement(checkResourceType(resource_name_list[i]));
    temp.src = resource_name_list[i];
    console.log(temp);
    if (temp.tagName == "AUDIO") {
        temp.oncanplaythrough = function () {
            resources[resource_name_list[i]] = temp;
            resources_loaded += 1;
        }
    } else if (temp.tagName == "IMG") {
        temp.onload = function () {
            resources[resource_name_list[i]] = temp;
            resources_loaded += 1;
        }
    }
}

document.fonts.ready.then(function () {
    resources_loaded += 1;
});