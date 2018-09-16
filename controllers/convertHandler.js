/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = input.substring(0, input.indexOf(input.match(/[a-zA-Z]/)))
    if(result.length === 0){
      result = "1";
    }
    if(result.match(/\//) && result.split('/').length == 2){
      result = Number(result.split('/')[0]) / Number(result.split('/')[1]);
    }
    if(isNaN(Number(result))){
      result = undefined;
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var result = input.substring(input.indexOf(input.match(/[a-zA-Z]/)), input.length)
    var units = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG']
    if(units.indexOf(result) === -1){
      result = undefined;
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit.toLowerCase()) {
      case 'gal':
        result = 'l';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
                   }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch (unit.toLowerCase()) {
      case 'gal':
        result = 'gallons';
        break;
      case 'l':
        result = 'liters';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometres';
                   }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (initUnit.toLowerCase()) {
      case 'gal':
        result = (Number(initNum) * galToL).toFixed(5);
        break;
      case 'l':
        result = (Number(initNum) / galToL).toFixed(5);
        break;
      case 'lbs':
        result = (Number(initNum) * lbsToKg).toFixed(5);
        break;
      case 'kg':
        result = (Number(initNum) / lbsToKg).toFixed(5);
        break;
      case 'mi':
        result = (Number(initNum) * miToKm).toFixed(5);
        break;
      case 'km':
        result = (Number(initNum) / miToKm).toFixed(5);
        break;
                   }
    return Number(result);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = initNum + " " + this.spellOutUnit(initUnit) + " converts to "
      + returnNum + " " + this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;
