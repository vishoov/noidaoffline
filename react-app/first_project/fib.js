function compareApproaches(n) {
    console.log('='.repeat(50));
    console.log(`COMPARING FIBONACCI APPROACHES FOR n = ${n}`);
    console.log('='.repeat(50));
    
    // Recursive approach
    console.log('\n🔄 RECURSIVE APPROACH (WITHOUT MEMOIZATION):');
    console.log('-'.repeat(40));
    
    const startTimeRecursive = performance.now();
    let recursiveCalls = 0;
    
    // Count function calls
    function fibRecursiveWithCount(n) {
        recursiveCalls++;
        if (n <= 1) return n;
        return fibRecursiveWithCount(n - 1) + fibRecursiveWithCount(n - 2);
    }
    
    const recursiveResult = fibRecursiveWithCount(n);
    const endTimeRecursive = performance.now();
    const recursiveTime = endTimeRecursive - startTimeRecursive;
    
    console.log(`Result: ${recursiveResult}`);
    console.log(`Function calls: ${recursiveCalls}`);
    console.log(`Time taken: ${recursiveTime.toFixed(4)} ms`);
    
    // Memoized approach
    console.log('\n💾 MEMOIZED APPROACH:');
    console.log('-'.repeat(40));
    
    const startTimeMemo = performance.now();
    let memoCalls = 0;
    const memo = {};
    
    // Count function calls
    function fibMemoWithCount(n, memo) {
        memoCalls++;
        if (n <= 1) return n;
        if (memo[n] !== undefined) return memo[n];
        
        memo[n] = fibMemoWithCount(n - 1, memo) + fibMemoWithCount(n - 2, memo);
        return memo[n];
    }
    
    const memoResult = fibMemoWithCount(n, memo);
    const endTimeMemo = performance.now();
    const memoTime = endTimeMemo - startTimeMemo;
    
    console.log(`Result: ${memoResult}`);
    console.log(`Function calls: ${memoCalls}`);
    console.log(`Time taken: ${memoTime.toFixed(4)} ms`);
    console.log(`Memo cache size: ${Object.keys(memo).length}`);
    
    // Performance comparison
    console.log('\n📊 PERFORMANCE COMPARISON:');
    console.log('-'.repeat(40));
    console.log(`Speedup: ${(recursiveTime / memoTime).toFixed(2)}x faster`);
    console.log(`Call reduction: ${((recursiveCalls - memoCalls) / recursiveCalls * 100).toFixed(1)}% fewer calls`);
    console.log(`Recursive calls: ${recursiveCalls}`);
    console.log(`Memoized calls: ${memoCalls}`);
}

// Test with different values
console.log('\n🧪 DETAILED EXECUTION TRACE FOR SMALL VALUES:');
console.log('\nRecursive fib(5):');
fibonacciRecursive(5);

console.log('\n\nMemoized fib(5):');
fibonacciMemoized(5);

// Performance comparison for larger values
compareApproaches(10);
compareApproaches(20);
compareApproaches(40);

// Warning for larger values
console.log('\n⚠️  WARNING: Running recursive approach for n > 35 may take very long!');
console.log('Try compareApproaches(35) to see the dramatic difference.');


function fibonacciMemoized(n, memo = {}, depth = 0) {
    const indent = '  '.repeat(depth);
    console.log(`${indent}Computing fib(${n})`);
    
    if (n <= 1) {
        console.log(`${indent}Base case: fib(${n}) = ${n}`);
        return n;
    }
    
    if (memo[n] !== undefined) {
        console.log(`${indent}Found in memo: fib(${n}) = ${memo[n]}`);
        return memo[n];
    }
    
    console.log(`${indent}Not in memo, calculating...`);
    const result = fibonacciMemoized(n - 1, memo, depth + 1) + fibonacciMemoized(n - 2, memo, depth + 1);
    memo[n] = result;
    console.log(`${indent}Stored in memo: fib(${n}) = ${result}`);
    return result;
}


function fibonacciRecursive(n, depth = 0) {
    const indent = '  '.repeat(depth);
    console.log(`${indent}Computing fib(${n})`);
    
    if (n <= 1) {
        console.log(`${indent}Base case: fib(${n}) = ${n}`);
        return n;
    }
    
    const result = fibonacciRecursive(n - 1, depth + 1) + fibonacciRecursive(n - 2, depth + 1);
    console.log(`${indent}fib(${n}) = ${result}`);
    return result;
}
