FROM node:23-alpine
WORKDIR /app

EXPOSE 3000

RUN npm install -g pnpm

COPY ./app/package.json ./app/pnpm-lock.yaml ./
RUN pnpm install

COPY ./app .
RUN pnpm run build
CMD ["pnpm", "dev"]