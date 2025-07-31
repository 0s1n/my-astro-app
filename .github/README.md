# 🚀 GitHub Actions CI/CD Pipeline

Este workflow se ejecuta automáticamente en cada push y pull request para asegurar la calidad del código.

## 📋 Jobs del Pipeline

### 1. 📝 Validate Commits

- **Cuándo**: En todos los push y PRs
- **Qué hace**: Valida que todos los mensajes de commit sigan Conventional Commits
- **Herramientas**: `@commitlint/cli` + `@commitlint/config-conventional`

### 2. 🔍 Lint & Format

- **Cuándo**: En paralelo con otros jobs
- **Qué hace**:
  - Ejecuta ESLint para verificar calidad de código
  - Verifica que el código esté formateado con Prettier
- **Herramientas**: `eslint`, `prettier`

### 3. 🏗️ Build & Test

- **Cuándo**: En paralelo con otros jobs
- **Qué hace**:
  - Construye el proyecto con Astro
  - Ejecuta tests (si existen)
  - Sube artifacts del build
- **Herramientas**: `astro build`

### 4. 🔍 Type Check

- **Cuándo**: En paralelo con otros jobs
- **Qué hace**:
  - Verifica tipos de TypeScript
  - Genera tipos de Cloudflare Workers
- **Herramientas**: `tsc`, `wrangler types`

## 🔄 Flujo Completo

````
Local Development (Husky)       →    GitHub Actions (Verification)
─────────────────────                ──────────────────────────────
1. Pre-commit                        1. Validate commits
   - lint:fix (auto-fix)              2. Lint check (verify only)
   - format (auto-format)             3. Format check (verify only)
   - auto style commits               4. Build project
                                      5. Type checking
2. Commit-msg
   - validate conventional            ✅ All checks should pass
                                     (because Husky already fixed everything)
3. Pre-push
   - lint:fix & format               🚀 Ready to merge/deploy
   - build check
   - auto style commits
```## ✅ Estados del Pipeline

- **✅ All checks passed**: Todo está listo para merge
- **❌ Commit validation failed**: Mensajes no siguen conventional commits
- **❌ Lint failed**: Problemas de calidad de código
- **❌ Format check failed**: Código no está formateado
- **❌ Build failed**: El proyecto no compila
- **❌ Type check failed**: Errores de TypeScript

## 🛠️ Comandos Locales

Para reproducir las verificaciones localmente:

```bash
# Validar formato
pnpm run format:check

# Arreglar formato
pnpm run format

# Linting
pnpm run lint

# Arreglar linting
pnpm run lint:fix

# Build
pnpm run build

# Type check
pnpm exec tsc --noEmit

# Generar tipos CF
pnpm run cf-typegen
````
