FROM node:22.16-alpine AS dependencies

WORKDIR /rs-front-rw

COPY package*.json ./

RUN npm install

FROM node:22.16-alpine AS builder
WORKDIR /rs-front-rw
COPY . .
COPY --from=dependencies /rs-front-rw/node_modules ./node_modules
RUN npx next build

FROM node:22.16-alpine AS runner
WORKDIR /rs-front-rw
ENV NODE_ENV=production

COPY --from=builder /rs-front-rw/public ./public
COPY --from=builder /rs-front-rw/package.json ./package.json
COPY --from=builder /rs-front-rw/.next ./.next
COPY --from=builder /rs-front-rw/node_modules ./node_modules

EXPOSE 3000
CMD ["npx", "next", "start"]