var search = document.getElementById("search")
 //var submit = document.getElementById("submit")
 var  random = document.getElementById("random")
 var  mealsEl = document.getElementById("meals")
 var  meal = document.getElementById("meal");

 window.addEventListener('load',function(){
      var btn =  document.getElementById('btn')
      btn.addEventListener('click',getFood)
     
  })

  function getFood() {
    var xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open('GET','https://www.themealdb.com/api/json/v1/1/search.php?s='+search.value)
    xhr.send()
    xhr.onload = function(){

        var response = JSON.parse(this.response).meals
        console.log(response);
        var  result = document.getElementById("result")
        result.innerHTML = ""

        for(var i=0; i<response.length;i++){
           var img = document.createElement('img')
            img.setAttribute('src',response[i].strMealThumb)
            result.append(img) 
      
        }
       
    }
  }

  