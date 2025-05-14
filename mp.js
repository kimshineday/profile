window.onload = function() { 
    const targetDate = new Date("2000-01-26");
    const today = new Date();

    const timeDifference = today - targetDate;
    const daysPassed = Math.floor(timeDifference / (1000 * 3600 * 24));

    document.getElementById('result').innerHTML = `${daysPassed}`;
}