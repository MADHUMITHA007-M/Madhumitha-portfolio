/* =========================
   SKILLS
========================= */

function showSkill(card, skill) {

    const descriptions = {

        python:
            "Using Python as my main programming language for problem-solving and exploring Data Science and Machine Learning.",

        java:
            "Building my programming foundation and practising problem-solving with Java.",

        c:
            "Strengthening my understanding of programming fundamentals using C.",

        datascience:
            "Exploring Data Science concepts and learning how data can be analysed to discover useful insights.",

        numpy:
            "Using NumPy to work with numerical data, arrays and mathematical operations.",

        pandas:
            "Using Pandas for data manipulation, analysis and working with structured datasets.",

        ml:
            "Currently learning Machine Learning concepts and exploring how models can learn patterns from data.",

        html:
            "Using HTML to structure clean and meaningful web pages.",

        css:
            "Using CSS to create responsive and visually appealing interfaces.",

        javascript:
            "Learning JavaScript to add interaction and dynamic behaviour to websites.",

        sql:
            "Using SQL to understand and work with structured data in databases.",

        dsa:
            "Currently learning Data Structures and Algorithms to improve my problem-solving and programming skills."

    };


    /* Close other cards */

    document.querySelectorAll(".skill-card").forEach(otherCard => {

        if (otherCard !== card) {

            otherCard.classList.remove("active");

            const otherDescription =
                otherCard.querySelector(".skill-description");

            otherDescription.textContent = "";

        }

    });


    /* Toggle clicked card */

    card.classList.toggle("active");


    const description =
        card.querySelector(".skill-description");


    if (card.classList.contains("active")) {

        description.textContent = descriptions[skill];

    } else {

        description.textContent = "";

    }

}



/* =========================
   PROJECT DETAILS
========================= */

function toggleProject() {

    const details =
        document.getElementById("project-details");

    const button =
        document.querySelector(".project-buttons button");


    details.classList.toggle("open");


    if (details.classList.contains("open")) {

        button.textContent = "Hide Details ↑";

    } else {

        button.textContent = "View Details ↓";

    }

}



/* =========================
   DARK MODE
========================= */

function toggleTheme() {

    document.body.classList.toggle("dark");


    const button =
        document.querySelector(".theme-toggle");


    if (document.body.classList.contains("dark")) {

        button.textContent = "☀";

        localStorage.setItem("theme", "dark");

    } else {

        button.textContent = "◐";

        localStorage.setItem("theme", "light");

    }

}



/* =========================
   REMEMBER THEME
========================= */

window.addEventListener("DOMContentLoaded", () => {

    const savedTheme =
        localStorage.getItem("theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        document.querySelector(".theme-toggle").textContent = "☀";

    }

});



/* =========================
   SCROLL PROGRESS
========================= */

window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;


    const progress =
        (scrollTop / documentHeight) * 100;


    document.getElementById("scroll-progress").style.width =
        progress + "%";

});
function askMira(question) {
    const answer = document.getElementById("miraAnswer");

    const responses = {
        skills:
            "Madhumitha works with Python, Java, C, HTML, CSS, JavaScript and SQL. She also knows Data Science, NumPy and Pandas.",

        learning:
            "She is currently learning Machine Learning and DSA while strengthening her Data Science and problem-solving skills.",

        project:
            "Her featured project is MIRA — AI Merchant Growth Agent. It explores customer intent, product recommendations, budget-aware bundles and merchant insights.",

        education:
            "Madhumitha is a 3rd-year B.Tech Information Technology student at Sri Sairam Engineering College with a CGPA of 8.83."
    };

    answer.textContent = responses[question];
}
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });


    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
/* =========================================================
   PROJECT DETAILS
========================================================= */

function toggleProjectDetails() {

    const details = document.getElementById("projectDetails");
    const arrow = document.getElementById("projectArrow");

    details.classList.toggle("open");

    if (details.classList.contains("open")) {
        arrow.textContent = "−";
    } else {
        arrow.textContent = "+";
    }
}


/* =========================================================
   JOURNEY INTERACTION
========================================================= */

function toggleJourney(item) {

    const allItems = document.querySelectorAll(".journey-item");

    allItems.forEach(otherItem => {

        if (otherItem !== item) {

            otherItem.classList.remove("active");

            const toggle =
                otherItem.querySelector(".journey-toggle");

            if (toggle) {
                toggle.textContent = "+";
            }
        }
    });


    item.classList.toggle("active");

    const toggle =
        item.querySelector(".journey-toggle");

    if (item.classList.contains("active")) {
        toggle.textContent = "−";
    } else {
        toggle.textContent = "+";
    }
}
/* =========================================
   EXPERIENCE CARD TOGGLE
========================================= */

function toggleExperience(card) {

    const allCards = document.querySelectorAll(".experience-card");

    allCards.forEach(item => {
        if (item !== card) {
            item.classList.remove("active");
        }
    });

    card.classList.toggle("active");
}