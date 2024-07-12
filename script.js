document.addEventListener('DOMContentLoaded', function() {
    const formRadioButtons = document.querySelectorAll('input[name="form"]');
    const liquidFields = document.getElementById('liquidFields');
    const resultMl = document.getElementById('doseMl');
    const resultMl2 = document.getElementById('doseM2');
    const resultMg = document.getElementById('doseMg');
    const resultMg2 = document.getElementById('doseMg2');
    const tabletInfo = document.getElementById('tabletInfo');

    // Function to toggle visibility of liquid fields
    function toggleFields() {
        const selectedForm = document.querySelector('input[name="form"]:checked');
        if (selectedForm && selectedForm.value === 'liquid') {
            liquidFields.style.display = 'block';
            resultMl.parentElement.style.display = 'block';
            resultMg.parentElement.style.display = 'none';
            tabletInfo.style.display = 'none';
        } else if (selectedForm && selectedForm.value === 'tablet') {
            liquidFields.style.display = 'none';
            resultMl.parentElement.style.display = 'none';
            resultMg.parentElement.style.display = 'block';
            tabletInfo.style.display = 'block';
        } else {
            liquidFields.style.display = 'none';
            resultMl.parentElement.style.display = 'none';
            resultMg.parentElement.style.display = 'none';
            tabletInfo.style.display = 'none';
        }
    }

    // Add event listeners to form radio buttons
    formRadioButtons.forEach(function(radio) {
        radio.addEventListener('change', toggleFields);
    });

    // Initial call to set the correct state on page load
    toggleFields();
});

function calculateDose() {
    const weight = parseFloat(document.getElementById('weight').value);
    const form = document.querySelector('input[name="form"]:checked') ? document.querySelector('input[name="form"]:checked').value : null;
    const resultMl = document.getElementById('doseMl');
    const resultMl2 = document.getElementById('doseM2');
    const resultMg = document.getElementById('doseMg');
    const resultMg2 = document.getElementById('doseMg2');

    if (isNaN(weight) || weight <= 0) {
        alert("Please enter a valid weight.");
        return;
    }

    if (form === 'liquid') {
        const strength = parseFloat(document.querySelector('input[name="strength"]:checked').value);
        const doseMg = weight * 15;
        const doseMl = (doseMg / strength) * 5;
        resultMl.textContent = doseMl.toFixed(2) + " ml සෑම පැය 6 වරක්, පැය 24කදී උපරිම වාර 4ක් දක්වා";
        resultMl2.textContent = doseMl.toFixed(2) + " ml ஒவ்வொரு 6 மணித்தியாலங்களிற்கு ஒரு முறை, அதிகபட்சம் 24 மணி நேரத்தில் 4 தடவைகள்";
        resultMg.textContent = "";
        resultMg2.textContent = "";
    } else if (form === 'tablet') {
        const doseMg = weight * 15;
        resultMl.textContent = "";
        resultMl2.textContent = "";
        resultMg.textContent = doseMg.toFixed(2) + " mg  සෑම පැය 6 වරක්, පැය 24කදී උපරිම වාර 4ක් දක්වා";
        resultMg2.textContent = doseMg.toFixed(2) + " mg ஒவ்வொரு 6 மணித்தியாலங்களிற்கு ஒரு முறை, அதிகபட்சம் 24 மணி நேரத்தில் 4 தடவைகள்";
    } else {
        alert("Please select a form.");
    }
    resultMg.style.color="#087f5b";
    resultMg.style.fontWeight="bold";
    resultMg2.style.color="#087f5b";

    resultMl.style.color="#087f5b";
    resultMl.style.fontWeight="bold";
    resultMl2.style.color="#087f5b";
    
}
