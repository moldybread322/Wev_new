function calculateBoxes() {
    let stickers = parseInt(document.getElementById("stickers").value);
    let stickersPerBox = 6;
    let boxes = Math.floor(stickers / stickersPerBox);

    let outputText;
    if (boxes > 0) {
        outputText = "You have " + boxes + " full boxes";
    } else {
        outputText = "You have no full boxes";
    }

    if (stickers >= 18 && stickers <= 20) {
        outputText += "<br>You have a small box";
    } else if (stickers >= 21 && stickers <= 30) {
        outputText += "<br>You have a medium box";
    }

    document.getElementById("output").innerHTML = outputText;
    console.log("hellov2"); 
}

//need to commit but nothing is happening
