document.addEventListener("DOMContentLoaded", function() {
    const trainingPlan = [
        { date: "10/02", jour: "Lundi", type: "Base d’endurance", seance: "Musculation + 30' récup (Z1)" },
        { date: "11/02", jour: "Mardi", type: "Base d’endurance", seance: "Fractionné court : 10x300m à 90% VMA (récup 45s)" },
        { date: "12/02", jour: "Jeudi", type: "Base d’endurance", seance: "Fractionné long : 3x2000m à allure semi" },
        { date: "13/02", jour: "Samedi", type: "Base d’endurance", seance: "Sortie longue 24-28 km" },
        { date: "14/02", jour: "Dimanche", type: "Base d’endurance", seance: "Footing récup 12 km" }
    ];

    const container = document.getElementById("training-plan");
    trainingPlan.forEach(session => {
        const div = document.createElement("div");
        div.innerHTML = `<strong>${session.date} - ${session.jour}:</strong> ${session.seance} <br>`;
        container.appendChild(div);
    });
});
