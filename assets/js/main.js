
console.log('bai1:')

//  bài 1 :
 
 function checkMark(mark) {
    if(mark >= 85) {
        return 'a';
    }else if (mark >= 70 ) {
        return 'b';
    }else if(mark>=40) {
        return 'c';
    }else {
        return 'd';
    }
}
console.log(checkMark(100));
console.log(checkMark(4));
// --------------------------------
console.log('-------------------------------')
console.log('bai 2:')

// Bài 2 :

function arrNumber(a,b){
    if(a>b) {
        return 'a';
    }else{
        return 'b';
    }
}
console.log(arrNumber(4,5));
console.log(arrNumber(7,1));

console.log('-------------------------');
console.log('bai3 :')
// bai 3: 
function number(a) {
    if(a<0){
        return 'đây là số âm ';
    }else if(a==0){
        return 'Đây là số 0';
    }else{
        return 'Đây là số dương ';
    }
}
console.log(number(5));
console.log(number(-3));
console.log(number(0));


console.log('----------------')
console.log('bai4 :')
// bai 4 
 function checkNumber(a) {
    if(a % 3 ===0 && a % 5 === 0){
        return 'số chia hết cho 3 và 5 ';
    }else{
        return 'số không chia hết cho 3 và 5 ';
    }
 }
 console.log(checkNumber(15));
 console.log(checkNumber(3));

 
console.log('----------------')
console.log('bai5 :')
// bai 5 

function array(a,b,c) {
    if(c=== a + b ) {
        return 'c = a +b ';
    }else{
        return 'không thỏa mãn ';
    }

}

console.log(array(1,2,3));
console.log(array(4,7,3));