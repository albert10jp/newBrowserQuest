
console.log("Testing require paths...");
try {
    const Types = require("./shared/js/gametypes");
    console.log("Successfully loaded Types:", Types);
    console.log("Types.Messages.HELLO:", Types.Messages.HELLO);
} catch(e) {
    console.error("Error loading Types:", e);
}
