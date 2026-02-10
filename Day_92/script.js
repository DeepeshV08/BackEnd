
const mouseFollower = document.querySelector('.mouse-follower');

let x = 0 , y = 0;

addEventListener('mousemove',(e)=>{
    const {clientX , clientY} = e;
    // mouseFollower.style.top = clientY +'px';
    // mouseFollower.style.left = clientX + 'px';

    x = clientX;
    y = clientY;
    // console.log(clientX,clientY);
    

})

function far(){
    requestAnimationFrame();
    mouseFollower.style.transform = `translate(${x}px , ${y}px)`;
}