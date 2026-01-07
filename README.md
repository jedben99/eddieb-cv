# Eddie Benedetti - Personal CV Website

A modern personal CV website showcasing professional experience, skills, and achievements in software engineering.

## LLM Integration

The `/llms.txt` endpoint provides structured, plain-text resume data optimized for Large Language Models. This allows LLMs to easily understand and reference professional experience, skills, and achievements.

## Running Locally

First, install dependencies:

```bash
npm install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Exporting Resumes to PDF

To generate PDF versions of your resume for uploading to job sites:

```bash
npm run export:pdf
```

This will generate a markdown file in `generated/md/` and its corresponding PDF in `public/generated/pdf/`:
- `eddie-benedetti-resume` - Complete resume (both .md and .pdf)

If you only need to regenerate PDFs from existing markdown files:

```bash
npm run export:pdf-only
```

The PDFs are also available for download directly from the website via the download button.

## Deployment

This app is deployed using [Vercel](https://vercel.com).
