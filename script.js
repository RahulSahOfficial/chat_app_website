animate = document.querySelectorAll(".animate");
submit=document.querySelector(".submit");
text=document.querySelector(".sendbox input");
chatbox=document.querySelector(".chatbox");
submit.addEventListener("click",sendmessage)
text.addEventListener("keyup",function(e){
    console.log(e)
    if (e.key === 'Enter' || e.keyCode === 13)
    sendmessage()
})
start_animation();

function start_animation() {
  for (let i = 0; i < animate.length; i++) {
    setTimeout(function () {
      animate[i].classList.add("animated");
    }, 300 * i + 300);
  }
}
function sendmessage()
{
    data=text.value.trim()
    if(data!="")
        chatbox.innerHTML+='<div class="eachmessage sent animated"><p>'+data+'</p></div>'
    text.value=""
    chatbox.scrollTop=chatbox.scrollHeight
}