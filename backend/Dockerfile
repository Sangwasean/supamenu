# Stage 1: Builder
FROM node:18-alpine AS builder

# Install build tools
RUN apk add --no-cache python3 make g++

WORKDIR /app
COPY package*.json ./
RUN npm ci --include=dev  # Install dev dependencies
COPY . .
RUN npm rebuild bcrypt --build-from-source  # Force rebuild
RUN npm run build

# Stage 2: Production
FROM node:18-alpine
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

CMD ["npm", "start"]