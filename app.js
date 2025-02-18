document.addEventListener("DOMContentLoaded", function() {
    const plans = [
        // Semaine 1
        [
            { date: "10/02", jour: "Lundi", seance: "Musculation + 30' récup (Z1)" },
            { date: "11/02", jour: "Mardi", seance: "Fractionné court : 10x300m à 90% VMA (récup 45s)" },
            { date: "12/02", jour: "Jeudi", seance: "Fractionné long : 3x2000m à allure semi" },
            { date: "13/02", jour: "Samedi", seance: "Sortie longue 24-28 km" },
            { date: "14/02", jour: "Dimanche", seance: "Footing récup 12 km" }
        ],
        // Semaine 2
        [
            { date: "17/02", jour: "Lundi", seance: "Musculation + 30' récup (Z1)" },
            { date: "18/02", jour: "Mardi", seance: "Fractionné court : 8x400m à 90% VMA (récup 1min)" },
            { date: "19/02", jour: "Jeudi", seance: "Fractionné long : 4x1500m à allure semi" },
            { date: "20/02", jour: "Samedi", seance: "Sortie longue 26-30 km" },
            { date: "21/02", jour: "Dimanche", seance: "Footing récup 10 km" }
        ],
        // Semaine 3
        [
            { date: "24/02", jour: "Lundi", seance: "Musculation + 30' récup (Z1)" },
            { date: "25/02", jour: "Mardi", seance: "Fractionné court : 10x400m à 90% VMA (récup 1min)" },
            { date: "26/02", jour: "Jeudi", seance: "Fractionné long : 3x3000m à allure marathon" },
            { date: "27/02", jour: "Samedi", seance: "Sortie longue 28-30 km" },
            { date: "28/02", jour: "Dimanche", seance: "Footing récup 12 km" }
        ],
        // Ajouter toutes les autres semaines jusqu'au marathon...
        // Semaine X (Marathon)
        [
            { date: "10/04", jour: "Lundi", seance: "Repos + étirements" },
            { date: "11/04", jour: "Mardi", seance: "Footing 6 km (Z1)" },
            { date: "12/04", jour: "Jeudi", seance: "Footing 5 km + 4x100m accélérations" },
            { date: "13/04", jour: "Samedi", seance: "Repos total" },
            { date: "14/04", jour: "Dimanche", seance: "Jour du marathon ! Bonne chance ! 🎉" }
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
