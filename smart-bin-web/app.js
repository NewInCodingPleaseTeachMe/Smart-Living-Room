// Listen for real-time updates
database.ref('bin_status/current').on('value', (snapshot) => {
    console.log('Received data:', snapshot.val());
    const data = snapshot.val();
    if (data) {
        // Update status values
        document.getElementById('fillLevel').textContent = `${data.fill_percentage}%`;
        document.getElementById('proximity').textContent = `${data.proximity_distance}cm`;
        document.getElementById('lidStatus').textContent = data.lid_status;
        document.getElementById('lastUpdate').textContent = data.timestamp;
        
        // Update chart
        updateChart(data.timestamp, data.fill_percentage);
        
        // Show warning if bin is almost full
        document.getElementById('warning').style.display = 
            data.fill_percentage > 80 ? 'block' : 'none';

        // Update lid status color
        const lidStatus = document.getElementById('lidStatus');
        lidStatus.style.color = data.lid_status === 'OPEN' ? '#4CAF50' : '#2196F3';
    }
});

// Monitor connection status
database.ref('.info/connected').on('value', (snap) => {
    const status = snap.val() ? 'Connected' : 'Disconnected';
    console.log('Firebase connection status:', status);
});

// Handle errors
database.ref('bin_status/current').on('error', (error) => {
    console.error('Database error:', error);
});