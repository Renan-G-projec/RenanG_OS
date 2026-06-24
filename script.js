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