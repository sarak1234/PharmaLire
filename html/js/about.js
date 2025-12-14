window.addEventListener('DOMContentLoaded', () => {
    const chartTransparency = new Chart("chartTransparency", {
        type: "pie",
        data: {
            labels: ["Shumë e rëndësishme", "E rëndësishme", "Jo shumë/aspak"],
            datasets: [{
                backgroundColor: ["#3366cc", "#ff9900", "#dc3811"],
                data: [67.4, 27.9, 4.7]
            }]
        },
        options: {
            plugins: {
                legend: { position: 'bottom', onClick: null },
                tooltip: { enabled: true }
            },
            responsive: true,
            maintainAspectRatio: true
        }
    });

    const chartDifficulty = new Chart("chartDifficulty", {
        type: "pie",
        data: {
            labels: ["Po", "Jo"],
            datasets: [{
                backgroundColor: ["#3366cc", "#dc3811"],
                data: [90.7, 9.3]
            }]
        },
        options: {
            plugins: {
                legend: { position: 'bottom', onClick: null },
                tooltip: { enabled: true }
            },
            responsive: true,
            maintainAspectRatio: true
        }
    });
    
 const chartCompare = new Chart("chartCompare", {
        type: "pie",
        data: {
            labels: ["Po", "Ndoshta"],
            datasets: [{
                backgroundColor: ["#3366cc", "#dc3545"],
                data: [87.7, 12.3]
            }]
        },
        options: {
            plugins: {
                legend: { position: 'bottom', onClick: null },
                tooltip: { enabled: true }
            },
            responsive: true,
            maintainAspectRatio: true
        }
    });


    const chartFree = new Chart("chartFree", {
        type: "pie",
        data: {
            labels: ["Po", "Ndoshta", "Jo"],
            datasets: [{
                backgroundColor: ["#3366cc", "#ff9900", "#dc3811"],
                data: [86.2, 10.8, 3.0]
            }]
        },
        options: {
            plugins: {
                legend: { position: 'bottom', onClick: null },
                tooltip: { enabled: true }
            },
            responsive: true,
            maintainAspectRatio: true
        }
    });
});