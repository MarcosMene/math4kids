const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const audio = document.getElementById("myAudio");
var answer = 0;
var led =0;
var totalanswer;
var totalclicks = 0;
var ledanswers = document.getElementsByClassName('led-green');
let rightAnswer = 0;
let wrongAnswer = 0;

function generate_equation(){
do {
  var num1 = Math.round(Math.floor(Math.random()*15+1));
    var num2 = Math.round(Math.floor(Math.random()*10+1));

    if (num1 < num2) {
        num1 = num1 + num2;
    }

    var dummyAnswer1 = Math.round(Math.floor(Math.random()*12)+1);
    var dummyAnswer2 = Math.round(Math.floor(Math.random()*12)+1);
  
    
   
    var allAnswers = [];
    var switchAnswers = [];

    answer = num1 / num2;
}while (parseInt(answer) != parseFloat(answer));



    if (dummyAnswer1 === answer || dummyAnswer2 === answer || dummyAnswer1 === dummyAnswer2) {
        dummyAnswer1 = Math.floor(answer + 1);
        dummyAnswer2 = Math.floor(answer +3);
    }

  
 


    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    // shuffle answers 

    allAnswers = [answer, dummyAnswer1, dummyAnswer2];

    for (i = allAnswers.length;i--;) {
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i+1)),1)[0]);
    }

    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];


}


option1.addEventListener("click", function() {
    if (option1.innerHTML == answer) {
         if (totalclicks === 10) {
     
            $('#placar').show();
            document.getElementById("result").innerHTML = rightAnswer;
            document.getElementById("option1").disabled = true;
            document.getElementById("option2").disabled = true;
            document.getElementById("option3").disabled = true;
            
            return;
        }else {
             totalanswer = ledanswers[led];
        totalanswer = ledanswers[led].className = "led-green-light";
      
            totalclicks = totalclicks +1;
            rightAnswer = rightAnswer +1;
            
        if (totalclicks ===10){
            setTimeout(function(){  
                  $('#placar').show();
        document.getElementById("result").innerHTML = rightAnswer;
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
            return; }, 200);
        
        }
          generate_equation();  
        }
       
    
    }
    else {
        if (totalclicks ===10){
       
            $('#placar').show();
        document.getElementById("result").innerHTML = rightAnswer;
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
            
            return;
        }else {
            totalanswer = ledanswers[led];
        totalanswer = ledanswers[led].className = "led-red";
      
        totalclicks = totalclicks +1;
        wrongAnswer = wrongAnswer +1;
        
        if (totalclicks ===10){
            setTimeout(function(){  
                  $('#placar').show();
        document.getElementById("result").innerHTML = rightAnswer;
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
            return; }, 200);
        
        }

        audio.play();  
        }
      
       
    }
});
option2.addEventListener("click", function() {
    
if (option2.innerHTML == answer) {
        if (totalclicks === 10) {
         
            $('#placar').show();
            document.getElementById("result").innerHTML = rightAnswer;
            document.getElementById("option1").disabled = true;
            document.getElementById("option2").disabled = true;
            document.getElementById("option3").disabled = true; 
            return;
        }else {
            totalclicks = totalclicks +1;
            totalanswer = ledanswers[led];
        totalanswer = ledanswers[led].className = "led-green-light";
     
        rightAnswer = rightAnswer +1;
        
        if (totalclicks ===10){
            setTimeout(function(){  
                  $('#placar').show();
        document.getElementById("result").innerHTML = rightAnswer;
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
            return; }, 200);
        
        }
          generate_equation();  
        }

    }
    else {  
        if (totalclicks ===10){
           
            $('#placar').show();
        document.getElementById("result").innerHTML = rightAnswer;
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true; 
            return;
        }else {
         totalanswer = ledanswers[led];
        totalanswer = ledanswers[led].className = "led-red";

        totalclicks = totalclicks +1;
        wrongAnswer = wrongAnswer +1;
        
        if (totalclicks ===10){
            setTimeout(function(){  
                  $('#placar').show();
        document.getElementById("result").innerHTML = rightAnswer;
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
            return; }, 200);
        
        }
        audio.play();   
        }
    }
});
option3.addEventListener("click", function() {
    if (option3.innerHTML == answer) {
 if (totalclicks === 10) {
    

    $('#placar').show();
    
    document.getElementById("result").innerHTML = rightAnswer;
    document.getElementById("option1").disabled = true;
    document.getElementById("option2").disabled = true;
    document.getElementById("option3").disabled = true;       
            return;
        }else {
             totalanswer = ledanswers[led];
        totalanswer = ledanswers[led].className = "led-green-light";
        
            totalclicks = totalclicks +1;
            rightAnswer = rightAnswer +1;
            
        if (totalclicks ===10){
            setTimeout(function(){  
                  $('#placar').show();
        document.getElementById("result").innerHTML = rightAnswer;
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
            return; }, 200);
        
        }

          generate_equation();  
        } 
    }
    else {
        if (totalclicks ===10){
          
            $('#placar').show();
        document.getElementById("result").innerHTML = rightAnswer;
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
            return;
        }else {
         totalanswer = ledanswers[led];

        totalanswer = ledanswers[led].className = "led-red";
     
        totalclicks = totalclicks +1;
        wrongAnswer = wrongAnswer +1;
        
        if (totalclicks ===10){
            setTimeout(function(){  
                  $('#placar').show();
        document.getElementById("result").innerHTML = rightAnswer;
        document.getElementById("option1").disabled = true;
        document.getElementById("option2").disabled = true;
        document.getElementById("option3").disabled = true;
            return; }, 200);
        
        }
        audio.play();   
        }
         
        
      
    }
});

// play generate function 

generate_equation();

// RESTART FUNCTION 
function restart() {
    answer = 0;
    led =0;
   
    totalclicks = 0;

   
    var botoesverdes = $( "#1,#2,#3,#4,#5,#6,#7,#8,#9,#10" ).hasClass( "led-green-light" );
    if (botoesverdes == true) {
        	
        $("#1,#2,#3,#4,#5,#6,#7,#8,#9,#10").removeClass( "led-green-light" )
        $("#1,#2,#3,#4,#5,#6,#7,#8,#9,#10").attr('class', 'led-green');
       
    }
    var botoesvermelhos = $( "#1,#2,#3,#4,#5,#6,#7,#8,#9,#10" ).hasClass( "led-red" );
    if (botoesvermelhos == true) {
        	
        $("#1,#2,#3,#4,#5,#6,#7,#8,#9,#10").removeClass( "led-red" )
        $("#1,#2,#3,#4,#5,#6,#7,#8,#9,#10").attr('class', 'led-green');
    }

    rightAnswer = 0;
    wrongAnswer = 0;

    document.getElementById("option1").disabled = false;
    document.getElementById("option2").disabled = false;
    document.getElementById("option3").disabled = false;

    $("#placar").hide();
    generate_equation();
}


function stopjogo(){
    window.open("index.html",'_self');
}
