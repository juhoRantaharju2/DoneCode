const arr = [1, 4, 6, 32, 25, 16, 31, 15, 10, 2, 7];
let largest=0;

for(i=0;i<arr.length; i++){

    if(largest<arr[i]){

        largest=arr[i];
    }


}

console.log(largest);