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
    const toggleWrapper = document.getElementById('toggleWrapper');
    const toggleButton = document.getElementById('toggleButton');

    // Toggle-Zustand aus localStorage laden
    const isCollapsed = localStorage.getItem('inputsCollapsed') === 'true';
    if (isCollapsed) {
        toggleWrapper.classList.add('collapsed');
        toggleButton.textContent = '▶';
    } else {
        toggleWrapper.classList.remove('collapsed');
        toggleButton.textContent = '◀';
    }

    // Toggle-Button Klick-Handler
    toggleButton.addEventListener('click', () => {
        toggleWrapper.classList.toggle('collapsed');
        const collapsed = toggleWrapper.classList.contains('collapsed');
        toggleButton.textContent = collapsed ? '▶' : '◀';
        localStorage.setItem('inputsCollapsed', collapsed);
    });

    // Werte aus localStorage laden, falls vorhanden, sonst aus config.js
    const config = window.appConfig || {};
    const savedDate = localStorage.getItem('dateInput');
    const savedYears = localStorage.getItem('yearsInput');

    if (savedDate) {
        document.getElementById('dateInput').value = savedDate;
    } else if (config.defaultDate) {
        document.getElementById('dateInput').value = config.defaultDate;
    }

    if (savedYears !== null) {
        document.getElementById('yearsInput').value = savedYears;
    } else if (config.defaultYears) {
        document.getElementById('yearsInput').value = config.defaultYears;
    }

    // Beim Schließen speichern
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('dateInput', document.getElementById('dateInput').value);
        localStorage.setItem('yearsInput', document.getElementById('yearsInput').value);
    });

    berechneTage();
    document.getElementById('dateInput').addEventListener('input', berechneTage);
    document.getElementById('yearsInput').addEventListener('input', berechneTage);
});