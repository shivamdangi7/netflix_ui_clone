# Netflix UI Clone

A Netflix interface clone built using React, Redux, and Firebase.

## Features

### Authentication
- Login/Sign Up functionality
- Sign In/Sign up Form
- Protected routes with authentication
- Redirect to Browse Page after authentication

### Browse Page (Authenticated)
- Header with navigation
- Main Movie Showcase
  - Auto-playing trailer in background
  - Title & Description
  - Movie Suggestions
  - Multiple Movie Lists by category

### Movie Discovery
- Search Bar
- Movie Suggestions

## Technical Implementation

### Setup & Configuration
- App initialization using Vite
- Tailwind CSS configuration
- React Router setup

### Authentication & User Management
- Firebase setup and integration
- User authentication (sign in/sign up)
- Form validation using useRef and regex
- Redux implementation using Redux Toolkit
  - User state management
  - Profile updates
  - Authentication state handling

### API Integration
- TMDB API integration
  - Now playing movies list
  - Movie trailer data
- Custom hooks for data fetching

### Components
- Main Container
  - YouTube video integration
  - Autoplay and mute functionality
- Secondary Container
  - Movie suggestions layout
  - Movie lists

### State Management
- Redux store configuration
- Movie slice implementation
- User slice implementation

### Bug Fixes
- Sign Up user displayName and profile picture update
- Authentication redirect handling
- Memory leak prevention (unsubscribe from auth state)

## Development Progress
- ✅ Basic app setup
- ✅ Authentication implementation
- ✅ Redux store configuration
- ✅ TMDB API integration
- ✅ Main container development
- 🚧 Movie discovery features (in progress)

## Technologies Used
- React
- Redux Toolkit
- Firebase
- Tailwind CSS
- TMDB API