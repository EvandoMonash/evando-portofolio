# Portfolio Landing (Next.js + Tailwind)

Commands:

```bash
npm install
npm run dev
```

Sections included:
- Hero, About, Projects, Skills, Contact

Customize content in `src/components/*` and `src/lib/projects.ts`.

## Chatbot Setup

The portfolio includes an AI chatbot powered by ChatGPT API. To enable it:

1. Get an OpenAI API key from [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Create a `.env.local` file in the root directory
3. Add your API key: `OPENAI_API_KEY=your_actual_api_key_here`
4. Restart your development server

The chatbot will appear as a floating button in the bottom-right corner and can answer questions about your skills, projects, and experience.

