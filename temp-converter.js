const convertToCfromF = function(FTemp){
    CTemp = ((FTemp - 32) * 5 / 9);
    return CTemp; 
}

const convertToFfromC = function(CTemp){
    FTemp = ((CTemp * 9 / 5) + 32);
    return FTemp; 
}

module.exports = convertToCfromF;
module.exports = convertToFfromC;