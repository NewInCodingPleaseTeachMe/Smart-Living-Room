// Initialize Chart
const ctx = document.getElementById('fillChart').getContext('2d');
const fillChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Fill Level (%)',
            data: [],
            borderColor: '#2196F3',
            tension: 0.4,
            fill: true,
            backgroundColor: 'rgba(33, 150, 243, 0.1)'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// Update chart with new data
function updateChart(timestamp, value) {
    const time = timestamp.split(' ')[1] || timestamp;
    fillChart.data.labels.push(time);
    fillChart.data.datasets[0].data.push(value);
    
    if (fillChart.data.labels.length > 10) {
        fillChart.data.labels.shift();
        fillChart.data.datasets[0].data.shift();
    }
    
    fillChart.update();
}