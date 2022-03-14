var search = document.getElementById("search")

 window.addEventListener('load',function(){
      var btn =  document.getElementById('btn')
      btn.addEventListener('click',getFood)
     
  })


  function getFood(){
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+search.value)
    .then(response => response.json())
    .then(data =>  {
      
      var data = data.meals
      var  result = document.getElementById("result")
      result.innerHTML = ""

      for(var i=0; i<data.length;i++){
        var img = document.createElement('img')
         img.setAttribute('src',data[i].strMealThumb)
         result.append(img) ;
   
     }
    })
  }

  