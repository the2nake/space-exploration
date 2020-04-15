var resources = {}
var resource_name_list = ["images/Lasers/laserRed08.png", ];
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
    if (temp.tagName == "audio") {
        console.log("fine");
        temp.oncanplaythrough = function () {
            resources[resource_name_list[i]] = temp;
            resources_loaded += 1;
        }
    } else if (temp.tagName == "img") {
        console.log("fine");
        temp.onload = function () {
            resources[resource_name_list[i]] = temp;
            resources_loaded += 1;
        }
    }
}

document.fonts.ready.then(function () {
    resources_loaded += 1;
});