document.addEventListener("DOMContentLoaded", function() {
    const plans = [[{'date': '10/02', 'jour': 'Lundi', 'type': 'Endurance', 'echauffement': "10' footing", 'entrainement': 'Musculation', 'recup': "30' récup (Z1)"}, {'date': '11/02', 'jour': 'Mardi', 'type': 'Fractionné court', 'echauffement': "15' footing", 'entrainement': '10x400m à 90% VMA (récup 1min)', 'recup': "10' étirements"}, {'date': '12/02', 'jour': 'Jeudi', 'type': 'Fractionné long', 'echauffement': "20' footing", 'entrainement': '4x2000m à allure marathon', 'recup': "10' récup"}, {'date': '13/02', 'jour': 'Samedi', 'type': 'Sortie longue', 'echauffement': "15' footing", 'entrainement': 'Sortie longue 28-32 km', 'recup': 'Hydratation'}, {'date': '14/02', 'jour': 'Dimanche', 'type': 'Récupération', 'echauffement': "10' footing", 'entrainement': 'Footing 12 km', 'recup': 'Étirements complets'}], [{'date': '17/02', 'jour': 'Lundi', 'type': 'Endurance', 'echauffement': "10' footing", 'entrainement': 'Musculation', 'recup': "30' récup (Z1)"}, {'date': '18/02', 'jour': 'Mardi', 'type': 'Fractionné court', 'echauffement': "15' footing", 'entrainement': '10x420m à 90% VMA (récup 1min)', 'recup': "10' étirements"}, {'date': '19/02', 'jour': 'Jeudi', 'type': 'Fractionné long', 'echauffement': "20' footing", 'entrainement': '4x2100m à allure marathon', 'recup': "10' récup"}, {'date': '20/02', 'jour': 'Samedi', 'type': 'Sortie longue', 'echauffement': "15' footing", 'entrainement': 'Sortie longue 28-32 km', 'recup': 'Hydratation'}, {'date': '21/02', 'jour': 'Dimanche', 'type': 'Récupération', 'echauffement': "10' footing", 'entrainement': 'Footing 12 km', 'recup': 'Étirements complets'}], [{'date': '24/02', 'jour': 'Lundi', 'type': 'Endurance', 'echauffement': "10' footing", 'entrainement': 'Musculation', 'recup': "30' récup (Z1)"}, {'date': '25/02', 'jour': 'Mardi', 'type': 'Fractionné court', 'echauffement': "15' footing", 'entrainement': '10x440m à 90% VMA (récup 1min)', 'recup': "10' étirements"}, {'date': '26/02', 'jour': 'Jeudi', 'type': 'Fractionné long', 'echauffement': "20' footing", 'entrainement': '4x2200m à allure marathon', 'recup': "10' récup"}, {'date': '27/02', 'jour': 'Samedi', 'type': 'Sortie longue', 'echauffement': "15' footing", 'entrainement': 'Sortie longue 28-32 km', 'recup': 'Hydratation'}, {'date': '28/02', 'jour': 'Dimanche', 'type': 'Récupération', 'echauffement': "10' footing", 'entrainement': 'Footing 12 km', 'recup': 'Étirements complets'}], [{'date': '03/03', 'jour': 'Lundi', 'type': 'Endurance', 'echauffement': "10' footing", 'entrainement': 'Musculation', 'recup': "30' récup (Z1)"}, {'date': '04/03', 'jour': 'Mardi', 'type': 'Fractionné court', 'echauffement': "15' footing", 'entrainement': '10x459m à 90% VMA (récup 1min)', 'recup': "10' étirements"}, {'date': '05/03', 'jour': 'Jeudi', 'type': 'Fractionné long', 'echauffement': "20' footing", 'entrainement': '4x2300m à allure marathon', 'recup': "10' récup"}, {'date': '06/03', 'jour': 'Samedi', 'type': 'Sortie longue', 'echauffement': "15' footing", 'entrainement': 'Sortie longue 28-32 km', 'recup': 'Hydratation'}, {'date': '07/03', 'jour': 'Dimanche', 'type': 'Récupération', 'echauffement': "10' footing", 'entrainement': 'Footing 12 km', 'recup': 'Étirements complets'}], [{'date': '10/03', 'jour': 'Lundi', 'type': 'Endurance', 'echauffement': "10' footing", 'entrainement': 'Musculation', 'recup': "30' récup (Z1)"}, {'date': '11/03', 'jour': 'Mardi', 'type': 'Fractionné court', 'echauffement': "15' footing", 'entrainement': '10x480m à 90% VMA (récup 1min)', 'recup': "10' étirements"}, {'date': '12/03', 'jour': 'Jeudi', 'type': 'Fractionné long', 'echauffement': "20' footing", 'entrainement': '4x2400m à allure marathon', 'recup': "10' récup"}, {'date': '13/03', 'jour': 'Samedi', 'type': 'Sortie longue', 'echauffement': "15' footing", 'entrainement': 'Sortie longue 28-32 km', 'recup': 'Hydratation'}, {'date': '14/03', 'jour': 'Dimanche', 'type': 'Récupération', 'echauffement': "10' footing", 'entrainement': 'Footing 12 km', 'recup': 'Étirements complets'}], [{'date': '17/03', 'jour': 'Lundi', 'type': 'Endurance', 'echauffement': "10' footing", 'entrainement': 'Musculation', 'recup': "30' récup (Z1)"}, {'date': '18/03', 'jour': 'Mardi', 'type': 'Fractionné court', 'echauffement': "15' footing", 'entrainement': '10x500m à 90% VMA (récup 1min)', 'recup': "10' étirements"}, {'date': '19/03', 'jour': 'Jeudi', 'type': 'Fractionné long', 'echauffement': "20' footing", 'entrainement': '4x2500m à allure marathon', 'recup': "10' récup"}, {'date': '20/03', 'jour': 'Samedi', 'type': 'Sortie longue', 'echauffement': "15' footing", 'entrainement': 'Sortie longue 28-32 km', 'recup': 'Hydratation'}, {'date': '21/03', 'jour': 'Dimanche', 'type': 'Récupération', 'echauffement': "10' footing", 'entrainement': 'Footing 12 km', 'recup': 'Étirements complets'}], [{'date': '24/03', 'jour': 'Lundi', 'type': 'Endurance', 'echauffement': "10' footing", 'entrainement': 'Musculation', 'recup': "30' récup (Z1)"}, {'date': '25/03', 'jour': 'Mardi', 'type': 'Fractionné court', 'echauffement': "15' footing", 'entrainement': '10x520m à 90% VMA (récup 1min)', 'recup': "10' étirements"}, {'date': '26/03', 'jour': 'Jeudi', 'type': 'Fractionné long', 'echauffement': "20' footing", 'entrainement': '4x2600m à allure marathon', 'recup': "10' récup"}, {'date': '27/03', 'jour': 'Samedi', 'type': 'Sortie longue', 'echauffement': "15' footing", 'entrainement': 'Sortie longue 28-32 km', 'recup': 'Hydratation'}, {'date': '28/03', 'jour': 'Dimanche', 'type': 'Récupération', 'echauffement': "10' footing", 'entrainement': 'Footing 12 km', 'recup': 'Étirements complets'}], [{'date': '31/03', 'jour': 'Lundi', 'type': 'Endurance', 'echauffement': "10' footing", 'entrainement': 'Musculation', 'recup': "30' récup (Z1)"}, {'date': '01/04', 'jour': 'Mardi', 'type': 'Fractionné court', 'echauffement': "15' footing", 'entrainement': '10x540m à 90% VMA (récup 1min)', 'recup': "10' étirements"}, {'date': '02/04', 'jour': 'Jeudi', 'type': 'Fractionné long', 'echauffement': "20' footing", 'entrainement': '4x2700m à allure marathon', 'recup': "10' récup"}, {'date': '03/04', 'jour': 'Samedi', 'type': 'Sortie longue', 'echauffement': "15' footing", 'entrainement': 'Sortie longue 28-32 km', 'recup': 'Hydratation'}, {'date': '04/04', 'jour': 'Dimanche', 'type': 'Récupération', 'echauffement': "10' footing", 'entrainement': 'Footing 12 km', 'recup': 'Étirements complets'}], [{'date': '07/04', 'jour': 'Lundi', 'type': 'Endurance', 'echauffement': "10' footing", 'entrainement': 'Musculation', 'recup': "30' récup (Z1)"}, {'date': '08/04', 'jour': 'Mardi', 'type': 'Fractionné court', 'echauffement': "15' footing", 'entrainement': '10x560m à 90% VMA (récup 1min)', 'recup': "10' étirements"}, {'date': '09/04', 'jour': 'Jeudi', 'type': 'Fractionné long', 'echauffement': "20' footing", 'entrainement': '4x2800m à allure marathon', 'recup': "10' récup"}, {'date': '10/04', 'jour': 'Samedi', 'type': 'Sortie longue', 'echauffement': "15' footing", 'entrainement': 'Sortie longue 28-32 km', 'recup': 'Hydratation'}, {'date': '11/04', 'jour': 'Dimanche', 'type': 'Récupération', 'echauffement': "10' footing", 'entrainement': 'Footing 12 km', 'recup': 'Étirements complets'}], [{'date': '14/04', 'jour': 'Lundi', 'type': 'Endurance', 'echauffement': "10' footing", 'entrainement': 'Musculation', 'recup': "30' récup (Z1)"}, {'date': '15/04', 'jour': 'Mardi', 'type': 'Fractionné court', 'echauffement': "15' footing", 'entrainement': '10x580m à 90% VMA (récup 1min)', 'recup': "10' étirements"}, {'date': '16/04', 'jour': 'Jeudi', 'type': 'Fractionné long', 'echauffement': "20' footing", 'entrainement': '4x2900m à allure marathon', 'recup': "10' récup"}, {'date': '17/04', 'jour': 'Samedi', 'type': 'Sortie longue', 'echauffement': "15' footing", 'entrainement': 'Sortie longue 28-32 km', 'recup': 'Hydratation'}, {'date': '18/04', 'jour': 'Dimanche', 'type': 'Récupération', 'echauffement': "10' footing", 'entrainement': 'Footing 12 km', 'recup': 'Étirements complets'}], [{'date': '21/04', 'jour': 'Lundi', 'type': 'Endurance', 'echauffement': "10' footing", 'entrainement': 'Musculation', 'recup': "30' récup (Z1)"}, {'date': '22/04', 'jour': 'Mardi', 'type': 'Fractionné court', 'echauffement': "15' footing", 'entrainement': '10x600m à 90% VMA (récup 1min)', 'recup': "10' étirements"}, {'date': '23/04', 'jour': 'Jeudi', 'type': 'Fractionné long', 'echauffement': "20' footing", 'entrainement': '4x3000m à allure marathon', 'recup': "10' récup"}, {'date': '24/04', 'jour': 'Samedi', 'type': 'Sortie longue', 'echauffement': "15' footing", 'entrainement': 'Sortie longue 28-32 km', 'recup': 'Hydratation'}, {'date': '25/04', 'jour': 'Dimanche', 'type': 'Récupération', 'echauffement': "10' footing", 'entrainement': 'Footing 12 km', 'recup': 'Étirements complets'}], [{'date': '28/04', 'jour': 'Lundi', 'type': 'Endurance', 'echauffement': "10' footing", 'entrainement': 'Musculation', 'recup': "30' récup (Z1)"}, {'date': '29/04', 'jour': 'Mardi', 'type': 'Fractionné court', 'echauffement': "15' footing", 'entrainement': '10x620m à 90% VMA (récup 1min)', 'recup': "10' étirements"}, {'date': '30/04', 'jour': 'Jeudi', 'type': 'Fractionné long', 'echauffement': "20' footing", 'entrainement': '4x3100m à allure marathon', 'recup': "10' récup"}, {'date': '01/05', 'jour': 'Samedi', 'type': 'Sortie longue', 'echauffement': "15' footing", 'entrainement': 'Sortie longue 28-32 km', 'recup': 'Hydratation'}, {'date': '02/05', 'jour': 'Dimanche', 'type': 'Récupération', 'echauffement': "10' footing", 'entrainement': 'Footing 12 km', 'recup': 'Étirements complets'}], [{'date': '05/05', 'jour': 'Lundi', 'type': 'Endurance', 'echauffement': "10' footing", 'entrainement': 'Musculation', 'recup': "30' récup (Z1)"}, {'date': '06/05', 'jour': 'Mardi', 'type': 'Fractionné court', 'echauffement': "15' footing", 'entrainement': '10x640m à 90% VMA (récup 1min)', 'recup': "10' étirements"}, {'date': '07/05', 'jour': 'Jeudi', 'type': 'Fractionné long', 'echauffement': "20' footing", 'entrainement': '4x3200m à allure marathon', 'recup': "10' récup"}, {'date': '08/05', 'jour': 'Samedi', 'type': 'Sortie longue', 'echauffement': "15' footing", 'entrainement': 'Sortie longue 28-32 km', 'recup': 'Hydratation'}, {'date': '09/05', 'jour': 'Dimanche', 'type': 'Récupération', 'echauffement': "10' footing", 'entrainement': 'Footing 12 km', 'recup': 'Étirements complets'}]];

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
