const fs = require('fs');

fs.readFile("input.json", function(err, data) { 

    // Check for errors 
    if (err) throw err; 

    // Converting to JSON 
    const action = JSON.parse(data); 
    //users["functions"] = []
    let POST_ACTION_EXECUTION = fs.readFileSync('functions/POST_ACTION_EXECUTION.js', 'utf8');
    action["functions"].push({
        "functionType":"POST_ACTION_EXECUTION",
        "functionSource":JSON.stringify(POST_ACTION_EXECUTION)
    })
    fs.writeFile(
        "output.json",
        JSON.stringify(action, null, 4),
        err => {
            // Checking for errors 
            if (err) throw err;
    
            // Success 
            console.log("Done writing");
        }); 
});

