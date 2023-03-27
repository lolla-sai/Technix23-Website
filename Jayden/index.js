let eventSlider = document.getElementById('event_slider');
eventSlider.addEventListener("scroll", onScrollEvent);

// Moves the Circle when the event slider is scrolled
function onScrollEvent(event) {
    event.preventDefault()
    let eventSliderMax = eventSlider.scrollWidth - eventSlider.clientWidth;
    let rightEdge = slider.offsetWidth - circle.offsetWidth;
    let newLeft = eventSlider.scrollLeft * (rightEdge / eventSliderMax);
    circle.style.left = newLeft + 'px';
}

// Portfolio Silder
let circle = slider.querySelector('#circle');

circle.onmousedown = function(event) {
    event.preventDefault();

    let shiftX = event.clientX - circle.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    
    function onMouseMove(event) {
        eventSlider.removeEventListener("scroll", onScrollEvent);
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

        if (newLeft < 0) {
            newLeft = 0;
        }
        let rightEdge = slider.offsetWidth - circle.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }

        circle.style.left = newLeft + 'px';

        let eventSliderMax = eventSlider.scrollWidth - eventSlider.clientWidth;
        eventSlider.scrollLeft = newLeft * (eventSliderMax / rightEdge);
    }

    function addListener() {
        eventSlider.addEventListener("scroll", onScrollEvent);
    }

    function onMouseUp() {
        setTimeout(addListener, 2000)
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }
};

circle.ondragstart = function() {
    return false;
};