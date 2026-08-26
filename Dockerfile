FROM node:22-alpine

RUN corepack enable && corepack prepare pnpm@9.15.4 --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

# Direct Next.js binary bata build gareko (workspace issue bypassed)
RUN ./node_modules/.bin/next build

EXPOSE 3000

# CMD ["pnpm", "start"]
CMD ["./node_modules/.bin/next", "start"]