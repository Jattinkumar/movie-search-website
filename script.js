// ==============================
// BASIC CONFIG
// ==============================
const API_KEY = "f2a1e9e0e765a2fbb5638bdea27aa516";
const TMDB = "https://api.themoviedb.org/3";
const IMG = "https://image.tmdb.org/t/p/w500";

// ==============================
// WAIT FOR PAGE TO LOAD
// ==============================
document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;       // home / bollywood / trending
    const container = document.getElementById("movieContainer");
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const sectionTitle = document.getElementById("sectionTitle");

    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modalBody");
    const closeModal = document.getElementById("closeModal");

    // ==============================
    // SIMPLE MESSAGE FUNCTION
    // ==============================
    function showMessage(msg) {
        container.innerHTML = `<div class="message">${msg}</div>`;
    }

    // ==============================
    // API FETCH (simple error handling)
    // ==============================
    async function apiGet(url) {
        try {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        } catch (err) {
            showMessage("Something went wrong while loading data.");
            console.error(err);
            return null;
        }
    }

    // ==============================
    // BUILD MOVIE CARD
    // ==============================
    function createCard(movie) {
        const card = document.createElement("div");
        card.className = "movie-card";
        card.dataset.id = movie.id;

        const img = movie.poster_path
            ? IMG + movie.poster_path
            : "https://via.placeholder.com/300x450?text=No+Image";

        card.innerHTML = `
            <div class="movie-card-inner">
                <img src="${img}" alt="${movie.title}">
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <p>(${movie.release_date ? movie.release_date.slice(0, 4) : "N/A"}) ⭐ ${movie.vote_average}</p>
                </div>
            </div>
        `;

        // red glow on hover
        card.addEventListener("mouseenter", () => card.classList.add("glow"));
        card.addEventListener("mouseleave", () => card.classList.remove("glow"));

        // open details
        card.addEventListener("click", () => loadDetails(movie.id));

        return card;
    }

    // ==============================
    // DISPLAY MOVIES
    // ==============================
    function renderMovies(list) {
        if (!list || list.length === 0) {
            showMessage("No movies found.");
            return;
        }

        container.innerHTML = "";
        list.forEach(movie => container.appendChild(createCard(movie)));
    }

    // ==============================
    // MOVIE DETAILS (MODAL)
    // ==============================
    async function loadDetails(id) {
        modal.classList.add("show");
        modalBody.innerHTML = "<p>Loading...</p>";

        const data = await apiGet(`${TMDB}/movie/${id}?api_key=${API_KEY}`);

        if (!data) {
            modalBody.innerHTML = "<p>Details not available.</p>";
            return;
        }

        modalBody.innerHTML = `
            <img src="${data.poster_path ? IMG + data.poster_path : 'https://via.placeholder.com/300x450?text=No+Image'}">
            <div class="modal-details">
                <h2>${data.title} (${data.release_date?.slice(0, 4)})</h2>
                <p><strong>Rating:</strong> ${data.vote_average}</p>
                <p><strong>Genres:</strong> ${data.genres.map(g => g.name).join(", ")}</p>
                <p><strong>Runtime:</strong> ${data.runtime} mins</p>
                <p><strong>Overview:</strong> ${data.overview}</p>
            </div>
        `;
    }

    closeModal.addEventListener("click", () => modal.classList.remove("show"));
    window.addEventListener("click", e => {
        if (e.target === modal) modal.classList.remove("show");
    });

    // ==============================
    // SEARCH FUNCTION
    // ==============================
    async function handleSearch(term) {
        if (!term) return;
        sectionTitle.textContent = `Search: "${term}"`;

        showMessage("Searching...");

        const data = await apiGet(
            `${TMDB}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(term)}`
        );

        if (data?.results) renderMovies(data.results);
    }

    searchBtn.addEventListener("click", () => handleSearch(searchInput.value));
    searchInput.addEventListener("keypress", e => {
        if (e.key === "Enter") handleSearch(searchInput.value);
    });

    // ==============================
    // PAGE LOADERS
    // ==============================
    async function loadHome() {
        sectionTitle.textContent = "✨ Top Hindi Movies";
        showMessage("Loading...");

        const res = await apiGet(
            `${TMDB}/discover/movie?api_key=${API_KEY}&with_original_language=hi&sort_by=popularity.desc`
        );

        renderMovies(res?.results);
    }

    async function loadBollywood() {
        sectionTitle.textContent = "🎬 Bollywood - Top Rated";
        showMessage("Loading...");

        const res = await apiGet(
            `${TMDB}/discover/movie?api_key=${API_KEY}&with_original_language=hi&vote_count.gte=200&sort_by=vote_average.desc`
        );

        renderMovies(res?.results);
    }

    async function loadtrendingPage() {
        sectionTitle.textContent = "🔥 Trending 2024–2025";
        showMessage("Loading...");

        const res = await apiGet(
            `${TMDB}/discover/movie?api_key=${API_KEY}&primary_release_date.gte=2024-01-01&sort_by=popularity.desc`
        );

        renderMovies(res?.results);
    }

    // ==============================
    // INITIAL PAGE LOAD
    // ==============================
    if (page === "home") loadHome();
    if (page === "bollywood") loadBollywood();
    if (page === "trendingPage") loadtrendingPage();
});
