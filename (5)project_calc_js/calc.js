var numField1 = document.getElementById('numField1');

//alert(numField1.value);
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');

var form = document.getElementById('xIsWhatPercentOfY');

//when button is clicked then this function is called
form.addEventListener('submit', function(){
   if (!numField1.value || !numField2.value) {
      alert("please enter values");
   }
   else {
      var x = parseFloat(numField1.value);//parseFloat is used to convert string to float value
      var y = parseFloat(numField2.value);
      
      var percent = (x / y) * 100;
      resultField.innerText = "Answer : " + percent + "%";
      event.preventDefault();//used to make the output stay in screen
   }
});