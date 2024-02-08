function spiral() {
    let canv = document.getElementById('spiral'),
        angle = 1,
        x = 1,
        y = 1,
        context = canv.getContext('2d');
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(150,75);
        for (i=0; i < 720; i++) {
            angle = 0.1 * i;
            x = (1+angle)*Math.cos(angle);
            y = (1+angle)*Math.sin(angle);
            context.lineTo(x + 150, y + 75);
        }
    context.stroke();
}