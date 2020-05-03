// challenge 
function ageInDays(){
     birthyear = prompt("Enter the year you are born??My Dear freind")

    
     var days,result,birthyear,result1,Answer;
console.log(birthyear);
     days = (2020-birthyear)*365  
   result = document.createElement('h1')        
    Answer = document.createTextNode(`You are ${days} days old`)
result.appendChild(Answer)
     result1=document.getElementById('flexbox12')
    result1.appendChild(result)   
}
function remove(){
    var elemt=document.querySelector('h1')
    elemt.remove();
    //elemt.style.display = 'none';
}

function generateCat() {
    var image =document.createElement("img")
    var div = document.getElementById("flexcat")
    image.src="https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image)

}