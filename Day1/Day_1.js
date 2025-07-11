let starting = 0, hash = "_", list = "";

while (starting < 8) {

    for (let i = 0; i < 4; i++) {
        if (hash === "#") {
            list += " ";
            hash = " ";
        } 
        else(hash === "_") 
        {
            list += "#";
            hash = "#";
        }
    }
    list += "\n";
    starting++;
    
    
}

console.log(list);


