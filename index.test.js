const equifaxGuid = require('./index');

const testGuid = equifaxGuid.createEquifaxSecurityFreezePIN(new Date());

console.log(testGuid);
