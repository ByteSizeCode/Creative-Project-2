$(document).ready(function(){
 
 $('#button').click(function(){
//  $('#txt1').val("Button clicked");
     
     searchValue = document.getElementById('txt1').value
     console.log(); // javascript
     
     
     $.getJSON('https://www.themealdb.com/api/json/v1/1/search.php?s='+searchValue, function(data) {
         
         //Heading Box
         for (i = 0; i <= Object.keys(data.meals.length); i++) {
    
              mealName = data.meals[i].strMeal
             mealType = "Meal Type:\n" + data.meals[i].strCategory
             mealGenre = "Meal Genre:\n" + data.meals[i].strArea
            mealPrepSteps = "Meal Prep Directions:. " + data.meals[i].strInstructions
             link = data.meals[i].strMealThumb
             
             
             //split string into an array using * as delimiter
            var items = mealPrepSteps.split('. ');
            //grab the first item since it's the title, not a soda
            var title = items.shift();
            //create an html string var
            var html = `${title}<ul>`
            //loop over remaining array elements and append to our html
            items.forEach((el) => {
              html += `<li>${el.trim()}</li>`;
            });
            html += '</ul>';
             
       
       var image = document.getElementsByClassName("image")[0].src = link;
       $("h3").text(mealName)
      document.getElementsByClassName("type")[0].firstChild.nodeValue = mealType;
       document.getElementsByClassName("genre")[0].firstChild.nodeValue = mealGenre;
         //display as HTML
         document.getElementById('target').innerHTML = html;
   }
         
         //Sub-heading boxes:
         for(i = 1; i < data.meals.length; i++) {
              mealName = data.meals[i].strMeal
             mealType = "Meal Type:\n" + data.meals[i].strCategory
             mealGenre = "Meal Genre:\n" + data.meals[i].strArea
            mealPrepSteps = "Meal Prep Directions:. " + data.meals[i].strInstructions
             
             
             //split string into an array using * as delimiter
            var items = mealPrepSteps.split('. ');
            //grab the first item since it's the title, not a soda
            var title = items.shift();
            //create an html string var
            var html = `${title}<ul>`
            //loop over remaining array elements and append to our html
            items.forEach((el) => {
              html += `<li>${el.trim()}</li>`;
            });
            html += '</ul>';
             
             
             $('.wp_pres_slug').append("<div class = \"BigBox\"><div><br><img class=\"image\"src=\"" + data.meals[i].strMealThumb + "\" width = 300px, height = 300px><h3>" + mealName +  "</h3><p>" + mealType + "</p><p>" + mealGenre + "</p> <div id=\"target\">" + html + "</div></div></div>");

    }
   
});
     
     
     
 });
    $(".ms-account-wrapper:not(:first)").remove();
});