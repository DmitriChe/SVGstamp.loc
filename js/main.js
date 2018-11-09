
SVG.on(document, 'DOMContentLoaded', function() {

    if (SVG.supported) {
        console.log('Скрипт main.js успешно подключен!');

        // initialize SVG.js
        let drawRound = SVG('round');
        let drawTriangle = SVG('triangle');
        let drawSquare = SVG('square');

        // draw figures
        drawRound.circle(100).animate().move(50, 50).fill('#ffa153');
        drawTriangle.polyline([
            100-100/2, 100+100*Math.sqrt(3)/2/2, 100+100/2, 100+100*Math.sqrt(3)/2/2,
            100, 100-100*Math.sqrt(3)/2/2, 100-100/2, 100+100*Math.sqrt(3)/2/2
        ]).animate().move(50, 50).fill('#f06')
            .stroke({ color: '#f06', width: 5, linecap: 'round', linejoin: 'round' });
        drawSquare.rect(100, 100).animate().move(50, 50).fill('#a38bff').radius(0, 0);

        const drawStamps = () => {
            let diameter = document.querySelector('.diameter').value;
            let length = document.querySelector('.length').value;
            let width = document.querySelector('.width').value;
            let height = document.querySelector('.height').value;
            let canvasSize = parseInt(getComputedStyle(document.querySelector('.stamp-container')).width);
            let canvasCenter = Math.ceil(canvasSize / 2);

            drawRound.clear();
            drawSquare.clear();
            drawTriangle.clear();

            drawRound.circle(diameter).move(canvasCenter-diameter/2, canvasCenter-diameter/2).fill('none').stroke({ color: '#ffa153', width: 5, linecap: 'round' });
            drawTriangle.polyline([
                    canvasCenter-length/2, canvasCenter+length*Math.sqrt(3)/2/2, canvasCenter+length/2, canvasCenter+length*Math.sqrt(3)/2/2,
                    canvasCenter, canvasCenter-length*Math.sqrt(3)/2/2, canvasCenter-length/2, canvasCenter+length*Math.sqrt(3)/2/2
                ]).fill('none')
                .stroke({ color: '#f06', width: 5, linecap: 'round', linejoin: 'round' });
            drawSquare.rect(width, height).move(canvasCenter-width/2, canvasCenter-height/2).fill('none').stroke({ color: '#a38bff', width: 5, linecap: 'round' });
        };


        const settingsListener = () => {
            // навешиваем прослушку на каждое изменение в полях ввода
            document.querySelectorAll('input').forEach((value, index) => {
                value.addEventListener('input', drawStamps);
            });
        };

        settingsListener();


    } else {
        alert('SVG not supported');
    }
});