document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body');
    let bubbles = document.createElement('span');
    let arr = ['1.png', '2.png', '3.png'];
    let x = e.offsetX;
    let y = e.offsetY;
    let rnd = Math.floor(Math.random() * arr.length);
    bubbles.style.backgroundImage = `url(${arr[rnd]})`;
    console.log(bubbles);

    bubbles.style.left = x + 'px';
    bubbles.style.top = y + 'px';

    let size = Math.random() * 100;
    bubbles.style.width = 40 + size + 'px';
    bubbles.style.height = 40 + size + 'px';
    body.appendChild(bubbles);
   

    setTimeout(function() {
        bubbles.remove();
    }, 4000);
});