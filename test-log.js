
const Log = require('log');
console.log("Log module:", Log);
console.log("Log.ERROR:", Log.ERROR);
console.log("Log.DEBUG:", Log.DEBUG);
console.log("Log.INFO:", Log.INFO);

const log = new Log(Log.INFO);
console.log("log instance:", log);
console.log("log.info exists?", typeof log.info);
console.log("log.error exists?", typeof log.error);
console.log("log.debug exists?", typeof log.debug);
