var printarray=require('./print2darray.js')

function transposeArray(arr){

    var output = [];
    for(var i = 0; i < arr.length; i++){
        output.push([]);
    };

    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            output[j].push(arr[i][j]);
        };
    };

    printarray(output);
}
module.exports = transposeArray;