# Node

A collection of Node.js projects covering API architecture, design patterns, CI/CD pipelines, and code quality tooling. Built with TypeScript throughout.

---

## Projects

### api-crud

A REST CRUD API built without frameworks, following Clean Architecture principles. Separates concerns into distinct layers: domain, use cases, and infrastructure. No Express abstractions — just Node.js HTTP and a deliberate structure.

### node-strategy-pattern

Demonstrates the Strategy Design Pattern in TypeScript. Shows how to define a family of algorithms, encapsulate each one, and make them interchangeable at runtime. Uses mathematical operations as a practical example to illustrate dynamic algorithm switching without modifying the client code.

### node-cicd

First iteration of a CI pipeline using GitHub Actions. Covers the basics of automating build and test steps on push.

### learnt-eslint

ESLint configuration and usage in a Node.js/TypeScript project. Documents rule setup, plugin integration, and enforcement across the codebase.

### node-jest

Testing setup with Jest in a Node.js/TypeScript environment. Currently in progress — dependencies installed, structure defined. Active development pending.

---

## CI/CD

Two GitHub Actions workflows are configured in `.github/workflows`:

- **ci-basic** - Runs tests and build using pnpm on the main Node.js project.
- **ci-strategy-pattern** - Same pipeline applied to the `node-strategy-pattern` project.

---

## Technologies

| Technology | Usage |
|---|---|
| TypeScript | All projects |
| Node.js (no framework) | api-crud |
| Jest | node-jest |
| ESLint | learnt-eslint |
| GitHub Actions | .github/workflows |
| pnpm | All projects |

---

## Purpose

This repository explores backend development fundamentals in Node.js: building without abstractions, applying design patterns, enforcing code quality, and automating pipelines. Each project isolates a specific concept rather than combining everything into a single codebase.
