// Initialize charts when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Monthly Sales Chart
    const salesChartCtx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(salesChartCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Sales ($)',
                data: [9500, 10200, 9800, 8900, 9200, 10500, 11200, 10800, 11500, 12426, 0, 0],
                backgroundColor: 'rgba(45, 140, 255, 0.1)',
                borderColor: '#2D8CFF',
                borderWidth: 2,
                pointBackgroundColor: '#2D8CFF',
                pointBorderColor: '#fff',
                pointRadius: 4,
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#2D3748',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    bodyFont: {
                        size: 13
                    },
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return `$${context.parsed.y.toLocaleString()}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

    // Top Selling Medications Chart
    const medicationsChartCtx = document.getElementById('medicationsChart').getContext('2d');
    const medicationsChart = new Chart(medicationsChartCtx, {
        type: 'bar',
        data: {
            labels: ['Amoxicillin', 'Lisinopril', 'Metformin', 'Atorvastatin', 'Levothyroxine'],
            datasets: [{
                label: 'Units Sold',
                data: [1245, 980, 865, 740, 620],
                backgroundColor: [
                    '#2D8CFF', // Primary blue
                    '#4CAF50', // Secondary green
                    '#FFD166', // Warning yellow
                    '#06D6A0', // Mint green
                    '#118AB2'  // Teal blue
                ],
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#2D3748',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    bodyFont: {
                        size: 13
                    },
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return `${context.parsed.y.toLocaleString()} units`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

    // Add a doughnut chart for patient demographics
    // Create a new section in the HTML for this chart
    const demographicsSection = document.createElement('div');
    demographicsSection.className = 'bg-white rounded-lg shadow p-6 mb-6';
    demographicsSection.innerHTML = `
        <h3 class="text-lg font-semibold text-dark mb-4">Patient Demographics</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="h-64">
                <canvas id="ageChart"></canvas>
            </div>
            <div class="h-64">
                <canvas id="genderChart"></canvas>
            </div>
        </div>
    `;
    
    // Insert the new section after the charts section
    const chartsSection = document.querySelector('.grid.grid-cols-1.lg\\:grid-cols-2.gap-6.mb-6');
    chartsSection.parentNode.insertBefore(demographicsSection, chartsSection.nextSibling);

    // Age Distribution Chart
    const ageChartCtx = document.getElementById('ageChart').getContext('2d');
    const ageChart = new Chart(ageChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['0-18', '19-35', '36-50', '51-65', '65+'],
            datasets: [{
                data: [15, 25, 20, 25, 15],
                backgroundColor: [
                    '#2D8CFF', // Primary blue
                    '#4CAF50', // Secondary green
                    '#FFD166', // Warning yellow
                    '#FF6B6B', // Accent red
                    '#118AB2'  // Teal blue
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        boxWidth: 15,
                        padding: 15,
                        font: {
                            size: 12
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Age Distribution',
                    font: {
                        size: 16
                    },
                    color: '#2D3748',
                    padding: {
                        bottom: 15
                    }
                }
            },
            cutout: '65%'
        }
    });

    // Gender Distribution Chart
    const genderChartCtx = document.getElementById('genderChart').getContext('2d');
    const genderChart = new Chart(genderChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['Female', 'Male', 'Other'],
            datasets: [{
                data: [52, 45, 3],
                backgroundColor: [
                    '#FF6B6B', // Accent red
                    '#2D8CFF', // Primary blue
                    '#4CAF50'  // Secondary green
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        boxWidth: 15,
                        padding: 15,
                        font: {
                            size: 12
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Gender Distribution',
                    font: {
                        size: 16
                    },
                    color: '#2D3748',
                    padding: {
                        bottom: 15
                    }
                }
            },
            cutout: '65%'
        }
    });
});