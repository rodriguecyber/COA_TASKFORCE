const subarraySum = (arr, target) =>{

    if (!arr || arr.length === 0) {
        return false;
    }
    
    let windowSum = arr[0];
    let start = 0;
    
    for (let end = 1; end < arr.length; end++) {
      
        while (windowSum > target && start < end) {
            windowSum -= arr[start];
            start++;
        }
        
       
        if (windowSum === target) {
            return true;
        }
        
       
        windowSum += arr[end];
    }
    
   
    return windowSum === target;
}


const arr = [4, 2, 7, 1, 9, 5];
const target = 14;
// call function with parameters
console.log(subarraySum(arr, target)); 
