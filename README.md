# Netflix Clone - Movie Streaming Platform

## Overview
A movie streaming platform using React, Firebase, TMDV API, and Context API, enabling users to browse and stream movies with secure authentication.

## Technologies
- **Frontend**: React, Context API, React Router DOM
- **Authentication**: Firebase Authentication
- **API**: TMDV API
- **Build Tool**: Vite

## Key Features
- Movie data fetching from TMDV API
- Firebase user authentication
- Global state management with Context API
- Responsive routing
- User notifications via React Toastify

## Prerequisites
- Node.js
- npm or yarn
- Firebase account
- TMDV API key

## Installation

### 1. Clone Repository
```bash
git clone https://github.com/vishdev-git/netflix-clone-react-firebase.git
cd netflix-clone-react-firebase
```

### 2. Configure Environment Variables
Create a `.env` file in the project root with the following Firebase configurations:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Application
```bash
npm run dev
```

## Environment Variables
- `VITE_FIREBASE_API_KEY`: Your Firebase API key
- `VITE_FIREBASE_AUTH_DOMAIN`: Firebase authentication domain
- `VITE_FIREBASE_PROJECT_ID`: Firebase project ID
- `VITE_FIREBASE_STORAGE_BUCKET`: Firebase storage bucket
- `VITE_FIREBASE_MESSAGING_SENDER_ID`: Firebase messaging sender ID
- `VITE_FIREBASE_APP_ID`: Firebase app ID

## Contributing
1. Fork repository
2. Create feature branch
3. Commit changes
4. Push branch
5. Open pull request

## License
MIT License