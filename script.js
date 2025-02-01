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
document.addEventListener("DOMContentLoaded", function() {
    fetch("data/heroes.json")
        .then(response => response.json())
        .then(data => {
            let searchInput = document.getElementById("search");
            let heroesList = document.getElementById("heroes-list");

            function renderHeroes(filter = "") {
                heroesList.innerHTML = "";
                data.heroes
                    .filter(hero => hero.name.toLowerCase().includes(filter.toLowerCase()))
                    .forEach(hero => {
                        let heroElement = document.createElement("p");
                        heroElement.textContent = `${hero.name} - ${hero.role}`;
                        heroesList.appendChild(heroElement);
                    });
            }

            searchInput.addEventListener("input", () => {
                renderHeroes(searchInput.value);
            });

            renderHeroes();
        })
        .catch(error => console.error("Ошибка загрузки героев:", error));
});
document.addEventListener("DOMContentLoaded", function() {
    fetch("data/heroes.json")
        .then(response => response.json())
        .then(data => {
            let searchInput = document.getElementById("search");
            let roleFilter = document.getElementById("filter-role");
            let heroesList = document.getElementById("heroes-list");

            function renderHeroes(filterName = "", filterRole = "") {
                heroesList.innerHTML = "";
                data.heroes
                    .filter(hero => hero.name.toLowerCase().includes(filterName.toLowerCase()))
                    .filter(hero => filterRole === "" || hero.role === filterRole)
                    .forEach(hero => {
                        let heroElement = document.createElement("p");
                        heroElement.textContent = `${hero.name} - ${hero.role}`;
                        heroesList.appendChild(heroElement);
                    });
            }

            searchInput.addEventListener("input", () => {
                renderHeroes(searchInput.value, roleFilter.value);
            });

            roleFilter.addEventListener("change", () => {
                renderHeroes(searchInput.value, roleFilter.value);
            });

            renderHeroes();
        })
        .catch(error => console.error("Ошибка загрузки героев:", error));
});
