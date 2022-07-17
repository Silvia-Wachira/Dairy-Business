// var shedA;
// var shedB;
// var shedC;
// var shedC;
function milkProduction(){
   event.preventDefault();
   let milk = [];
   milk[0] = milk["shed1"] = parseInt(document.getElementById("shed1").value);
   milk[1] = milk["shed2"] = parseInt(document.getElementById("shed2").value);
   milk[2] = milk["shed3"] = parseInt(document.getElementById("shed3").value);
   milk[3] = milk["shed4"] = parseInt(document.getElementById("shed4").value);
   let milkTotal = milk.shed1 + milk.shed2 + milk.shed3 + milk.shed4;
   document.getElementById("litres").innerHTML+="<p>Your production in shed A is " + milk.shed1 + "litres per day </p>"
   document.getElementById("litres").innerHTML+="<p>Your production in shed B is " + milk.shed2 + "litres per day </p>"
   document.getElementById("litres").innerHTML+="<p>Your production in shed C is " + milk.shed3 + "litres per day </p>"
   document.getElementById("litres").innerHTML+="<p>Your production in shed D is " + milk.shed4 + "litres per day </p>"
   
   document.getElementById("litres").innerHTML+="<p>Your totalProduction in shed A is " +milkTotal+ "litres per day </p>"


   dailyIncome = milkTotal*45;
   document.getElementById("litres").innerHTML+="<p>Your daily income is " + dailyIncome + "</p>"
   weeklyIncome = dailyIncome*7;
   document.getElementById("litres").innerHTML+="<p>Your weekly income is " + weeklyIncome + "</p>"



   januaryIncome = dailyIncome * 31;
   februaryIncome = dailyIncome * 29;
   marchIncome = dailyIncome * 31;
   aprilIncome = dailyIncome * 30;
   mayIncome = dailyIncome * 31;
   juneIncome = dailyIncome * 30;
   julyIncome = dailyIncome * 31;
   augustIncome = dailyIncome * 31;
   septemberIncome = dailyIncome * 30;
   octoberIncome = dailyIncome * 31;
   novemberIncome = dailyIncome * 30;
   decemberIncome = dailyIncome * 31;

   document.getElementById("litres").innerHTML+="<p>Your income for January is " + januaryIncome + "</p>"
   document.getElementById("litres").innerHTML+="<p>Your income for February is " + februaryIncome + "</p>"
   document.getElementById("litres").innerHTML+="<p>Your income for March is " + marchIncome + "</p>"
   document.getElementById("litres").innerHTML+="<p>Your income for April is " + aprilIncome + "</p>"
   document.getElementById("litres").innerHTML+="<p>Your income for May is " + mayIncome + "</p>"
   document.getElementById("litres").innerHTML+="<p>Your income for June is " + juneIncome + "</p>"
   document.getElementById("litres").innerHTML+="<p>Your income for July is " + julyIncome + "</p>"
   document.getElementById("litres").innerHTML+="<p>Your income for August is " + augustIncome + "</p>"
   document.getElementById("litres").innerHTML+="<p>Your income for September is " + septemberIncome + "</p>"
   document.getElementById("litres").innerHTML+="<p>Your income for October is " + octoberIncome + "</p>"
   document.getElementById("litres").innerHTML+="<p>Your income for November is " + novemberIncome + "</p>"
   document.getElementById("litres").innerHTML+="<p>Your income for December is " + decemberIncome + "</p>"

   leapYearIncome = dailyIncome * 366;
   document.getElementById("litres").innerHTML+="<p>Your income for the year is" + leapYearIncome + "</p>"
    

   newDailyIncome = milkTotal * 49.60;
   newJanuaryIncome = newDailyIncome * 31;
   newFebruaryIncome = newDailyIncome * 29;
   newMarchIncome = newDailyIncome * 31;
   newAprilIncome = newDailyIncome * 30;
   newMayIncome = newDailyIncome * 31;
   newJuneIncome = newDailyIncome * 30;
   newJulyIncome = newDailyIncome * 31;
   newAugustIncome = newDailyIncome * 31;
   newSeptemberIncome = newDailyIncome * 30;
   newOctoberIncome = newDailyIncome * 31;
   newNovemberIncome = newDailyIncome * 30;
   newDecemberIncome = newDailyIncome * 31;

   differenceInIncome = newDailyIncome - dailyIncome;
   document.getElementById("litres").innerHTML+="<p>Your difference in income is " + Math.round(differenceInIncome) + "</p>"
   newLeapYearIncome = newDailyIncome * 366;

   differenceJanuary = newJanuaryIncome - januaryIncome;
   differenceFebruary = newFebruaryIncome - februaryIncome;
   differenceMarch = newMarchIncome - marchIncome;
   differenceApril = newAprilIncome - aprilIncome;
   differenceMay = newMayIncome - mayIncome;
   differenceJune = newJuneIncome - juneIncome;
   differenceJuly = newJulyIncome - julyIncome;
   differenceAugust = newAugustIncome - augustIncome;
   differenceSeptember = newSeptemberIncome - septemberIncome;
   differenceOctober = newOctoberIncome - octoberIncome;
   differenceNovember = newNovemberIncome - novemberIncome;
   differenceDecember = newDecemberIncome - decemberIncome;




   document.getElementById("litres").innerHTML+="<p>When price was ksh.45 your income was " + januaryIncome + "and When price was 49.60 your income was " + Math.round(newJanuaryIncome) + "the difference is " + Math.round(differenceJanuary) + "</p>"
   document.getElementById("litres").innerHTML+="<p>When price was ksh.45 your income was " + februaryIncome + "and When price was 49.60 your income was " + Math.round(newFebruaryIncome) + "the difference is " + Math.round(differenceFebruary) + "</p>"
   document.getElementById("litres").innerHTML+="<p>When price was ksh.45 your income was " + marchIncome + "and When price was 49.60 your income was " + Math.round(newMarchIncome) + "the difference is " + Math.round(differenceMarch) + "</p>"
   document.getElementById("litres").innerHTML+="<p>When price was ksh.45 your income was " + aprilIncome + "and When price was 49.60 your income was " + Math.round(newAprilIncome) + "the difference is " + Math.round(differenceApril) + "</p>"
   document.getElementById("litres").innerHTML+="<p>When price was ksh.45 your income was " + mayIncome + "and When price was 49.60 your income was " + Math.round(newMayIncome) + "the difference is " + Math.round(differenceMay) + "</p>"
   document.getElementById("litres").innerHTML+="<p>When price was ksh.45 your income was " + juneIncome + "and When price was 49.60 your income was " + Math.round(newJuneIncome) + "the difference is " + Math.round(differenceJune) + "</p>"
   document.getElementById("litres").innerHTML+="<p>When price was ksh.45 your income was " + julyIncome + "and When price was 49.60 your income was " + Math.round(newJulyIncome) + "the difference is " + Math.round(differenceJuly) + "</p>"
   document.getElementById("litres").innerHTML+="<p>When price was ksh.45 your income was " + augustIncome + "and When price was 49.60 your income was " + Math.round(newAugustIncome) + "the difference is " + Math.round(differenceAugust) + "</p>"
   document.getElementById("litres").innerHTML+="<p>When price was ksh.45 your income was " + septemberIncome + "and When price was 49.60 your income was " + Math.round(newSeptemberIncome) + "the difference is " + Math.round(differenceSeptember) + "</p>"
   document.getElementById("litres").innerHTML+="<p>When price was ksh.45 your income was " + octoberIncome + "and When price was 49.60 your income was " + Math.round(newOctoberIncome) + "the difference is " + Math.round(differenceOctober) + "</p>"
   document.getElementById("litres").innerHTML+="<p>When price was ksh.45 your income was " + novemberIncome + "and When price was 49.60 your income was " + Math.round(newNovemberIncome) + "the difference is " + Math.round(differenceNovember) + "</p>"
   document.getElementById("litres").innerHTML+="<p>When price was ksh.45 your income was " + decemberIncome + "and When price was 49.60 your income was " + Math.round(newDecemberIncome) + "the difference is " + Math.round(differenceDecember) + "</p>"






   


}
function clearItems(){
   document.getElementById("litres").remove("innerHTML");
   location.reload();
}























//   
// console.log("Your production in shed A is 510 litres per day");
// console.log("Your production in shed B is 308 litres per day");
// console.log("Your production in shed C is 486 litres per day");
// console.log("Your production in shed D is 572 litres per day");
// console.log("Your total production is " + totalProduction);
// }
// milkProduction();