# Phase 2 - Requirement Analysis

## Functional Requirements
1. User registration with name, email and password.
2. User login using email and password.
3. JWT authentication for protected routes.
4. View authenticated user profile.
5. Create a blog with title, content and category.
6. View all blogs.
7. View a blog by ID.
8. Update a blog.
9. Delete a blog.
10. Generate a blog using an AI topic prompt.
11. Summarize blog content using AI.

## Non-Functional Requirements
- Passwords must not be stored as plain text.
- Protected APIs must validate JWT tokens.
- Input should be validated.
- Database errors should be handled without exposing secrets.
- Environment variables should hold credentials.

## API Requirements
See the Thunder Client/Postman collection included in the project.
