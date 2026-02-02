# Vercel

**Vercel** is a hosting platform optimized for frontend frameworks — it's where you deploy Next.js (and other) apps to make them publicly accessible.

## What Is Vercel?

Vercel is:
- **Hosting platform** — Your website lives here
- **Deployment platform** — Push code → site updates automatically
- **CDN** — Fast loading worldwide
- **Serverless functions** — Run backend code
- **Made by Next.js creators** — Seamless integration

Think of it as "GitHub Pages, but much more powerful."

## Why Vercel?

### Traditional Hosting
1. Buy a server
2. Install software
3. Configure everything
4. Deploy your code
5. Manage updates
6. Scale as needed

### Vercel
1. Connect GitHub
2. Click deploy
3. Done!

**Vercel handles everything else automatically.**

## Key Features

### 1. Automatic Deployments
```bash
git push origin main
# → Vercel automatically deploys
# → Site updates in ~30 seconds
```

### 2. Preview Deployments
Every pull request gets a unique URL:
```
Pull request #42
→ https://my-app-git-feature-branch-username.vercel.app
```

Test changes before merging!

### 3. Custom Domains
```
my-app.vercel.app        # Free subdomain
→ mysite.com             # Custom domain (if you own it)
```

### 4. Environment Variables
Store secrets securely:
- Development
- Preview
- Production

Each can have different values.

### 5. Analytics
- Page views
- Performance metrics
- Core Web Vitals

### 6. Serverless Functions
API routes run on Vercel:
```typescript
// app/api/hello/route.ts
export async function GET() {
    return Response.json({ message: 'Hello!' });
}
```

Scales automatically!

## Getting Started

### 1. Sign Up
Visit [vercel.com](https://vercel.com) and sign up with GitHub.

### 2. Import Project
```
Vercel Dashboard
→ New Project
→ Import Git Repository
→ Select your Next.js repo
→ Deploy
```

### 3. Configure (Optional)
Usually works with zero configuration for Next.js!

### 4. Deploy
Click "Deploy" — site goes live in ~1 minute.

## Deployment Workflow

```
1. Write code locally
   ↓
2. git add . && git commit -m "..."
   ↓
3. git push
   ↓
4. Vercel automatically detects push
   ↓
5. Builds your project
   ↓
6. Deploys to production
   ↓
7. Site is live at your-app.vercel.app
```

## Environment Variables

### Setting Variables
1. Project Settings
2. Environment Variables
3. Add variable:
   - Name: `OPENAI_API_KEY`
   - Value: `sk-proj-abc123...`
   - Environment: Production

### Using Variables
```typescript
// Automatically available in your code
const apiKey = process.env.OPENAI_API_KEY;
```

### Different Environments
```
Development: OPENAI_API_KEY=test-key
Preview: OPENAI_API_KEY=preview-key
Production: OPENAI_API_KEY=real-key
```

## Vercel CLI

Deploy from terminal:

```bash
# Install
npm i -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Pull environment variables
vercel env pull
```

## Project Configuration

### vercel.json (Optional)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["sfo1"],
  "env": {
    "API_URL": "https://api.example.com"
  }
}
```

Usually not needed for Next.js!

## Pricing

### Free (Hobby)
- Unlimited deployments
- Automatic HTTPS
- 100 GB bandwidth/month
- Perfect for personal projects, learning, demos

### Pro ($20/month)
- Everything in Free
- Team collaboration
- More bandwidth
- Priority support

### Enterprise (Custom)
- Advanced features
- SLA
- Dedicated support

**For this workshop:** Free tier is perfect!

## Vercel + Next.js Example

### Your Repository Structure
```
my-nextjs-app/
├── app/
│   ├── page.tsx
│   └── api/
│       └── analyze/
│           └── route.ts
├── package.json
└── next.config.js
```

### Deploy Process
```bash
# Push to GitHub
git add .
git commit -m "Add analysis feature"
git push

# Vercel automatically:
# 1. Detects push
# 2. Runs npm install
# 3. Runs npm run build
# 4. Deploys to production
# 5. Site updates
```

Your site is live in ~30-60 seconds!

## Custom Domains

### 1. Buy Domain
Use Namecheap, Google Domains, etc.

### 2. Add to Vercel
```
Project Settings
→ Domains
→ Add mysite.com
```

### 3. Configure DNS
Vercel gives you DNS records to add:
```
Type: A
Name: @
Value: 76.76.21.21
```

### 4. Done
Site accessible at your domain in minutes!

## Preview Deployments

Every branch/PR gets a URL:

```bash
# Create feature branch
git checkout -b add-feature

# Make changes, push
git push origin add-feature

# Create pull request
# → Vercel creates preview URL
# → https://my-app-git-add-feature-user.vercel.app

# Test changes
# Merge when ready
# → Automatically deploys to production
```

## Real-World Workflow

### Development
```bash
# Work locally
npm run dev  # http://localhost:3000

# Make changes, see them instantly
```

### Testing
```bash
# Push to feature branch
git push origin feature-branch

# Vercel creates preview URL
# Share with team/testers
```

### Production
```bash
# Merge to main
git merge feature-branch
git push origin main

# Vercel deploys to production
# Site updates automatically
```

## Vercel in This Workshop

**Possible use:**
1. Build Next.js app for text analysis
2. Connect GitHub repo to Vercel
3. Push code
4. Instantly deployed at `your-app.vercel.app`
5. Share with others!

**Example:**
```
Local Development
    ↓
GitHub Repository
    ↓
Vercel (automatic deployment)
    ↓
Live Site: your-text-analyzer.vercel.app
```

## Common Issues

### Build Fails
Check Vercel logs:
1. Deployment → View details
2. Look for error messages
3. Usually: Missing dependencies or environment variables

### Environment Variables Not Working
- Make sure they're set in Vercel dashboard
- Redeploy after adding variables
- Check you're using `process.env.VAR_NAME`

### Site Not Updating
- Check deployment status in Vercel dashboard
- Ensure push went to correct branch
- Clear browser cache

## Alternatives to Vercel

Other hosting platforms:
- **Netlify** — Similar to Vercel
- **Cloudflare Pages** — Also good
- **AWS Amplify** — More complex
- **GitHub Pages** — Simpler, static only

**Vercel is best for Next.js** since they make both!

## Vercel + Python Backend

Typical architecture for this workshop:

```
Next.js Frontend (Vercel)
    ↓ API calls
Python Backend (Separate hosting)
    ↓
AI APIs
```

Frontend and backend can be deployed separately.

## Getting Started Checklist

- [ ] Sign up at vercel.com
- [ ] Connect GitHub account
- [ ] Import your Next.js project
- [ ] Add environment variables (if needed)
- [ ] Deploy!
- [ ] (Optional) Add custom domain

## Vibe Coding Deployment

The beauty of Vercel + Next.js:

1. **Build locally with AI help**
   ```
   "Create a Next.js page that shows book analysis"
   ```

2. **Push to GitHub**
   ```bash
   git push
   ```

3. **Vercel deploys automatically**
   - No manual configuration
   - No server management
   - Just works!

From idea to live site in minutes.

## Related Terms
- [NextJS](./nextjs.md)
- [Environment Variables](../development-tools/environment-variables.md)
- [Codespaces](../development-tools/codespaces.md)
