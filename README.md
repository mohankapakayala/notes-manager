# Notes Manager

A full-stack application for managing notes with a React TypeScript frontend and Django REST Framework backend.

## Overview

Notes Manager is a simple yet functional note-taking application that allows users to create and retrieve notes. The application features a modern web interface built with React and a robust backend API powered by Django REST Framework.

## Project Structure

```
notes-manager/
├── frontend/                 # React TypeScript application
│   ├── public/              # Static assets
│   ├── src/                 # React components and app logic
│   ├── Dockerfile           # Docker configuration for frontend
│   ├── package.json         # Frontend dependencies
│   └── tsconfig.json        # TypeScript configuration
│
├── backend/                 # Django application
│   ├── backend/             # Django project settings
│   ├── notes_manager/       # Notes app with models, views, serializers
│   ├── manage.py            # Django management script
│   ├── db.sqlite3           # SQLite database
│   └── venv/                # Python virtual environment
│
└── README.md                # This file
```

## Features

- **Create Notes**: Add new notes with title and content
- **View Notes**: Retrieve all notes from the database
- **Timestamps**: Automatic tracking of creation and update times
- **REST API**: RESTful endpoints for note operations
- **Responsive UI**: Modern React interface with TypeScript

## Technology Stack

### Frontend
- **React** 19.2.6 - UI library
- **TypeScript** 6.0.3 - Type-safe JavaScript
- **Axios** 1.6.0 - HTTP client
- **React Scripts** 5.0.1 - Build tooling

### Backend
- **Django** - Web framework
- **Django REST Framework** - REST API toolkit
- **SQLite** - Database (default)
- **Python** 3.13+

## Getting Started

### Prerequisites
- Node.js 18+ (for frontend)
- Python 3.13+ (for backend)
- npm or yarn (for frontend package management)

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Create and activate a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install django djangorestframework django-cors-headers
   ```

4. **Run migrations:**
   ```bash
   python manage.py migrate
   ```

5. **Start the development server:**
   ```bash
   python manage.py runserver
   ```
   The backend will be available at `http://localhost:8000`

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The frontend will open at `http://localhost:3000`

## API Endpoints

### GET /api/notes
Retrieve all notes.

**Response:**
```json
[
  {
    "id": 1,
    "title": "Note Title",
    "content": "Note content here",
    "created_at": "2026-05-26T10:30:00Z",
    "updated_at": "2026-05-26T10:30:00Z"
  }
]
```

### POST /api/notes
Create a new note.

**Request Body:**
```json
{
  "title": "New Note",
  "content": "Content of the note"
}
```

**Response:**
```json
{
  "id": 1,
  "title": "New Note",
  "content": "Content of the note",
  "created_at": "2026-05-26T10:30:00Z",
  "updated_at": "2026-05-26T10:30:00Z"
}
```

## Database Schema

### Note Model
- `id` - Primary key (auto-generated)
- `title` - CharField (max 1000 characters)
- `content` - TextField
- `created_at` - DateTimeField (auto-populated on creation)
- `updated_at` - DateTimeField (auto-updated on save)

## Docker Deployment

### Frontend Docker Build
```bash
cd frontend
docker build -t notes-manager-frontend .
docker run -p 3000:3000 notes-manager-frontend
```

### Backend Docker Build
```bash
cd backend
docker build -t notes-manager-backend .
docker run -p 8000:8000 notes-manager-backend
```

## Available Scripts

### Frontend
- `npm start` - Run development server
- `npm build` - Create production build
- `npm test` - Run test suite
- `npm eject` - Eject from Create React App

### Backend
- `python manage.py runserver` - Run development server
- `python manage.py makemigrations` - Create database migrations
- `python manage.py migrate` - Apply database migrations
- `python manage.py createsuperuser` - Create admin user

## Development Workflow

1. Start the backend server on port 8000
2. Start the frontend development server on port 3000
3. The frontend automatically proxies API requests to the backend
4. Make changes and they'll hot-reload in the browser

## Future Enhancements

- Update/Edit existing notes
- Delete notes functionality
- User authentication
- Search and filter notes
- Categories/Tags for notes
- Rich text editor
- Note sharing capabilities

## License

This project is created for personal use.

## Support

For questions or issues, please refer to the project repository.
