# njsargs
NJS Args helps you get paired arguments ("--out-file file.txt") and also single arguments ("file.txt") from the command line.\
\
**ESM Import**
```
// Command: node app.mjs --foo bar iluv water
import njsargs from "njsargs";
const parsedArgs = njsargs.parse();
console.log("Parsed Arguments", parsedArgs);
/* Output: Parsed Arguments {
    pairs: {[
        key: "foo"
        value: "bar"
    ]},
    single: [
        "iluv"
        "water"
    ]
}
*/
```
**Common JS Import**
```
// Command: node app.js --foo bar iluv water
const njsargs = require("njsargs");
const parsedArgs = njsargs.parse();
console.log("Parsed Arguments", parsedArgs);
/* Output: Parsed Arguments {
    pairs: {[
        key: "foo"
        value: "bar"
    ]},
    single: [
        "iluv"
        "water"
    ]
}
*/
```
*by Spikerko*