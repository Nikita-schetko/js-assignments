'use strict';

/********************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield        *
 *                                                                                          *
 ********************************************************************************************/


/**
 * Returns the lines sequence of "99 Bottles of Beer" song:
 *
 *  '99 bottles of beer on the wall, 99 bottles of beer.'
 *  'Take one down and pass it around, 98 bottles of beer on the wall.'
 *  '98 bottles of beer on the wall, 98 bottles of beer.'
 *  'Take one down and pass it around, 97 bottles of beer on the wall.'
 *  ...
 *  '1 bottle of beer on the wall, 1 bottle of beer.'
 *  'Take one down and pass it around, no more bottles of beer on the wall.'
 *  'No more bottles of beer on the wall, no more bottles of beer.'
 *  'Go to the store and buy some more, 99 bottles of beer on the wall.'
 *
 * See the full text at
 * http://99-bottles-of-beer.net/lyrics.html
 *
 * NOTE: Please try to complete this task faster then original song finished:
 * https://www.youtube.com/watch?v=Z7bmyjxJuVY   :)
 *
 *
 * @return {Iterable.<string>}
 *
 */
function* get99BottlesOfBeer() {
    // Not sure about best realization here :/
    var bottles = 99;
    var passBottle = false;
    while(bottles > 1)
    {
        if(passBottle)
        {
         let bottlesWord = '';
         passBottle = false;    
         bottles--;
         bottles > 1 ?  bottlesWord = ' bottles' : bottlesWord = ' bottle'; 
         yield 'Take one down and pass it around, '+ bottles + bottlesWord + ' of beer on the wall.'  
        }
        else
        {
            passBottle = true;
            yield bottles + ' bottles of beer on the wall, '+  bottles + ' bottles of beer.';
        }
    }
        yield '1 bottle of beer on the wall, 1 bottle of beer.'
        yield 'Take one down and pass it around, no more bottles of beer on the wall.'
        yield 'No more bottles of beer on the wall, no more bottles of beer.'
        yield 'Go to the store and buy some more, 99 bottles of beer on the wall.'
}


/**
 * Returns the Fibonacci sequence:
 *   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
 *
 * See more at: https://en.wikipedia.org/wiki/Fibonacci_number
 *
 * @return {Iterable.<number>}
 *
 */
function* getFibonacciSequence() {
  var fibonacciPrevNum = 0;
  var fiboncciNum = 1;
  yield 0;
  yield 1;
  while(true)
  {
    let result = fibonacciPrevNum + fiboncciNum;
    fibonacciPrevNum = fiboncciNum;
    fiboncciNum = result;
    yield result
  }
}


/**
 * Traverses a tree using the depth-first strategy
 * See details: https://en.wikipedia.org/wiki/Depth-first_search
 *
 * Each node have child nodes in node.children array.
 * The leaf nodes do not have 'children' property.
 *
 * @params {object} root the tree root
 * @return {Iterable.<object>} the sequence of all tree nodes in depth-first order
 * @example
 *
 *   var node1 = { n:1 }, node2 = { n:2 }, node3 = { n:3 }, node4 = { n:4 },
 *       node5 = { n:5 }, node6 = { n:6 }, node7 = { n:7 }, node8 = { n:8 };
 *   node1.children = [ node2, node6, node7 ];
 *   node2.children = [ node3, node4 ];
 *   node4.children = [ node5 ];
 *   node7.children = [ node8 ];
 *
 *     source tree (root = 1):
 *            1
 *          / | \
 *         2  6  7
 *        / \     \            =>    { 1, 2, 3, 4, 5, 6, 7, 8 }
 *       3   4     8
 *           |
 *           5
 *
 *  depthTraversalTree(node1) => node1, node2, node3, node4, node5, node6, node7, node8
 *
 */

function* depthTraversalTree(root) {
    var stack = [];
    stack.push(root);
    while(stack.length != 0)
    {
        root = stack.pop();
        yield root;
        if(root.children)
        {
            for(var i = root.children.length; i > 0; i--)
            {
                stack.push(root.children[i-1]);
            }
        }
    }
}

// Cant understand, why my implementation slower than implementation above 

// function* depthTraversalTree(root) {
//     var stack = [];
//     var yieldArr = [];
//     yield root
//     while (root.children.length > 0) 
//     {
//         stack.push(root.children.shift());
//         while (stack.length > 0) {
//             var currentNode = stack.shift();
//             // yieldArr.push(currentNode.n);
//             yield currentNode
//             if (currentNode.children) {
//                 let reversedCurrentNodeChildrens = currentNode.children.reverse()
//                 reversedCurrentNodeChildrens.forEach(function (node) {
//                     stack.unshift(node);
//                 })
//             }
//         }
//     }
// }


/**
 * Traverses a tree using the breadth-first strategy
 * See details: https://en.wikipedia.org/wiki/Breadth-first_search
 *
 * Each node have child nodes in node.children array.
 * The leaf nodes do not have 'children' property.
 *
 * @params {object} root the tree root
 * @return {Iterable.<object>} the sequence of all tree nodes in breadth-first order
 * @example
 *     source tree (root = 1):
 *
 *            1
 *          / | \
 *         2  3  4
 *        / \     \            =>    { 1, 2, 3, 4, 5, 6, 7, 8 }
 *       5   6     7
 *           |
 *           8
 *
 */
function* breadthTraversalTree(root) {
    var queue = new Queue();
    queue.enqueue(root);
    while(queue.getLength() != 0)
    {
        root = queue.dequeue();
        yield root
        if(root.children)
        {
            for(var i = 0; i < root.children.length; i++)
            {
                queue.enqueue(root.children[i]);
            }
        }
    }
}

function Queue(){
      // initialise the queue and offset
      var queue  = [];
      var offset = 0;
    
      // Returns the length of the queue.
      this.getLength = function(){
        return (queue.length - offset);
      }
    
      // Returns true if the queue is empty, and false otherwise.
      this.isEmpty = function(){
        return (queue.length == 0);
      }
    
      /* Enqueues the specified item. The parameter is:
       *
       * item - the item to enqueue
       */
      this.enqueue = function(item){
        queue.push(item);
      }
    
      /* Dequeues an item and returns it. If the queue is empty, the value
       * 'undefined' is returned.
       */
      this.dequeue = function(){
    
        // if the queue is empty, return immediately
        if (queue.length == 0) return undefined;
    
        // store the item at the front of the queue
        var item = queue[offset];
    
        // increment the offset and remove the free space if necessary
        if (++ offset * 2 >= queue.length){
          queue  = queue.slice(offset);
          offset = 0;
        }
    
        // return the dequeued item
        return item;
    
      }
    
      /* Returns the item at the front of the queue (without dequeuing it). If the
       * queue is empty then undefined is returned.
       */
      this.peek = function(){
        return (queue.length > 0 ? queue[offset] : undefined);
      }
    }

// function* breadthTraversalTree(root) {
//     var stack = [];
//     stack.push(root);
//     while(stack.length != 0)
//     {
//         root = stack.shift();
//         yield root;
//         if(root.children)
//         {
//             for(var i = 0; i < root.children.length; i++)
//             {
//                 stack.push(root.children[i]);
//             }
//         }
//     }
// }

/**
 * Merges two yield-style sorted sequences into the one sorted sequence.
 * The result sequence consists of sorted items from source iterators.
 *
 * @params {Iterable.<number>} source1
 * @params {Iterable.<number>} source2
 * @return {Iterable.<number>} the merged sorted sequence
 *
 * @example
 *   [ 1, 3, 5, ... ], [2, 4, 6, ... ]  => [ 1, 2, 3, 4, 5, 6, ... ]
 *   [ 0 ], [ 2, 4, 6, ... ]  => [ 0, 2, 4, 6, ... ]
 *   [ 1, 3, 5, ... ], [ -1 ] => [ -1, 1, 3, 5, ...]
 */
function* mergeSortedSequences(source1, source2) {
    var resultArr = [];
    var newIndex = 0;
    var lastResult = 0;
    var sourceA = source1();
    var sourceB = source2();
    while(true)
    {
        let currentNumberA = sourceA.next();
        let currentNumberB = sourceB.next();
        currentNumberA.done ? '' : resultArr.push(currentNumberA.value);
        currentNumberB.done ? '' : resultArr.push(currentNumberB.value);
        resultArr.sort(function (a, b) { return a - b });
        if(newIndex == 0 && lastResult == 0)
        {
            lastResult = resultArr[0];
            newIndex = 1;
        }
        else
        {
            newIndex = resultArr.lastIndexOf(lastResult) + 1;
            if(resultArr[newIndex] && resultArr[newIndex])
            lastResult =  resultArr[newIndex];
        }
        yield lastResult;
    }

}


module.exports = {
    get99BottlesOfBeer: get99BottlesOfBeer,
    getFibonacciSequence: getFibonacciSequence,
    depthTraversalTree: depthTraversalTree,
    breadthTraversalTree: breadthTraversalTree,
    mergeSortedSequences: mergeSortedSequences
};
