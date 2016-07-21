function processData(input) {
    var numOfPairs = input.split('\n')[0];
    
    for (var pairNumber = 1; pairNumber <= numOfPairs; pairNumber++){
        word1 = input.split('\n')[2 * pairNumber - 1];
        word2 = input.split('\n')[2 * pairNumber];
        
        var hasCommonStr = false;
        for (var index = 0; index < word1.length; index++){
            if ( word2.includes(word1[index]) ) {
                hasCommonStr = true;
            }
        }
        
        (hasCommonStr)? console.log("YES") : console.log("NO");
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});