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