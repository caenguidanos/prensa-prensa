FROM node:16.13.0-alpine
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /workspace
RUN npm i -g pnpm
COPY . .
RUN pnpm install
RUN pnpm build --filter backend-services-articles-command
ENV NODE_ENV production
ENV PORT 4002
EXPOSE 4002
CMD ["pnpm", "start", "--filter", "backend-services-articles-command"]