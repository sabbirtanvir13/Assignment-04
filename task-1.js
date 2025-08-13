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

console.log(totalFine("Gorib tai ticket katinai"));
