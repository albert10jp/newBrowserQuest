modernized https://github.com/mozilla/BrowserQuest/tree/master/server 

only the server part

The `server/` part of BrowserQuest depends on `shared/js/gametypes.js`, e.g. `Types = require("../../shared/js/gametypes");`

run `npm install -d` from here (aka prj root) rather than ./server/

run `node server/js/main.js` from here (aka prj root) rather than ./server/
