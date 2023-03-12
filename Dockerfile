# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# Set the production environment
ENV NODE_ENV=production

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
