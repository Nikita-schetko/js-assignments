'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 **************************************************************************************************/


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
    switch (true) {
        case (num % 3 == 0) && (num % 5 == 0):
            return 'FizzBuzz'
        case (num % 5 == 0):
            return 'Buzz'
        case (num % 3 == 0):
            return 'Fizz'
        default:
            return num
    }
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
    var factorial = 1;
    for(var i =1;i<=n;i++)
    {
        factorial = factorial * i;
    }
    return factorial
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
    for (var i = n1; i < n2; i++) {
        n1 = n1 + i + 1;
    }
    return n1;
}


/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a,b,c) {
    if ((a < b+c)&&(b < a+c)&&(c < a+b))
    return true;
    else return false;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object 
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 * 
 *  (5;5)
 *     -------------  
 *     |           | 
 *     |           |  height = 10
 *     ------------- 
 *        width=20    
 * 
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 * 
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 * 
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *  
 */
function doRectanglesOverlap(r1, r2) {
    throw new Error('Not implemented');
    
        r1.right = r1.left + r1.width;
        r1.bottom = r1.top - r1.height;        
        r2.right = r2.left + r2.width;
        r2.bottom = r2.top - r2.height;        
        
        return (r2.left > r1.right || r2.right < r1.left ||r2.top > r1.bottom || r2.bottom < r1.top);
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of 
 *  {
 *     center: {
 *       x: 5,       
 *       y: 5
 *     },        
 *     radius: 20
 *  }
 * 
 * Point is object of 
 *  {
 *     x: 5,
 *     y: 5
 *  }
 * 
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *   
 */
function isInsideCircle(circle, point) {
    var r = circle.radius;
    if ((Math.pow((point.x - circle.center.x),2) + Math.pow((point.y - circle.center.y),2) < r * r))
        return true
    else return false
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
    for(var i = 0;i < str.length;i++)
    {
       var char = str.charAt(i);
       var curCharIndex = i;
        for (var j = 0; j<str.length;j++)
        {
            if(curCharIndex == j)
            continue;
            if(char == str.charAt(j))
            break;
            if(j == str.length-1)
            return char
        }
    }
    return null
}


/**
 * Returns the string representation of math interval, specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
    var result = '';
    isStartIncluded ? result = '[' : result = '(';
    a <= b ? result+=(a+', '+b) : result+=(b+', '+a);
    isEndIncluded ? result+=']' : result+= ')';
    return result
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
    var arrayString = str.split('');
    arrayString.reverse();
    var a = arrayString.join('');
    return a;    
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
    // KEKE, i think that's good idea not to use loops here :)
    var arrayString = num.toString().split('');
    arrayString.reverse();
    var a = arrayString.join('');
    return a; 
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
    var ccnLen = ccn.toString().length;
    var controlSum = 0;

    for(let i = ccnLen-2; i > -1;i-=2)
    {
        let curNum = parseInt(ccn.toString().charAt(i));
        if(curNum*2 > 9)
        {
            controlSum+= curNum*2 - 9;
        }
        else
        {
            controlSum+= curNum*2;
        }
    }
    for(let i = ccnLen-3; i > -1;i-=2)
    {
        controlSum+= parseInt(ccn.toString().charAt(i));
    }
    controlSum = controlSum + parseInt(ccn.toString().charAt(ccnLen-1));
    
    if(controlSum % 10 == 0)
        return true
    else
        return false

}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
    function getNumSum(value) {
        var arr = value.toString().split('');
        return arr.reduce(function (prev, next) {
            return parseInt(prev) + parseInt(next);
        }
        )
    }
    while (num > 9) {
        num = getNumSum(num);
    }
    return num;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true 
 */
function isBracketsBalanced(str) {
    //CHECK SOLUTION HERE
    var bracketsStack = []

    function checkBalance(str)
    {
        for(let i = 0;i<str.length;i++)
        {
            if(getRightBracket(str.charAt(i)))
                bracketsStack.push(str.charAt(i));
            else
                if(getRightBracket(bracketsStack[bracketsStack.length-1]) == str.charAt(i))
                    {
                        bracketsStack.pop();
                        continue
                    }
            
            if(i==str.length-1)
            {
                bracketsStack.push(str.charAt(i));
            }

        }
    }

    function getRightBracket(bracketSymb)
    {
        switch (bracketSymb) {
            case '[':
                return ']';
            case '{':
                return '}';
            case '(':
                return ')';
            case '<':
                return '>';
            default:
                return false
        }
    }

    checkBalance(str);
    
    if (bracketsStack.length == 0)
        return true
    else
        return false;
}


/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {
    var dateDiff = endDate.getTime() - startDate.getTime();
    var sec0 = new Date(0, 0, 0, 0, 0, 0, 0).getTime();
    var sec45 = new Date(0, 0, 0, 0, 0, 45, 0).getTime();
    var sec90 = new Date(0, 0, 0, 0, 0, 90, 0).getTime();
    var min45 = new Date(0, 0, 0, 0, 45, 0, 0).getTime();
    var min90 = new Date(0, 0, 0, 0, 90, 0, 0).getTime();
    var hour22 = new Date(0, 0, 0, 22, 0, 0, 0).getTime();
    var hour36 = new Date(0, 0, 0, 36, 0, 0, 0).getTime();
    var day25 = new Date(0, 0, 25, 0, 0, 0, 0).getTime();
    var day45 = new Date(0, 0, 45, 0, 0, 0, 0).getTime();
    var day345 = new Date(0, 0, 345, 0, 0, 0, 0).getTime();
    var day545 = new Date(0, 0, 545, 0, 0, 0, 0).getTime();

    if ((0 < dateDiff) && (dateDiff <= sec45 - sec0))
        return 'a few seconds ago'
    if ((sec45 - sec0 < dateDiff) && (dateDiff <= sec90 - sec0))
        return 'a minute ago'
    if ((sec90 - sec0 < dateDiff) && (dateDiff <= min45 - sec0)) {
        let mins = Math.round((dateDiff - 1) / (60 * 1000));
        return mins + ' minutes ago';
    }
    if ((min45 - sec0 < dateDiff) && (dateDiff <= min90 - sec0))
        return 'an hour ago'
    if ((min90 - sec0 < dateDiff) && (dateDiff <= hour22 - sec0)) {
        let hours = Math.round((dateDiff - 1) / (60 * 60 * 1000));
        return hours + ' hours ago';
    }
    if ((hour22 - sec0 < dateDiff) && (dateDiff <= hour36 - sec0))
        return 'a day ago'
    if ((hour36 - sec0 < dateDiff) && (dateDiff <= day25 - sec0)) {
        let days = Math.round((dateDiff - 1) / (24 * 60 * 60 * 1000));
        return days + ' days ago';
    }
    if ((day25 - sec0 < dateDiff) && (dateDiff <= day45 - sec0))
        return 'a month ago'
    if ((day45 - sec0 < dateDiff) && (dateDiff <= day345 - sec0)) {
        let month = Math.round((dateDiff - 1) / (30 * 24 * 60 * 60 * 1000));
        return month + ' months ago';
    }
    if ((day345 - sec0 < dateDiff) && (dateDiff <= day545 - sec0))
        return 'a year ago'
    if (day545 - sec0 < dateDiff) {
        let year = Math.round((dateDiff - 1) / (12 * 30 * 24 * 60 * 60 * 1000));
        return year + ' years ago';
    }
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
    var res = [];

    while(num>0)
    {
        var numbers = num % n;
        num = Math.floor(num / n);
        res.unshift(numbers);
    }

    return parseInt(res.join(''));

}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
    var commonDirectory = '';
    var currentPath = 0;
    for(let i = 0;i<pathes.length;i++)
    {
        pathes[i] = pathes[i].split('');
    }

    for(let i = 0;i<pathes[0].length;i++)
    {   
        
        var pathChar = pathes[0][i]
        for(var j = 0;j<pathes.length;j++)
        {
            if( pathChar !== pathes[j][i])
            return commonDirectory.substring( 0, commonDirectory.lastIndexOf('/')+1) || ''
        }
         commonDirectory += pathChar;
    }
    

    return commonDirectory.substring(0,commonDirectory.lastIndexOf('/'))
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
    //Not sure if this is best implementation
    var matrixRows = m1.length;
    var matrixCols = m2[0].length;
    var resultArr = [];
    for (var i = 0; i < matrixRows; i++) {
        resultArr.push([]);
        for (var j = 0; j < matrixCols; j++) {
            var matrixValue = getMatrixValue(i,j);
            resultArr[i].push(matrixValue);
        }
    }

    function getMatrixValue( currentRow, currentCol)
    {
        var value = 0;
        for(let i =0; i<m2.length; i++)
        {
            value = value + m1[currentRow][i] * m2[i][currentCol];
        }
        return value
    }
    return resultArr
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
    //Check horizontals
    for (var i = 0; i < position.length; i++) {
        var horiz = '';
        position[i].forEach(element => {
            horiz+=element;
        });
        if(horiz == '000') return '0';
        if(horiz == 'XXX') return 'X';
    }

    //Check verticals
    for (var i = 0; i < position.length; i++) {
        var vert = '';
        for(var j=0; j < position.length; j++)
        {
            vert = vert + position[j][i];
        }
        if(vert == '000') return '0';
        if(vert == 'XXX') return 'X';
    }

    //Check corners
    var rightToLeft = position[0][0] + position[1][1] + position[2][2];
    var leftToRight = position[0][2] + position[1][1] + position[2][0];
    if(rightToLeft == '000' || leftToRight == '000' ) return '0';
    if(rightToLeft == 'XXX' || leftToRight == 'XXX' ) return 'X';


    return
}


module.exports = {
    getFizzBuzz: getFizzBuzz,
    getFactorial: getFactorial,
    getSumBetweenNumbers: getSumBetweenNumbers,
    isTriangle: isTriangle,
    doRectanglesOverlap: doRectanglesOverlap,
    isInsideCircle: isInsideCircle,
    findFirstSingleChar: findFirstSingleChar,
    getIntervalString : getIntervalString,
    reverseString: reverseString,
    reverseInteger: reverseInteger,
    isCreditCardNumber: isCreditCardNumber,
    getDigitalRoot: getDigitalRoot,
    isBracketsBalanced: isBracketsBalanced,
    timespanToHumanString : timespanToHumanString,
    toNaryString: toNaryString,
    getCommonDirectoryPath: getCommonDirectoryPath,
    getMatrixProduct: getMatrixProduct,
    evaluateTicTacToePosition : evaluateTicTacToePosition
};
