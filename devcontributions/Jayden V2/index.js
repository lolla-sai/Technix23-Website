if(window.innerWidth > 450) {
    let eventSlider = document.getElementById('event_slider');
    eventSlider.addEventListener("scroll", onScrollEvent);

    // Moves the skull when the event slider is scrolled
    function onScrollEvent(event) {
        event.preventDefault()
        let eventSliderMax = eventSlider.scrollWidth - eventSlider.clientWidth;
        let rightEdge = slider.offsetWidth - skull.offsetWidth;
        let newLeft = eventSlider.scrollLeft * (rightEdge / eventSliderMax);
        skull.style.left = newLeft + 'px';
        
        if(newLeft == rightEdge) {
            console.log(document.getElementById('slider').offsetWidth)
            inslider.style.width = document.getElementById('slider').offsetWidth + 'px';
        }
        else {
            inslider.style.width = newLeft + 24 + 'px';
        }
    }

    // Bottom Silder
    let skull = document.querySelector('#skull');
    let inslider = document.querySelector('#inslider');

    skull.onmousedown = function(event) {
        event.preventDefault();

        let shiftX = event.clientX - skull.getBoundingClientRect().left;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        
        function onMouseMove(event) {
            eventSlider.removeEventListener("scroll", onScrollEvent);
            let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

            if (newLeft < 0) {
                newLeft = 0;
            }
            let rightEdge = slider.offsetWidth - skull.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }

            skull.style.left = newLeft + 'px';

            if(newLeft == rightEdge) {
                console.log(document.getElementById('slider').offsetWidth)
                inslider.style.width = document.getElementById('slider').offsetWidth + 'px';
            }
            else {
                inslider.style.width = newLeft + 24 + 'px';
            }

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

    skull.ondragstart = function() {
        return false;
    };
}