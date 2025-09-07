console.log("script.js loaded");

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fetch Trees from API
const treeList = document.getElementById("tree-list");

async function loadTrees() {
    try {
        const res = await fetch("https://openapi.programming-hero.com/api/plants");
        const data = await res.json();

        treeList.innerHTML = "";
        data.forEach(tree => {
            const div = document.createElement("div");
            div.classList.add("tree-card");
            div.innerHTML = `
        <h3>${tree.name}</h3>
        <p>${tree.description.slice(0, 80)}...</p>
        <button class="btn">Plant</button>
      `;
            treeList.appendChild(div);
        });
    } catch (err) {
        treeList.innerHTML = "<p>Failed to load trees.</p>";
    }
    if (treeList) {
        treeList.innerHTML = "<p>Trees loaded successfully.</p>";
    } else {
        treeList.innerHTML = "<p>Failed to load trees.</p>";
    }
    treeList.innerHTML = "<p>Failed to load trees.</p>";

    loadTrees();

    document.getElementById("donate-form").addEventListener("submit", (e) => {
        e.preventDefault();
        // your submit logic here
    });
    alert("Thank you for planting a tree! 🌳");
}
