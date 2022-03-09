var search = document.getElementById("search")

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
        var  result = document.getElementById("result")
        result.innerHTML = ""

        for(var i=0; i<response.length;i++){
           var img = document.createElement('img')
            img.setAttribute('src',response[i].strMealThumb)
            result.append(img) ;
      
        }
       
    }
  }

  