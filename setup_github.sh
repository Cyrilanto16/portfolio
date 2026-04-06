#!/bin/bash
# ─────────────────────────────────────────────────────────────────
#  setup_github.sh
#  Run this ONCE from inside your Portfolio folder to push to GitHub.
#  Usage: bash setup_github.sh
# ─────────────────────────────────────────────────────────────────

set -e

GITHUB_USER="cyrilanto16"
REPO_NAME="portfolio"
REMOTE_URL="https://github.com/${GITHUB_USER}/${REPO_NAME}.git"

echo ""
echo "🚀 Portfolio → GitHub setup"
echo "──────────────────────────────────────────"

# 1. Remove any incomplete .git from the Cowork session (if present)
if [ -d ".git" ]; then
  echo "⚠️  Removing incomplete .git directory from previous session..."
  rm -rf .git
fi

# 2. Init fresh repo on main branch
echo "📁  Initializing git repository..."
git init -b main

# 3. Configure identity (update if needed)
git config user.name  "Cyril Anto"
git config user.email "cyrilanto16@gmail.com"

# 4. Stage everything
echo "📦  Staging files..."
git add .

# 5. Initial commit
echo "✅  Creating initial commit..."
git commit -m "feat: initial portfolio release

Production-ready personal portfolio site for Cyril Anto.
- Static HTML/CSS/JS — no build step
- Dark/light theme toggle
- Typing animation, scroll-reveal
- GitHub Actions CI/CD for GitHub Pages"

# 6. Add remote & push
echo ""
echo "🔗  Adding remote: ${REMOTE_URL}"
git remote add origin "${REMOTE_URL}"

echo "⬆️   Pushing to GitHub..."
git push -u origin main

echo ""
echo "────────────────────────────────────────────────────────"
echo "✅  Done! Your repo is live at:"
echo "    https://github.com/${GITHUB_USER}/${REPO_NAME}"
echo ""
echo "🌐  After enabling GitHub Pages (Settings → Pages → Source: GitHub Actions)"
echo "    your site will be published at:"
echo "    https://${GITHUB_USER}.github.io/${REPO_NAME}"
echo "────────────────────────────────────────────────────────"
