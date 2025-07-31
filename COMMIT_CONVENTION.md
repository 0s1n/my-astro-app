# Guía de Conventional Commits

## Formato básico:

```
<tipo>[alcance opcional]: <descripción>

[cuerpo opcional]

[pie opcional]
```

## Flujo automático con Husky:

### Pre-commit:

1. Ejecuta `pnpm run lint:fix` automáticamente
2. Si hay cambios de linting, crea un commit automático con formato: `style: <descripción del commit original>`
3. Valida el mensaje de commit con conventional commits

### Pre-push:

1. Ejecuta linting final y crea commit de estilo si es necesario
2. Ejecuta `pnpm run build` para verificar que todo compila
3. Solo permite el push si todo está correcto

## Ejemplo de flujo:

```bash
# Tu commit original
git add package.json
git commit -m "feat: add i18n support"

# Si hay cambios de linting, automáticamente se crea:
# - Commit adicional: "style: add i18n support"

# Al hacer push, se verifica build y linting final
git push
```

## Tipos permitidos:

- **feat**: Nueva funcionalidad
- **fix**: Corrección de errores
- **docs**: Documentación
- **style**: Cambios de formato (espacios, comas, etc.)
- **refactor**: Refactorización del código
- **perf**: Mejoras de rendimiento
- **test**: Agregar o corregir tests
- **chore**: Mantenimiento del código
- **ci**: Cambios en CI/CD
- **build**: Cambios en el sistema de build
- **revert**: Revertir un commit anterior

## Ejemplos válidos:

```
feat: add user authentication system
fix: resolve navigation bug on mobile devices
docs: update README with installation steps
style: format code with prettier
refactor: simplify user validation logic
perf: optimize image loading performance
test: add unit tests for authentication
chore: update dependencies
ci: add GitHub Actions workflow
build: update astro configuration
```

## Ejemplos con alcance:

```
feat(auth): add login functionality
fix(ui): resolve button alignment issue
docs(api): add endpoint documentation
```

## Con cuerpo y pie:

```
feat: add user authentication system

Implement JWT-based authentication with login and logout functionality.
Includes password hashing and session management.

Closes #123
```

## Reglas importantes:

- El tipo debe estar en minúsculas
- La descripción debe comenzar con minúscula
- No terminar la descripción con punto
- Máximo 72 caracteres en el encabezado
- Usar imperativo ("add" no "added" o "adds")
