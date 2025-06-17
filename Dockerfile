FROM node:22-alpine
# Install dependencies
RUN apk add --no-cache gi
WORKDIR /app
COPY package*.json ./
RUN npm install 
# Copy the rest of the application code
COPY . .    
# RUN THE APPLICATION
CMD [ "npm", "start" ]