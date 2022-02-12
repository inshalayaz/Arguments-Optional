function addTogether() {
  let args = [...arguments];
  // console.log(typeof [2] === 'number')
  if(args.length === 2 && args.every(i => typeof i === 'number')){ 
      return args[0] + args[1]
  }else if(args.length === 1 && typeof args[0] === "number"){
    return function(num){
      if(typeof num === "number"){
        return args[0] + num
      }
    }
  }else{
    return undefined
  }
  // return false;
}

addTogether(23, 30) // Will Return 53

addTogether(5)(7) // Will Return 12

addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") // Will Return Undefined
