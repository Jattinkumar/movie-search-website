🎬 Movie Explorer Web App

A simple and clean web application to search movies, view trending films, and explore Bollywood content — built using HTML, CSS, and JavaScript, powered by TMDB API.

This project is designed to be easy to understand, beginner-friendly, and perfect for learning API integration, UI building, and JavaScript basics.

📌 Features

✔ Search Movies — Enter any movie name and get results instantly
✔ Bollywood Movies Page — Automatically shows top-rated Bollywood films
✔ Trending Page — Shows movies released recently (2024–2025)
✔ Movie Details Page — Click any movie card to view full details
✔ Error Handling — Shows friendly messages if movie not found or API fails
✔ Clean & Simple Code — Easy to read for beginners
✔ Responsive UI — Works on mobile and desktop
✔ Glowing Hover Effect — Cards animate with a red glow effect
✔ Fallback Images — Even if TMDB has missing posters, your UI stays clean
✔ Black Background Theme — Modern and presentation-friendly

🗂️ Project Structure
project-folder/
│
├── index.html          → Home page (Top Hindi Movies + Search)
├── bollywood.html      → Bollywood movies page
├── trending.html       → Latest trending movies (2024–2025)
├── home.html           → Movie details page
│
├── styles.css          → All styling (UI, animations, hover effects)
├── script.js           → Main JavaScript file (API calls + rendering)

🔧 Technologies Used
Frontend

HTML5 — Structure of all pages

CSS3 — Styling, layout, animations

JavaScript (ES6) — API calls, rendering movie cards, interactivity

API Used

The Movie Database (TMDB) API
Provides movie posters, details, ratings, release dates, overview, etc.

🧰 How to Use This Project
Step 1 — Download or Clone
git clone https://github.com/Jattinkumar/movie-search-website.git

Step 2 — Add Your TMDB API Key

Inside script.js, replace:

const API_KEY = "YOUR_API_KEY_HERE";

Step 3 — Open the App

Just open any HTML file directly in your browser:

index.html → Home

bollywood.html → Bollywood section

trending.html → Latest movies

home.html → Home page for navigation

No server required.
No installation.
Just click and run.

🎯 What I Learned From This Project

How to call external APIs using JavaScript

How to fetch and display dynamic data

How to handle errors and missing images

How to structure a multi-page website

How to design responsive UI

How to pass data between pages

📝 Code Highlights
✔ Clean API Function

All movie requests use a simple reusable function:

async function fetchMovies(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    showError("Unable to fetch movies. Try again later.");
  }
}

✔ Movie Card Rendering
function createMovieCard(movie) {
  return `
    <div class="movie-card" onclick="showDetails(${movie.id})">
      <img src="${movie.poster_path ? IMAGE_URL + movie.poster_path : 'assets/no-image.jpg'}">
      <h3>${movie.title}</h3>
      <p>⭐ ${movie.vote_average}</p>
    </div>
  `;
}

✔ Glowing Hover Effect
.movie-card:hover {
  transform: scale(1.07);
  box-shadow: 0 0 20px red;
}

🙌 Credits

TMDB API for movie data

Me, for building and learning!

⭐ If You're a Recruiter / Mentor

This project shows:

Clear understanding of API integration

Strong basics of HTML, CSS, JS

Clean code and UI development skills

Ability to build and structure complete projects
