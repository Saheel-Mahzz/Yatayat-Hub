FROM node:22-alpine

RUN corepack enable && corepack prepare pnpm@9.15.4 --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

# Static page collection/prerender issue bypass garne
ENV NEXT_TELEMETRY_DISABLED=1

RUN ./node_modules/.bin/next build

EXPOSE 3000

CMD ["node", ".next/standalone/server.js"]