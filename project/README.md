# AI Voice Agency Website

This is a bilingual (Arabic + English) marketing website for an AI-automation & voice-agent studio based in Jordan.

## Features

- Fully responsive design (360px to 1440px)
- Bilingual support (Arabic/English) with language detection and toggle
- Dynamic case studies loaded from JSON data
- Lead generation form with validation
- WhatsApp click-to-chat button
- Animations using Framer Motion
- Optimized for performance with a target Lighthouse score ≥90

## Project Structure

```
/
├── app/                 # Next.js app folder
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main page component
├── components/          # React components
│   ├── common/          # Shared components
│   ├── layout/          # Layout components
│   ├── sections/        # Page sections
│   ├── ui/              # shadcn/ui components
│   ├── Analytics.tsx    # Analytics tracking
│   ├── LanguageProvider.tsx # i18n context provider
│   └── ThemeProvider.tsx # Theme provider
├── data/                # Data files
│   └── caseStudies.json # Case studies data
├── public/              # Static assets
└── api/                # API routes
    └── lead/           # Lead submission API
```

## Technology Stack

- Next.js 14 with app router
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Framer Motion for animations
- React Hook Form for form validation
- Zod for schema validation

## Running the Project

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding New Case Studies

To add new case studies or modify existing ones, edit the `/data/caseStudies.json` file. Each case study should follow this structure:

```json
{
  "id": "unique-id",
  "title": {
    "en": "English Title",
    "ar": "Arabic Title"
  },
  "industry": {
    "en": "Industry in English",
    "ar": "Industry in Arabic"
  },
  "description": {
    "en": "Description in English",
    "ar": "Description in Arabic"
  },
  "results": {
    "en": [
      "First result in English",
      "Second result in English"
    ],
    "ar": [
      "First result in Arabic",
      "Second result in Arabic"
    ]
  },
  "image": "URL to image"
}
```

Guidelines for adding case studies:

1. Always provide both English and Arabic translations for all text fields
2. Use high-quality images (recommended: 1200x800px)
3. Keep result points concise and impactful
4. Use Pexels or similar free stock photos for images
5. Make sure the `id` is unique for each case study

## Deployment

The project can be deployed to Netlify using:

```bash
npm run build
npm run export
```

## Compliance Notes

This project includes:
- PAN/CVV masking for payment information in transcripts
- Configuration for storing call recordings in `/storage/amman` S3-compatible storage
- PDPL notice banner with link to policy page

## Browser Support

The website is designed to work with:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)