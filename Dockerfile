FROM node:lts as dependencies
WORKDIR /mambo-app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /mambo-app
COPY . .
COPY --from=dependencies /mambo-app/node_modules ./node_modules

ENV NEXT_PUBLIC_ELASTIC_SERVICE_NAME=boilerplate-frontend
ENV NEXT_PUBLIC_ELASTIC_SERVICE_URL=http://localhost:8200
ENV NEXT_PUBLIC_ELASTIC_SERVICE_VERSION=v.0.0.64
ENV NEXT_PUBLIC_ELASTIC_SERVICE_ENVIRONMENT=dev

RUN yarn build

FROM node:alpine as runner
WORKDIR /mambo-app
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /mambo-app/next.config.js ./
COPY --from=builder /mambo-app/public ./public
COPY --from=builder /mambo-app/.next ./.next
COPY --from=builder /mambo-app/.next ./.jest
COPY --from=builder /mambo-app/node_modules ./node_modules
COPY --from=builder /mambo-app/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]