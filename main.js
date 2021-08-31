var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// slide
function handleOnInput(el, maxlength) {
    if(el.value.length > maxlength)  {
      el.value 
        = el.value.substr(0, maxlength);
    }
  }
//   number box 숫자 제한
function slider(range,value){
var slider = document.getElementById(range);
var output = document.getElementById(value);
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
 }
}
// input range 실시간 출력




function resultBMI() {
  let inputKey = document.getElementById("myRange2").value;
  
  let inputWeight = document.getElementById("myRange3").value;
  let bmi = inputWeight / (inputKey * inputKey / 100);
  let bmiTwoDecimal = Math.round(bmi* 100) 
  document.getElementById("bmiResult").innerHTML = bmiTwoDecimal;
  
}
// bmi 계산
function inputkey() {

  let getKey = document.getElementById("myRange2").value;
  let Weight = (getKey - 100) * 0.9;
  let getSelect = document.getElementById('workoutSelect');
  let getLevel = getSelect.options[getSelect.selectedIndex].value;
  let calories = Weight * getLevel;
  document.getElementById('caloriesResult').innerHTML = Weight;
  document.getElementById('standardWeight').innerHTML = calories;
  
  
}
inputkey();

// 표준체중 구하기
function activityLevel(e) {
  
 let value = e.value;
 console.log(value);
}

// 버튼 클릭하면 체질량지수 나오도록