let starting = 0, list = "";

while (starting < 8) {
    let hash = (starting % 2 === 0) ? " " : "#"; // alternate start per row

    for (let i = 0; i < 8; i++) {
        if (hash === "#") {
            list += " ";
            hash = " ";
        } else {
            list += "#";
            hash = "#";
        }
    }

    list += "\n"; // go to next line
    starting++;
}

console.log(list);
