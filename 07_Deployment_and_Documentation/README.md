# Phase 7 - Deployment and Documentation

## Environment Variables
- PORT=5000
- MONGO_URI=your MongoDB connection string
- JWT_SECRET=your private JWT secret
- GEMINI_API_KEY=your Gemini API key
- GEMINI_MODEL=gemini-2.5-flash

## Local Deployment
```bash
npm install
npm run dev
```

## Production Notes
- Never commit `.env` or API keys.
- Use a managed MongoDB deployment such as MongoDB Atlas.
- Set production environment variables in the hosting platform.
- Use a production start command: `npm start`.
