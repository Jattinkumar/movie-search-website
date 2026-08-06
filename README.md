# Movie Explorer Web App (Repository Configuration & Deployment Lab)

This repository serves as a practical deployment and configuration environment. Instead of writing frontend layout code from scratch, I utilized AI-accelerated code generation to build the baseline user interface so I could focus entirely on repository management, environment configurations, and version control structures.

### What I Focused On & Managed Manually:
* **Version Control & Git Pipelines:** Managed the full local-to-remote Git workflow, structuring clean commits, handling file structures, and managing repository branches.
* **API Key Integration & Ingestion:** Configured the application to securely interface with external REST endpoints (TMDB API) and verified that data payloads parsed correctly into the UI.
* **Environment Configuration:** Handled path mapping across multiple HTML files (`index.html`, `bollywood.html`, `trendingPage.html`) to ensure seamless routing in a local browser engine.

### Operational Lessons
* **The Value of Tooling:** Using AI to generate the frontend layout taught me how to read, debug, and audit code written by automated systems—a critical skill in modern software engineering environments.
* **Data Flow Observation:** By opening the browser Developer Tools (F12), I monitored how the application executes asynchronous network requests and tracks token parameters during execution.

### How to Run
1. Clone the repository: `git clone https://github.com`
2. Insert your TMDB API credentials into the `API_KEY` string inside `script.js`.
3. Open `index.html` directly in any web browser to execute live search queries.
