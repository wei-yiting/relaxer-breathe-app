const container = document.getElementById('container');
const text = document.getElementById('text');
const circle = document.getElementById('circle');

const totalTime = 10000;
const breatheInTime = totalTime/10*4;
const breatheOutTime = totalTime/10*5
const holdTime = totalTime/10/2;

function breatheAnimation(){
    text.innerText = "Hold...";

    setTimeout(() => {
        text.innerText = 'Breathe In!';
        container.classList.remove('shrink');
        container.classList.add('grow');
        circle.classList.add('in');

        setTimeout(() => {
            text.innerText = "Breathe Out!";
            container.classList.remove('grow');
            container.classList.add('shrink');
            circle.classList.remove('in');
            circle.classList.add('out');

            setTimeout(() => {
                text.innerText = "Hold...";
                circle.classList.remove('out');

                setTimeout(() => {
                    
                },holdTime)

            },breatheOutTime)
        }, breatheInTime)
    }, holdTime);

}
breatheAnimation();
setInterval(breatheAnimation, totalTime);