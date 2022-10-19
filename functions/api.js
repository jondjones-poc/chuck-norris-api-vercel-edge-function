var start = process.hrtime();

var elapsed_time = function(note){

    var precision = 3;
    var elapsed = process.hrtime(start)[1] / 1000000;
    var time = process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms - " + note;

    console.log(time);

    start = process.hrtime();

    return time;
}

var functionOne  = function(){
    var result = 1 + 1;
}

export const handler = async () => {
    var infoObject = {};

    elapsed_time('start Function #1');

    var iterations = 1000000000;
    for(var i = 0; i < iterations; i++ ){
        functionOne();
    };

    infoObject.end = elapsed_time('end Function #1');

    return {
        statusCode: 200,
        body: JSON.stringify(infoObject),
      }
  }