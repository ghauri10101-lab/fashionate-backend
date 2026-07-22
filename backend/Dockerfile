# Use Node.js 22 LTS Alpine image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy all backend files
COPY . .

# Expose port
EXPOSE 5001

# Start server
CMD ["npm", "start"]