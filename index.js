const createEquifaxSecurityFreezePIN = function (dateObject) {
    return (dateObject.getMonth() + 1).toString() + 
    dateObject.getDate().toString() + 
    dateObject.getFullYear().toString().slice(-2) + 
    dateObject.getHours().toString() + 
    dateObject.getMinutes().toString();
};

module.exports = {
    createEquifaxSecurityFreezePIN
};