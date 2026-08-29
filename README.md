# Ampulheta de Sarina

Browser-based respawn timer for managing multiple MMORPG monster timers with persistent state, search, custom ordering and audio notifications.

**Live:** https://shivinhazen.github.io/arkaiktimer/

## Overview

Ampulheta de Sarina is a dependency-light single-page application built with HTML, CSS and vanilla JavaScript. It manages concurrent countdowns entirely in the browser and persists timers and user preferences between sessions.

The project is primarily an exercise in browser state, DOM performance and interaction design without a framework runtime.

## Features

- Multiple concurrent respawn timers with second-level updates.
- Bestiary grouped by location with support for multiple monster instances.
- Persistent timer state and preferences through `localStorage`.
- Search and filtering without page reloads.
- Drag-and-drop ordering with SortableJS.
- Audio notifications with persistent volume/mute configuration.
- Responsive desktop/mobile interactions.
- Keyboard and ARIA considerations for core controls.

## Engineering highlights

- Centralized application state for active and completed timers.
- Selective DOM updates to reduce unnecessary rendering work.
- Event delegation for dynamically rendered interfaces.
- Throttled pointer effects to limit high-frequency browser work.
- `DocumentFragment` batching for larger render operations.
- Pure client-side persistence: no backend or account is required.

## Stack

| Area | Technologies |
| --- | --- |
| Application | JavaScript ES6+, HTML5, CSS3 |
| Browser APIs | LocalStorage, DOM Events, Audio |
| Interaction | SortableJS |
| UI | CSS Grid, Flexbox, responsive CSS |
| Hosting | GitHub Pages |

## Run locally

No build step is required.

```bash
git clone https://github.com/shivinhazen/arkaiktimer.git
cd arkaiktimer
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Project structure

```text
index.html       # Application shell
styles.css       # Layout, responsive UI and visual effects
script.js        # State, timers, rendering and interactions
sprites/         # Monster assets
maps/            # Map assets
sons/            # Notification audio
```

## License

MIT.
