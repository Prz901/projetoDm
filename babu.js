arr = [1,2,3,4,5,6]

function foreachu(arr, funct){
    const array = []
    for(let i = 0; i < arr.length; i++){
        array.push(funct(arr[i]))
    }
    return array
}
console.log(foreachu(arr, e => e * 2))

// arr.forEach(element => {
//     console.log(element)
// });