function berechneTage() {
    const dateInput = document.getElementById('dateInput');
    const yearsInput = document.getElementById('yearsInput');
    const numberDiv = document.querySelector('.number');

    if (!dateInput.value || !yearsInput.value) {
        numberDiv.textContent = '-';
        return;
    }

    const startDate = new Date(dateInput.value);
    if (isNaN(startDate.getTime())) {
        numberDiv.textContent = 'Ungültiges Datum';
        return;
    }

    const years = parseFloat(yearsInput.value);
    if (isNaN(years)) {
        numberDiv.textContent = 'Ungültige Jahre';
        return;
    }

    const msPerYear = 365.25 * 24 * 60 * 60 * 1000;
    const targetDate = new Date(startDate.getTime() + years * msPerYear);

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);

    const diffTime = targetDate - today;
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

    numberDiv.textContent = diffDays;
}

document.addEventListener('DOMContentLoaded', () => {
    berechneTage();
    document.getElementById('dateInput').addEventListener('input', berechneTage);
    document.getElementById('yearsInput').addEventListener('input', berechneTage);
});