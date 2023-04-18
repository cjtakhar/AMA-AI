# Use the official Node.js 14 image as a base
FROM node:14

# Install serve globally
RUN npm install -g serve

# Create a working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

COPY nginx.conf /etc/nginx/nginx.conf

# Build the React app
RUN npm run build

# Expose port 8080 for the server
EXPOSE 8080

# Start the server
CMD ["serve", "-s", "build"]

