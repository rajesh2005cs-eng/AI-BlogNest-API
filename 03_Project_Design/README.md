# Phase 3 - Project Design

## Architecture
The backend follows a simple MVC-style structure:

Client -> Express Routes -> Controllers -> Mongoose Models -> MongoDB
                         |
                         -> Gemini AI Service

## Folder Design
- `src/server.js` - application entry point
- `src/config/db.js` - MongoDB connection
- `src/models/` - database models
- `src/controllers/` - business logic
- `src/routes/` - API routes
- `src/middleware/` - authentication and validation middleware
- `src/services/` - Gemini AI integration

## Security Design
- bcrypt password hashing
- JWT bearer authentication
- `.env` for secrets
- validation middleware
