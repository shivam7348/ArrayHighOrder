const arr = [ 1, 2, 3, 4 , 5]

 for (const num of arr) { // iterator is like  varaiable which is  val =i
    // console.log( num)
    
 }

 const greetings = " Hello World!"
 for (const greet of greetings) {
    // console.log(`Each CHar is ${greet}`)

 }
 // MAps  how to set the value

 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "United States f America" )
 map.set( 'Fr', "FRansico")
 map.set('IN', "India")


console.log(map);
 for (const [key, value] of map) {
    console.log(key, ':-', value);
    
 }