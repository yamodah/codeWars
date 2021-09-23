/*function createPhoneNumber(numbers){
    let counter =0
    let message =""

for (let i =0; i < numbers.length; i++){
    switch (counter) {
        case 0:
             message +=`(${number}`  
              counter++;
              break;
         case acc > 2:
             message+=`${number}`
             counter++;
              break;
         case 3:
             message+=`) ${number}`
             counter++;
              break;
        case 5:
             message+=`${number}-`
             counter++;
              break;
                
            default:
                message+=`${number}`
                counter++;
                break;
        }
}
   return numbers.reduce((acc,number)=>{
    switch (acc) {
    case 0:
         message +=`(${number}`  
         return acc++;
     case acc > 2:
         message+=`${number}`
         return acc++;
     case 3:
         message+=`) ${number}`
         return acc++ ;
    case 5:
         message+=`${number}-`
         return acc++ ;
            
        default:
            message+=`${number}`
         return acc++;
    }
   }, counter)
  } 

  ultimatley submitted whats below this commentted out code */

  function createPhoneNumber(numbers){
    let counter =0
    let message =""
   for (let i =0; i < numbers.length; i++){
    switch (counter) {
        case 0:
             message +=`(${numbers[i]}`  
              counter++;
              break;
         case counter > 2:
             message+=`${numbers[i]}`
             counter++;
              break;
         case 3:
             message+=`) ${numbers[i]}`
             counter++;
              break;
        case 5:
             message+=`${numbers[i]}-`
             counter++;
              break;
                
            default:
                message+=`${numbers[i]}`
                counter++;
                break;
        }
}
  return message
  }

  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  /*function validParentheses(parens){
    let leftCount = 0
    let rightCount = 0
    const parArr = parens.split("")
    parArr.forEach(paren => {
        if(paren === "("){
            leftCount++
        }else{
            rightCount++
        }
    });
    if(leftCount===rightCount){
        return false
    } return true;
  }*/
  function validParentheses(parens){
    let leftCount = 0
    let rightCount = 0
    const parArr = parens.split("")
    parArr.forEach(paren => {
        if(paren === "("){
            leftCount++
        }else if(paren === ")"){
            rightCount++
        }
    });
  if(parens.length % 2 !== 0 ){
    return false
  }
  
    if(parens.charAt(0)===")"||parens.charAt(parens.length -1)==="(" ){
      return false
    }
    if(leftCount===rightCount){
        return true
    } return false;
  
  }