const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

var eye = document.getElementById('Eye');
var input = document.getElementById('Input');
eye.addEventListener("click", function(){
    if(input.type == "password"){
        input.type = "text"
    }else{
        input.type = "password"
    }
    
})

var x = document.getElementById('tv');
var y = document.getElementById('ini');
x.addEventListener("click", function(){
    if(y.type == "password"){
        y.type = "text"
    }else{
        y.type = "password"
    }
    
})

function validar(){
var nom= document.getElementById('no');
var ema= document.getElementById('em');
    if((nom.value=="")||(ema.value=="")){
        alert("LLene todos los campos");
    }else{
        window.open('index.html');
    }
}
function valu(){
    var emo= document.getElementById('tr2');
        if((emo.value=="")){
            alert("LLene todos los campos");
        }else{
            window.open('index.html');
        }
    }
