# am-next

An AgentMark application deployed with Next.js.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Edit `.env.local` with your API keys

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Test your prompts:**
   Visit `http://localhost:3000/api/agentmark` or use the demo app

## Deployment

### Deploy to Vercel

```bash
npx vercel deploy
```

## API Endpoints

- `POST /api/agentmark` - Execute AgentMark prompts
- `GET /api/agentmark` - Health check

## Learn More

- [AgentMark Documentation](https://docs.agentmark.co)
- [Platform Adapters Guide](https://github.com/agentmark/agentmark/blob/main/PLATFORM_ADAPTERS.md)
- [Next.js Documentation](https://nextjs.org/docs)
