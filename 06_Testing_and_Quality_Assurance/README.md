# Phase 6 - Testing and Quality Assurance

## API Test Cases

| Test | Expected Result |
|---|---|
| Register valid user | 201 response and JWT |
| Register duplicate email | 400 response |
| Login valid credentials | 200 response and JWT |
| Login invalid credentials | 401 response |
| Get profile with token | 200 response |
| Get profile without token | 401 response |
| Create blog with token | 201 response |
| Get all blogs | 200 response |
| Get blog by valid ID | 200 response |
| Update own blog | 200 response |
| Delete own blog | 200 response |
| Generate AI blog | 200 response containing generated content |
| Summarize content | 200 response containing summary |

Use the supplied Thunder Client/Postman collection for request execution.
