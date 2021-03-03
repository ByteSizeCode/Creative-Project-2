$(document).ready(function(){

 $('#button').click(function(){
     searchValue = document.getElementById('txt1').value
     console.log(); // javascript

     $.getJSON('https://www.themealdb.com/api/json/v1/1/filter.php?i='+searchValue, function(data) {
         

   //Heading boxes:
   for (i = 0; i <= Object.keys(data.meals.length); i++) {
    mealName = data.meals[i].strMeal
       link = data.meals[i].strMealThumb
       var image = document.getElementsByClassName("image")[0].src = link;
       $("h3").text(mealName)
   }
         
       //Sub-heading boxes:
     for(i = 1; i < data.meals.length; i++) {
        mealName = data.meals[i].strMeal
        $('.wp_pres_slug2').append("<div class = \"BigBox\"><div><br><img class=\"image\"src=\"" + data.meals[i].strMealThumb + "\" width = 300px, height = 300px><h3>" + mealName +  "</h3><p>" + "</div></div></div>");
    } 

     });
 });
});