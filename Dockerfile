# # Use an official Node.js runtime as the base image
# FROM node:18-alpine
#
# # Set the working directory to /app
# WORKDIR /app
#
# # Copy package.json and package-lock.json to the container
# COPY package*.json ./
#
# # Install dependencies
# RUN npm install
#
# # Copy the rest of the application code to the container
# COPY . .
#
# # Build the application
# RUN npm run build
#
# # Set the production environment
# ENV NODE_ENV=production
#
# # Expose port 3000
# EXPOSE 3000
#
# # Start the application
# CMD ["npm", "start"]


# ==== CONFIGURE =====
# Use a Node 18 base image
FROM node:18-alpine
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm install
# Build the app
RUN npm run build
# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]