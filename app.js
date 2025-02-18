document.addEventListener("DOMContentLoaded", function() {
    const plans = [
        [
            { date: "10/02", jour: "Lundi", type: "Endurance", echauffement: "10' footing", entrainement: "Musculation", recup: "30' récup (Z1)" },
            { date: "11/02", jour: "Mardi", type: "Fractionné court", echauffement: "15' footing", entrainement: "10x300m à 90% VMA (récup 45s)", recup: "10' étirements" },
            { date: "12/02", jour: "Jeudi", type: "Fractionné long", echauffement: "20' footing", entrainement: "3x2000m à allure semi", recup: "10' récup" },
            { date: "13/02", jour: "Samedi", type: "Sortie longue", echauffement: "15' footing", entrainement: "Sortie longue 24-28 km", recup: "Hydratation" },
            { date: "14/02", jour: "Dimanche", type: "Récupération", echauffement: "10' footing", entrainement: "Footing 12 km", recup: "Étirements complets" }
        ],
        [
            { date: "17/02", jour: "Lundi", type: "Endurance", echauffement: "10' footing", entrainement: "Musculation", recup: "30' récup (Z1)" },
            { date: "18/02", jour: "Mardi", type: "Fractionné court", echauffement: "15' footing", entrainement: "8x400m à 90% VMA (récup 1min)", recup: "10' étirements" },
            { date: "19/02", jour: "Jeudi", type: "Fractionné long", echauffement: "20' footing", entrainement: "4x1500m à allure semi", recup: "10' récup" },
            { date: "20/02", jour: "Samedi", type: "Sortie longue", echauffement: "15' footing", entrainement: "Sortie longue 26-30 km", recup: "Hydratation" },
            { date: "21/02", jour: "Dimanche", type: "Récupération", echauffement: "10' footing", entrainement: "Footing 10 km", recup: "Étirements complets" }
        ]
    ];

    let currentWeek = 0;

    function displayWeek(weekIndex) {
        const tableBody = document.getElementById("training-plan");
        const weekTitle = document.getElementById("week-title");
        tableBody.innerHTML = "";
        weekTitle.textContent = "Semaine " + (weekIndex + 1);

        plans[weekIndex].forEach(session => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${session.date}</td>
                <td>${session.jour}</td>
                <td>${session.type}</td>
                <td>${session.echauffement}</td>
                <td>${session.entrainement}</td>
                <td>${session.recup}</td>
            `;
            tableBody.appendChild(row);
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
