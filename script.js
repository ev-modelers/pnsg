// Update displayed values next to sliders
document.getElementById('risk-low').addEventListener('input', function () {
    document.getElementById('risk-low-value').innerText = this.value;
});

document.getElementById('risk-mid').addEventListener('input', function () {
    document.getElementById('risk-mid-value').innerText = this.value;
});

document.getElementById('risk-high').addEventListener('input', function () {
    document.getElementById('risk-high-value').innerText = this.value;
});

document.getElementById('hotspot-threshold').addEventListener('input', function () {
    document.getElementById('hotspot-threshold-value').innerText = `${this.value}%`;
});

document.getElementById('date-start').addEventListener('input', function () {
    const monthYear = new Date(2023, this.value - 4).toLocaleString('default', { month: 'long', year: 'numeric' });
    document.getElementById('date-start-value').innerText = monthYear;
});

document.getElementById('date-end').addEventListener('input', function () {
    const monthYear = new Date(2023, this.value - 4).toLocaleString('default', { month: 'long', year: 'numeric' });
    document.getElementById('date-end-value').innerText = monthYear;
});

// Show or hide vector options based on transmission mode selection
document.getElementById('transmission-select').addEventListener('change', function () {
    const vectorOptions = document.getElementById('vector-options');
    if (this.value === 'vector-borne') {
        vectorOptions.style.display = 'block';
    } else {
        vectorOptions.style.display = 'none';
    }
});

// Show or hide vector options based on transmission mode selection
document.getElementById('transmission-select').addEventListener('change', function () {
    const vectorOptions = document.getElementById('vector-options');
    if (this.value === 'vector-borne') {
        vectorOptions.style.display = 'block';
    } else {
        vectorOptions.style.display = 'none';
    }
});

// Open file upload dialog when "Upload Custom Vector Distribution" is selected
document.getElementById('custom-vector').addEventListener('change', function () {
    if (this.checked) {
        document.getElementById('file-upload').click();
    }
});

// Open file upload dialog when "Upload your surveillance data" button is clicked
document.getElementById('upload-surveillance-btn').addEventListener('click', function () {
    document.getElementById('surveillance-file-upload').click();
});
