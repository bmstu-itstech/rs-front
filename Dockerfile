FROM node:22.16-alpine AS dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install

FROM node:22.16-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules


ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_CAN_SEND_MESSAGES=true
ENV CORS_ORIGIN_ALLOW_ALL=true


RUN npx next build

FROM node:22.16-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npx", "next", "start"]
