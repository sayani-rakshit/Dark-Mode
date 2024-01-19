var touchswich=document.getElementById('checkbox');
var link=document.getElementsByClassName('link');
var heading=document.getElementById('heading');
var para=document.getElementById('para');
var touchIcon = document.getElementById('toggle-icon');


function darkmode(){
    document.getElementById('btn').style.color="darkviolet";
    document.getElementById('btn1').style.color="darkviolet";
    document.getElementById('btn2').style.color="darkviolet";
    document.getElementById('btn3').style.color="darkviolet";
    document.getElementById('container1').style.backgroundColor="#303030";
    document.getElementById('container2').style.backgroundColor="black";
    heading.style.color="white";
    para.style.color="white";
    touchIcon.children[0].textContent = 'Dark Mode';
    
    touchIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    document.getElementById('body').style.backgroundColor="black";

    // document.createElement='button';
    // document.createElement="Dark Mode";
    // document.getElementById('text').children.textcontent.style.color="white";

    
     
}
function lightmode(){
    document.getElementById('btn').style.color="red";
    document.getElementById('btn1').style.color="red";
    document.getElementById('btn2').style.color="red";
    document.getElementById('btn3').style.color="red";
    document.getElementById('container1').style.backgroundColor="rgb(219,218,218)";
    document.getElementById('container2').style.backgroundColor="rgb(219,218,218)";
    heading.style.color="black";
    para.style.color="black";
    touchIcon.children[0].textContent = 'Light Mode';
  touchIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  document.getElementById('body').style.backgroundColor="rgb(219,218,218)";
     
}


function swichdark(e){
    if(e.target.checked){
        darkmode();
    }else{
        lightmode();
    }
}



















touchswich.addEventListener('click',swichdark);