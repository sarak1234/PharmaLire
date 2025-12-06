window.addEventListener('DOMContentLoaded', () => {
    // Chart për transparencën e çmimeve
    const chartTransparency = new Chart("chartTransparency", {
        type: "pie",
        data: {
            labels: ["Shumë e rëndësishme", "E rëndësishme", "Jo shumë/aspak"],
            datasets: [{
                backgroundColor: ["#0d6efd", "#17a2b8", "#ffc107"],
                data: [67.4, 27.9, 4.7]
            }]
        },
        options: {
            plugins: {
                legend: { position: 'bottom', onClick: null },
                tooltip: { enabled: false }
            },
            responsive: true,
            maintainAspectRatio: true
        }
    });

    // Chart për vështirësinë në gjetjen e çmimeve
    const chartDifficulty = new Chart("chartDifficulty", {
        type: "pie",
        data: {
            labels: ["Po", "Jo"],
            datasets: [{
                backgroundColor: ["#28a745", "#dc3545"],
                data: [90.7, 9.3]
            }]
        },
        options: {
            plugins: {
                legend: { position: 'bottom', onClick: null },
                tooltip: { enabled: false }
            },
            responsive: true,
            maintainAspectRatio: true
        }
    });
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Faleminderit për mesazhin tuaj! Do t\'iu kontaktojmë së shpejti.');
    this.reset();
});