//1Write a function that accepts an array of strings and console.
//logs each element using a for loop
let names=["Emma","Becky","Ripuu","Dolayo","Winner","Wayne"];
array(names)
function array(names){
  for( i=0;i<names.length;i++){
  console.log(names[i]);
  }
}



//2Write a function that accepts an array of numbers and uses the forEach() method to console.
//log each number multiplied by 2.
function arrays(Q){
    console.log(Q*2);
}
let numbers=[15,23,2,4,34,12,32]
numbers.forEach(arrays)


//3Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. 
//Console the array with the new values
let arraysNum2=[20,10,30,40];
nums2(arraysNum2);
function nums2(arraysNums2){
    i=0;
    while(i<arraysNums2.length){
        if(i===4){
            break; 
    }
    console.log(nums2[0,4]);
    i++;
    }
}

//4Write a function that takes in the following array 
//and use a while loop to iterate and break when the item is equal to the fourth index
//let arrNum = [1,2,3,4,5,6,7,8,9];
let arrNum = [1,2,3,4,5,6,7,8,9];
nums(arrNum);
function nums(arrNum){
    i=0;
    while(i<arrNum.length){
        if(i===4){
            break;
        }
        console.log({i});
        i++;
     }
}



//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
//let fruits= ['apple','plum','banana','strawberries','kiwi']
let fruits= ['apple','plum','banana','strawberries','kiwi']
arr(fruits)
function arr(fruits){
    for(i =0;i<fruits.length;i++){
        if(i===2){
            continue;
        }
        console.log({"continue":i});
     }
}



