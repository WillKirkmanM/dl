# [@WillKM/DL - A Debug Utility Tool](https://www.npmjs.com/package/@WillKirkmanM/DL)
![Image](Assets/preview.png)
<p style="text-align: center;">A configurable, useful way to write debug log statements</p>

## Get Started
```javascript
// index.js
#!/usr/bin/env node 
import { DebugLogger } from "@WillKM/DL";

const debug = new DebugLogger({
    enabled: true,
    logLevel: 1,
    prefixMessage: '[DebugLogger] -'
});
     
debug.log(1, "Hello World");
```
### Result
```bash
$ node index.js
> [DebugLogger] - Hello World
```
## Why?
I made this as I wanted to regulate what logs showed when providing different verbosity levels.

