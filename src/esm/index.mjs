// njsargs.js



function parse() {
    const args = process.argv.slice(2);
    let parsedArgs = {};
    parsedArgs.pairs = [];
    parsedArgs.single = [];
    
    for (let i = 0; i < args.length; i++) {
        if (args[i].startsWith('--')) {
            // Named argument
            const key = args[i].substring(2);
            const value = args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true;
            parsedArgs.pairs.push({ key, value });
            if (value !== true) {
                i++; // Skip the next argument since it's a value
            }
        } else {
            // Single argument
            parsedArgs.single.push(args[i]);
        }
    }
    return parsedArgs;
}

const njsargs = {
    parse
}
export default njsargs