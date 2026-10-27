# Front Audiobook

A front-end application for browsing audiobook content and listening through an audio player. The project separates book pages, shared interface components, API access, and audio playback into dedicated modules.

I built this project with Next.js and React, using Material UI for interface components and a dedicated audio-player package for playback controls.

## Features and implementation

- Book-related pages under the `livros` section
- Reusable header and footer components
- Dedicated audio player component
- API client separated from the UI
- Form handling with React Hook Form
- Cookie support and middleware for request handling

## Tech stack

- Next.js 14
- React 18
- TypeScript
- Material UI
- Emotion
- Axios
- React H5 Audio Player
- React Hook Form
- Sass

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production build:

```bash
npm run build
npm start
```

## Screenshots

Screenshots of the actual application should be added here after running the project. No rendered UI captures are currently stored in the repository.

---

This README describes the front-end structure. Availability of API-backed content depends on the service configured in the project.
