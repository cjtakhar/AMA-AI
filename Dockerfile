# Use the official Node.js 14 image as a base
FROM node:14

# Create a working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm run build

# Copy the rest of the source code
COPY . .

# Expose port 8080 for the server
EXPOSE 8080

# Start the server
CMD ["start": "serve -s build"]
