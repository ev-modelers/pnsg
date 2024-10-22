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


// Open file upload dialog when "Upload your surveillance data" button is clicked
document.getElementById('upload-surveillance-btn').addEventListener('click', function () {
    document.getElementById('surveillance-file-upload').click();
});



document.getElementById('vector-choice').addEventListener('change', function () {
    const customOptions = document.getElementById('custom-vector-options');
    const defaultOptions = document.getElementById('default-vector-options');
    const temperatureOptions = document.getElementById('temperature-options');

    if (this.value === 'custom') {
        customOptions.style.display = 'block';
        defaultOptions.style.display = 'none';
        temperatureOptions.style.display = 'block';
    } else if (this.value === 'default') {
        customOptions.style.display = 'none';
        defaultOptions.style.display = 'block';
        temperatureOptions.style.display = 'block';
    } else {
        customOptions.style.display = 'none';
        defaultOptions.style.display = 'none';
        temperatureOptions.style.display = 'none';
    }
});

document.getElementById('distribution-type').addEventListener('change', function () {
    const scalingFactorContainer = document.getElementById('scaling-factor-container');
    if (this.value === 'abundance') {
        scalingFactorContainer.style.display = 'block';
    } else {
        scalingFactorContainer.style.display = 'none';
    }
});

document.getElementById('temperature-model').addEventListener('change', function () {
    const temperatureSlider = document.getElementById('temperature-slider');
    const historicalDate = document.getElementById('historical-date');
    const uploadTemperatureRaster = document.getElementById('upload-temperature-raster');

    temperatureSlider.style.display = 'none';
    historicalDate.style.display = 'none';
    uploadTemperatureRaster.style.display = 'none';

    if (this.value === 'slider') {
        temperatureSlider.style.display = 'block';
    } else if (this.value === 'historical') {
        historicalDate.style.display = 'block';
    } else if (this.value === 'upload') {
        uploadTemperatureRaster.style.display = 'block';
    }
});

document.getElementById('temperature-value').addEventListener('input', function () {
    document.getElementById('temperature-value-display').innerText = `${this.value}°C`;
});

// Handle the opening of references
document.getElementById('open-reference').addEventListener('click', function () {
    const referenceSource = document.getElementById('reference-source').value;
    let url = '';

    if (referenceSource === 'global1') {
        url = 'https://www.thelancet.com/journals/lanplh/article/PIIS2542-5196(23)00252-8/fulltext';
    } else if (referenceSource === 'global2') {
        url = 'https://www.nature.com/articles/s41564-019-0376-y';
    } else if (referenceSource === 'france') {
        url = 'https://www.arbocarto.fr/a-propos/partenaires-et-financements';
    }

    if (url) {
        window.open(url, '_blank');
    }
});


// Handle R0 options
document.getElementById('reproduction-ratio-choice').addEventListener('change', function () {
    const presetR0Options = document.getElementById('preset-r0-options');
    const customR0Options = document.getElementById('custom-r0-options');
    
    if (this.value === 'preset') {
        presetR0Options.style.display = 'block';
        customR0Options.style.display = 'none';
    } else if (this.value === 'custom') {
        presetR0Options.style.display = 'none';
        customR0Options.style.display = 'block';
    }
});

// Handle importation risk options
document.getElementById('importation-risk-choice').addEventListener('change', function () {
    const presetImportationOptions = document.getElementById('preset-importation-options');
    const customImportationOptions = document.getElementById('custom-importation-options');
    
    if (this.value === 'preset') {
        //presetImportationOptions.style.display = 'block';
        customImportationOptions.style.display = 'none';
    } else if (this.value === 'custom') {
        presetImportationOptions.style.display = 'none';
        customImportationOptions.style.display = 'block';
    }
});

// Handle custom importation type options
document.getElementById('custom-importation-type').addEventListener('change', function () {
    const relativeRiskUpload = document.getElementById('relative-risk-upload');
    const importationRateUpload = document.getElementById('importation-rate-upload');
    
    relativeRiskUpload.style.display = 'none';
    importationRateUpload.style.display = 'none';
    
    if (this.value === 'relative-risk') {
        relativeRiskUpload.style.display = 'block';
    } else if (this.value === 'importation-rate') {
        importationRateUpload.style.display = 'block';
    }
});

// Handle the opening of R0 references
document.getElementById('open-r0-reference').addEventListener('click', function () {
    const r0Value = document.getElementById('preset-r0').value;
    let url = '';

    if (r0Value === 'mers') {
        url = 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(13)61492-0/fulltexte'; 
    } else if (r0Value === 'flu1') {
        url = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2680121/'; 
    } else if (r0Value === 'flu2') {
        url = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3735127/'; 
    } else if (r0Value === 'covid1') {
        url = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7657547/'; 
    } else if (r0Value === 'covid2') {
        url = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8992231/'; 
    }  else if (r0Value === 'ebola') {
        url = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9507849/'; 
    }

    if (url) {
        window.open(url, '_blank');
    } else {
        alert('No reference available for this selection.');
    }
});


// Function to initialize the state based on default selections
function initializeState() {
    // Generation Time Initialization
    const generationTimeChoice = document.getElementById('generation-time-choice');
    const presetGenerationTimeOptions = document.getElementById('preset-generation-time-options');
    const customGenerationTimeOptions = document.getElementById('custom-generation-time-options');
    const customGenerationTimeType = document.getElementById('custom-generation-time-type');
    const meanSdInput = document.getElementById('mean-sd-input');
    const fullDistributionUpload = document.getElementById('full-distribution-upload');

    // Set initial state for generation time
    if (generationTimeChoice.value === 'preset') {
        presetGenerationTimeOptions.style.display = 'block';
        customGenerationTimeOptions.style.display = 'none';
    } else {
        presetGenerationTimeOptions.style.display = 'none';
        customGenerationTimeOptions.style.display = 'block';
    }

    // Set initial state for custom generation time type
    if (customGenerationTimeType.value === 'mean-sd') {
        meanSdInput.style.display = 'block';
        fullDistributionUpload.style.display = 'none';
    } else {
        meanSdInput.style.display = 'none';
        fullDistributionUpload.style.display = 'block';
    }

    // Infection to Logging Initialization
    const infectionLoggingChoice = document.getElementById('infection-logging-choice');
    const customInfectionLoggingOptions = document.getElementById('custom-infection-logging-options');
    const infectionLoggingType = document.getElementById('infection-logging-type');
    const meanSdLogging = document.getElementById('infection-logging-mean-sd');
    const fullDistributionLogging = document.getElementById('infection-logging-distribution-upload');

    // Set initial state for infection to logging
    if (infectionLoggingChoice.value === 'custom') {
        customInfectionLoggingOptions.style.display = 'block';
    } else {
        customInfectionLoggingOptions.style.display = 'none';
    }

    // Set initial state for custom infection logging type
    if (infectionLoggingType.value === 'mean-sd') {
        meanSdLogging.style.display = 'block';
        fullDistributionLogging.style.display = 'none';
    } else {
        meanSdLogging.style.display = 'none';
        fullDistributionLogging.style.display = 'block';
    }
}

// Call the initializeState function on page load
window.addEventListener('DOMContentLoaded', initializeState);

// Event listeners for generation time options
document.getElementById('generation-time-choice').addEventListener('change', function () {
    const presetOptions = document.getElementById('preset-generation-time-options');
    const customOptions = document.getElementById('custom-generation-time-options');
    
    if (this.value === 'preset') {
        presetOptions.style.display = 'block';
        customOptions.style.display = 'none';
    } else if (this.value === 'custom') {
        presetOptions.style.display = 'none';
        customOptions.style.display = 'block';
    }
});

document.getElementById('custom-generation-time-type').addEventListener('change', function () {
    const meanSdInput = document.getElementById('mean-sd-input');
    const fullDistributionUpload = document.getElementById('full-distribution-upload');

    meanSdInput.style.display = 'none';
    fullDistributionUpload.style.display = 'none';

    if (this.value === 'mean-sd') {
        meanSdInput.style.display = 'block';
    } else if (this.value === 'full-distribution') {
        fullDistributionUpload.style.display = 'block';
    }
});

// Handle the opening of generation time references
document.getElementById('open-generation-time-reference').addEventListener('click', function () {
    const selectedValue = document.getElementById('preset-generation-time').value;
    let url = '';

    if (selectedValue === 'covid-omicron') {
        url = 'https://example.com/covid-omicron-reference'; // Replace with actual reference
    } else if (selectedValue === 'flu') {
        url = 'https://example.com/flu-reference'; // Replace with actual reference
    } else if (selectedValue === 'ebola') {
        url = 'https://example.com/ebola-reference'; // Replace with actual reference
    }

    if (url) {
        window.open(url, '_blank');
    } else {
        alert('No reference available for this selection.');
    }
});

// Event listeners for infection to logging options
document.getElementById('infection-logging-choice').addEventListener('change', function () {
    const customOptions = document.getElementById('custom-infection-logging-options');
    
    if (this.value === 'custom') {
        customOptions.style.display = 'block';
    } else {
        customOptions.style.display = 'none';
    }
});

document.getElementById('infection-logging-type').addEventListener('change', function () {
    const meanSdLogging = document.getElementById('infection-logging-mean-sd');
    const fullDistributionLogging = document.getElementById('infection-logging-distribution-upload');

    meanSdLogging.style.display = 'none';
    fullDistributionLogging.style.display = 'none';

    if (this.value === 'mean-sd') {
        meanSdLogging.style.display = 'block';
    } else if (this.value === 'full-distribution') {
        fullDistributionLogging.style.display = 'block';
    }
});



// Event listener for custom generation time type
document.getElementById('custom-generation-time-type').addEventListener('change', function () {
    const meanSdInput = document.getElementById('mean-sd-input');
    const fullDistributionUpload = document.getElementById('full-distribution-upload');

    meanSdInput.style.display = 'none';
    fullDistributionUpload.style.display = 'none';

    if (this.value === 'mean-sd') {
        meanSdInput.style.display = 'block';
    } else if (this.value === 'full-distribution') {
        fullDistributionUpload.style.display = 'block';
    }
});

// Event listener for "Advanced" button
document.getElementById('advanced-options-btn').addEventListener('click', function () {
    const advancedOptions = document.getElementById('advanced-options');
    // Toggle the display of the advanced options
    if (advancedOptions.style.display === 'none' || advancedOptions.style.display === '') {
        advancedOptions.style.display = 'block';
    } else {
        advancedOptions.style.display = 'none';
    }
});
