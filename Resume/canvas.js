var languages = [
    { name: "C/C++", proficiency: 90 },
    { name: "Java", proficiency: 80 },
    { name: "Python", proficiency: 85 },
    { name: "JavaScript", proficiency: 75 },
    { name: "HTML/CSS", proficiency: 85 }
];

var canvas = document.getElementById('skillsChart');
var ctx = canvas.getContext('2d');

var chartWidth = canvas.width - 100;
var chartHeight = canvas.height - 100;
var barSpacing = 60;
var barWidth = 40;
var startX = 50;
var startY = 50;
var gridRowCount = 5;

function drawBar(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function drawGrid() {
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 0.5;

    for (var i = 0; i < gridRowCount; i++) {
        var yPos = chartHeight - (i * (chartHeight / (gridRowCount - 1))) + startY;
        ctx.beginPath();
        ctx.moveTo(startX, yPos);
        ctx.lineTo(startX + chartWidth, yPos);
        ctx.stroke();
    }
}

function drawChart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    var currentX = startX;
    languages.forEach(function(language) {
        var barHeight = language.proficiency / 100 * chartHeight;
        drawBar(currentX, chartHeight - barHeight + startY, barWidth, barHeight, '#2D179F');

        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.fillText(language.name, currentX + barWidth / 2, chartHeight + startY + 20);
        ctx.fillText(language.proficiency + '%', currentX + barWidth / 2, chartHeight - barHeight + startY - 10);
        currentX += barSpacing;
    });

    ctx.fillStyle = '#000000';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Programming Language Proficiency', canvas.width / 2, startY - 20);
}

drawChart();