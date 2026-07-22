# Use Node.js 22 LTS Alpine image
FROM node:22-alpine

# Set WORKDIR to /app
WORKDIR /app

# Copy package.json and package-lock.json
COPY ["shopify backend/package*.json", "./"]

# Run npm install --omit=dev
RUN npm install --omit=dev

# Copy the remaining project files
COPY ["shopify backend/", "./"]

# Expose port 5001
EXPOSE 5001

# Start the server
CMD ["npm", "start"]