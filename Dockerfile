# Dockerfile for local development, see Dockerfile.prod for production

FROM node:19-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

RUN chown -R node /app

# Run container as non-root user
USER node

# Dependencies are installed on runtime

# Expose the listening port
EXPOSE 3000

# Run npm dev script which does auto reload
CMD ["npm", "run", "docker:dev"]