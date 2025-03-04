# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json .
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port
EXPOSE 8000

# Start the server
CMD ["node", "index.js"]
