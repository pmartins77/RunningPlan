
document.addEventListener("DOMContentLoaded", function() {
    const calendar = document.getElementById("calendar");
    const monthYear = document.getElementById("month-year");
    const prevMonthBtn = document.getElementById("prev-month");
    const nextMonthBtn = document.getElementById("next-month");
    const trainingDetails = document.getElementById("training-details");
    const selectedDateSpan = document.getElementById("selected-date");
    const trainingInfo = document.getElementById("training-info");

    let currentDate = new Date();

    function renderCalendar() {
        calendar.innerHTML = "";
        monthYear.textContent = currentDate.toLocaleString('fr-FR', { month: 'long', year: 'numeric' });
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement("div");
            emptyCell.classList.add("empty");
            calendar.appendChild(emptyCell);
        }
        
        for (let day = 1; day <= daysInMonth; day++) {
            const dayCell = document.createElement("div");
            dayCell.classList.add("day");
            dayCell.textContent = day;
            dayCell.addEventListener("click", () => showTrainingDetails(day));
            calendar.appendChild(dayCell);
        }
    }

    function showTrainingDetails(day) {
        selectedDateSpan.textContent = `${day}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
        trainingInfo.textContent = "Séance d'entraînement prévue..."; // Remplacer avec les données dynamiques
        trainingDetails.classList.remove("hidden");
    }

    prevMonthBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});
