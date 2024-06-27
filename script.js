function calculateDose() {
    const weight = document.getElementById('weight').value;
    const strength = document.querySelector('input[name="strength"]:checked').value;

    const doseMg = weight * 15;
    const doseMg2 = weight * 15;
    let doseMl;
    let doseM2;

    if (strength == 120) {
        doseMl = doseMg / (120 / 5);
    } else if (strength == 250) {
        doseMl = doseMg / (250 / 5);
    }

    if (strength == 120) {
        doseM2 = doseMg2 / (120 / 5);
    } else if (strength == 250) {
        doseM2 = doseMg2 / (250 / 5);
    }

    document.getElementById('doseMl').innerText = `${doseMl.toFixed(2)} mL සෑම පැය 6 වරක්, පැය 24කදී උපරිම වාර 4ක් දක්වා`;
    document.getElementById('doseM2').innerText = `${doseM2.toFixed(2)} mL ஒவ்வொரு 6 மணித்தியாலங்களிற்கு ஒரு முறை, அதிகபட்சம் 24 மணி நேரத்தில் 4 தடவைகள்`;

    document.getElementById('doseMg').innerText = `${doseMg} mg සෑම පැය 6 වරක්, පැය 24කදී උපරිම වාර 4ක් දක්වා`;
    document.getElementById('doseMg2').innerText = `${doseMg2} mg ஒவ்வொரு 6 மணித்தியாலங்களிற்கு ஒரு முறை, அதிகபட்சம் 24 மணி நேரத்தில் 4 தடவைகள்`;
    
}
