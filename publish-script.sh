#!/bin/bash

# Check if commit message is passed
if [ -z "$1" ]; then
  echo "❌ Error: Commit message is required."
  echo "Usage: ./publish-script.sh \"Your commit message\" [patch|minor|major]"
  exit 1
fi

# Commit message and version type
COMMIT_MSG=$1
VERSION_TYPE=${2:-patch} # default to patch if not provided

# Exit immediately if a command exits with a non-zero status
set -e

echo "🔍 Staging all changes..."
git add .

echo "✅ Committing with message: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

echo "📦 Bumping NPM package version ($VERSION_TYPE)..."
npm version $VERSION_TYPE

echo "🚀 Pushing code and tags to remote..."
git push
git push --tags

echo "🎉 Done! Version bumped and code pushed."
