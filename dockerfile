# ---------- Stage 1: Build the Next.js app ----------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install all dependencies (including devDeps for build/test)
RUN yarn install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Build the app for production
RUN yarn build

# ---------- Stage 2: Production runtime ----------
FROM node:20-alpine AS runner

WORKDIR /app

# Set NODE_ENV to production for optimization
ENV NODE_ENV=production

# Copy only necessary files from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install only production dependencies
RUN yarn install --production --frozen-lockfile

# Use a non-root user for better security
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs
USER nextjs

# Expose port 3000 (default for Next.js)
EXPOSE 3000

# Start the Next.js app
CMD ["yarn", "start"]

