document.addEventListener("DOMContentLoaded", function() {
    const plans = [
        [
            { date: "10/02", jour: "Lundi", type: "Base d’endurance", seance: "Musculation + 30' récup (Z1)" },
            { date: "11/02", jour: "Mardi", type: "Base d’endurance", seance: "Fractionné court : 10x300m à 90% VMA (récup 45s)" },
            { date: "12/02", jour: "Jeudi", type: "Base d’endurance", seance: "Fractionné long : 3x2000m à allure semi" },
            { date: "13/02", jour: "Samedi", type: "Base d’endurance", seance: "Sortie longue 24-28 km" },
            { date: "14/02", jour: "Dimanche", type: "Base d’endurance", seance: "Footing récup 12 km" }
        ],
        [
            { date: "17/02", jour: "Lundi", type: "Base d’endurance", seance: "Musculation + 30' récup (Z1)" },
            { date: "18/02", jour: "Mardi", type: "Base d’endurance", seance: "Fractionné court : 8x400m à 90% VMA (récup 1min)" },
            { date: "19/02", jour: "Jeudi", type: "Base d’endurance", seance: "Fractionné long : 4x1500m à allure semi" },
            { date: "20/02", jour: "Samedi", type: "Base d’endurance", seance: "Sortie longue 26-30 km" },
            { date: "21/02", jour: "Dimanche", type: "Base d’endurance", seance: "Footing récup 10 km" }
        ]
    ];

    let currentWeek = 0;

    function displayWeek(weekIndex) {
        const container = document.getElementById("training-plan");
        const weekTitle = document.getElementById("week-title");
        container.innerHTML = "";
        weekTitle.textContent = "Semaine " + (weekIndex + 1);
        
        plans[weekIndex].forEach(session => {
            const div = document.createElement("div");
            div.innerHTML = `<strong>${session.date} - ${session.jour}:</strong> ${session.seance} <br>`;
            container.appendChild(div);
        });
    }

    window.changeWeek = function(direction) {
        const newWeek = currentWeek + direction;
        if (newWeek >= 0 && newWeek < plans.length) {
            currentWeek = newWeek;
            displayWeek(currentWeek);
        }
    };

    displayWeek(currentWeek);
});
