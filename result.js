function totalFine( fare ) {
  // You have to write your code here

   if (typeof fare !== "number" || fare <= 0){
    return "Invalid";
  }
 const charge= fare * 0.20;
 const surviceCharge=30;
 const total = fare+charge+surviceCharge;
 return total
}

function  onlyCharacter( str ) {
   // You have to write your code here
    if(typeof str !== "string"){
        return "Invalid"
    }
    const result=str.split(' ').join('').toUpperCase();
    return result
}



function  bestTeam( player1, player2 ) {
          // You have to write your code here
    if(typeof player1  !== "object" || typeof player2  !== "object" ){
        return "Invalid";
    }
const team1=player1.foul+player1. cardY+player1. cardR
const team2=player2.foul+player2. cardY+player2. cardR
if(team1<team2){
    return player1.name
}
if(team2<team1){
    return player2.name
}

else {
  return "Tie";
}
}




function  isSame(arr1 , arr2 ) {
          // You have to write your code here


  if (Array.isArray(arr1) === false) {
  return "Invalid";
 }
  if (Array.isArray(arr2) === false) {
  return "Invalid";
 }
      if(arr1.length !== arr2.length){
        return false
      }
      for(let i=0;i<arr1.length;i++){
       if(arr1[i]!==arr2[i]) {
        return false
       }
      }
    return true
}