// // This function returns a Promise that resolves after a delay
// javascript -> scripting -> interpretor 


// const data = console.log()
// const response = async fetch()
// const data2 = console.log


// behind scene 

// event loop 



// callStack 


function printabc(){
    console.log("start abc");
    prindcde();
    console.log("functions completed")
}

function prindcde(){
    // console.log("printed cde")
    setTimeout(()=>{console.log("cde")}, 2000)
}
printabc();