// Ad Maiorem Dei Gloriam!

const dateLog = document.getElementById("date-log")

function initClock() {
    const getFormatedDate = (date) => {
        return `${date.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        }).replace(',', '')}`
    }

    const updateClock = () => {
        const now = new Date();
        dateLog.innerText = getFormatedDate(now);
    }

    updateClock();

    const clockInterval = setInterval(updateClock, 1000);

    window.onbeforeunload = () => {clearInterval(clockInterval)}
}

initClock();


function dragElement(element) {
    var initialX = 0;
    var initialY = 0;
    var currentX = 0;
    var currentY = 0;
    
    let handler;

    if (handler = document.getElementById(element.id + "-header")) {
        document.getElementById(element.id + "-header").onmousedown = startDragging;
    } else {
        handler = element;
        element.onmousedown = startDragging;
    }
    
    function startDragging(e) {
        e = e || window.event;
        e.preventDefault();
        initialX = e.clientX;
        initialY = e.clientY;

        handler.classList.add("grabbing");
        handler.classList.remove("grab");

        document.onmouseup = stopDragging;
        document.onmousemove = dragElement;
    }
    
    function dragElement(e) {
        e = e || window.event;
        e.preventDefault();
        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;
        initialX = e.clientX;
        initialY = e.clientY;

        // Does not allow the user from tooking the handler above the page and losing it
        if (initialY < 0) currentY = 0;

        element.style.top = (element.offsetTop - currentY) + "px";
        element.style.left = (element.offsetLeft - currentX) + "px";
    }
    
    function stopDragging() {
        handler.classList.add('grab');
        handler.classList.remove('grabbing');
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

dragElement(document.getElementById("window-welcome"));