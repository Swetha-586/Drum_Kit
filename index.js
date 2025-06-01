
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function (){
    var buttonInnerHtml=this.innerHTML;
    makeSound(buttonInnerHtml);
    animation(buttonInnerHtml);
    

});
}
document.addEventListener("keydown",function(event) {
    makeSound(event.key);
    animation(event.key);
});
function makeSound(key){
    switch(key){
        case "s":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "w":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "e":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "t":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "h":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        default: alert("Enter valid key");
            
    }

}
function animation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}
/*let button=document.querySelectorAll(".drum").length;
let btn=document.querySelectorAll(".drum");
for(let i=0;i<button;i++){
btn[i].addEventListener("click", function() {
    let audio= new Audio(`./sounds/tom-${i+1}.mp3`);
    audio.play();
});
}*/