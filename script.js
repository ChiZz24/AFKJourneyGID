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
