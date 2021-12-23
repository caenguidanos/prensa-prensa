# Prensa! Prensa!

![Diagram](./static/workspace-diagram.svg)

## Requirements

-  node: `16.13.0`
-  golang: `+1.17`
-  nvm
-  pnpm
-  docker

## Installation

```bash
pnpm install
```

```bash
docker pull mongo
```

## Packages

```
pnpm packages:build
pnpm packages:lint
pnpm packages:test
pnpm packages:format
```

## Apps

> `start` doesn't works if you not provides custom environment **variables** in script

```
pnpm apps:dev
pnpm apps:lint
pnpm apps:test
pnpm apps:build
pnpm apps:start
pnpm apps:e2e
```
