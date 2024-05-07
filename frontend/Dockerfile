# Use the official Node.js image as a base image
FROM node:18.17.1-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json /app/

# Install dependencies
RUN npm install

# Copy the remaining source code into the container
COPY . /app/

# Expose the port on which your React application runs
EXPOSE 3000

# Command to run the React application
CMD ["npm", "start"]
