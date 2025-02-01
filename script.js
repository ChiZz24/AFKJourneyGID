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
document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("events-list")) {
        fetch("data/events.json")
            .then(response => response.json())
            .then(data => {
                let container = document.getElementById("events-list");
                data.events.forEach(event => {
                    let eventElement = document.createElement("div");
                    eventElement.innerHTML = `<h3>${event.title}</h3><p>${event.date}</p><p>${event.description}</p>`;
                    container.appendChild(eventElement);
                });
            })
            .catch(error => console.error("Ошибка загрузки событий:", error));
    }
});
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "1"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function register() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => document.getElementById("message").innerText = "Регистрация успешна!")
        .catch(error => document.getElementById("message").innerText = error.message);
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, password)
        .then(() => document.getElementById("message").innerText = "Вход выполнен!")
        .catch(error => document.getElementById("message").innerText = error.message);
}
