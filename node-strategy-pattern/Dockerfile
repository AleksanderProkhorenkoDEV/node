FROM node:23-alpine
WORKDIR /app

EXPOSE 3000

RUN npm i -g pnpm
COPY /app/package.json /app/pnpm-lock.yaml ./
RUN pnpm i

COPY /app .
RUN pnpm run build
CMD ["pnpm", "dev"]
