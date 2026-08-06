# Movie Explorer Web App (Repository Configuration & Deployment Lab)

This repository is a multi-page web application designed to search movies, view trending films, and explore Bollywood content powered by the TMDB API. 

Instead of writing the frontend layout code from scratch, I utilized AI-accelerated code generation to build the baseline user interface. This allowed me to treat the project as a practical laboratory environment to focus entirely on repository management, environment configurations, API data flow, and version control structures.

### Core Application Features Deployed
* **Dynamic Movie Search:** Allows users to query individual movie titles and render real-time response objects.
* **Segmented Dataset Filters:** Implemented dedicated views for trending movies (2024–2025) and specialized Bollywood content collections.
* **Fallbacks & Error States:** Configured localized fallback assets to keep the layout clean when upstream API image assets fail to load.

### What I Managed Manually
* **Version Control & Git Pipelines:** Managed the local-to-remote Git workflow, structuring commits, handling multi-page file layouts, and ensuring repository structure alignment.
* **API Key Integration & Ingestion:** Configured the application components to securely interface with external REST endpoints (TMDB API) and verified JSON payload rendering behaviors.
* **Multi-Page Environment Configuration:** Handled local path routing across distinct file coordinates (`index.html`, `bollywood.html`, `trendingPage.html`, `home.html`) to ensure seamless navigation in a local browser engine.

### Operational Lessons
* **Code Auditing:** Reviewing automated frontend code taught me how to read, debug, and trace system-generated code logic—a highly relevant engineering workflow.
* **Data Flow Diagnostics:** Utilized browser developer tools (F12) to monitor dynamic network requests, track latency, and analyze asynchronous API payloads.

### How to Run
1. Clone the repository: `git clone https://github.com`
2. Insert your personal TMDB API credentials into the `API_KEY` string located inside `script.js`.
3. Open `index.html` directly in any web browser engine to initialize live search queries.
