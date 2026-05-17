FROM node:20-alpine AS builder
WORKDIR /app
COPY app/package.json ./
RUN npm install --production
COPY app/src ./src
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app ./
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
EXPOSE 3000
CMD ["node", "src/index.js"]
