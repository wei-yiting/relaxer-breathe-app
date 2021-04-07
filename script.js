const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 10000;
const breatheTime = totalTime/10*4.5;
const holdTime = totalTime/10/2;

function breatheAnimation(){
    text.innerText = "Hold";

    setTimeout(() => {
        text.innerText = 'Breathe In';
        container.classList.remove('shrink');
        container.classList.add('grow');

        setTimeout(() => {
            text.innerText = "Breathe Out!";
            container.classList.remove('grow');
            container.classList.add('shrink');
            
            setTimeout(() => {
                text.innerText = "Hold";
            },breatheTime)
        }, breatheTime)
    }, holdTime);

}
breatheAnimation();
setInterval(breatheAnimation, totalTime);