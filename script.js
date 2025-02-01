document.addEventListener("DOMContentLoaded", function() {
    fetch("data/guides.json")
        .then(response => response.json())
        .then(data => {
            let guidesContainer = document.createElement("div");
            data.guides.forEach(guide => {
                let guideElement = document.createElement("p");
                guideElement.textContent = guide.title;
                guidesContainer.appendChild(guideElement);
            });
            document.body.appendChild(guidesContainer);
        });
});
document.addEventListener("DOMContentLoaded", function() {
    fetch("data/guides.json")
        .then(response => response.json())
        .then(data => {
            let container = document.getElementById("guides-container");
            data.guides.forEach(guide => {
                let guideElement = document.createElement("div");
                guideElement.innerHTML = `<h3>${guide.title}</h3><p>${guide.description}</p>`;
                container.appendChild(guideElement);
            });
        })
        .catch(error => console.error("Ошибка загрузки гайдов:", error));
});
