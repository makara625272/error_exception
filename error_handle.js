// error handle, error hander, error exception 

const mum1 = 10;
const num2 = 20;

try {  // try is use to test the block code is error or not
    if(num1 = num2){
        consol.log("yes");
    }else{
        console.log("No");
    }
}catch{
    console.error("Your code has something wrong")
}finally{
    console.warn("I always run forever");
}
