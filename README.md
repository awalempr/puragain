# Puragain Water Website

Premium water filtration website built with Next.js 14, Tailwind CSS, shadcn/ui, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **Fonts:** Lora (headings) + Inter (body)
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **Icons:** Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Copy env file and add your Yelp API key
cp .env.local.example .env.local

# Start development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `YELP_API_KEY` | Yelp Fusion API key for pulling reviews | Optional (static fallback included) |

## Site Architecture

| Route | Page |
|-------|------|
| `/` | Homepage (StoryBrand 7-part framework) |
| `/products/reverse-osmosis` | 5-Stage Reverse Osmosis System |
| `/products/alkaline` | 6-Stage Alkaline Drinking System |
| `/products/whole-house` | Whole House Filtersorb System |
| `/quiz` | Product recommendation quiz (7 questions) |
| `/reviews` | Customer reviews (Yelp API + fallback) |
| `/contact` | Contact form + phone numbers |

## Brand Colors

- Primary Red: `#cc1010`
- Primary Blue: `#1a6bb5`
- Dark Navy: `#06090f`
- Off White: `#f5f7fa`

## Deployment

Netlify ready. Run `npm run build` and deploy the `.next` output.
