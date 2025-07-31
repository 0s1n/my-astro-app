export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // Nueva funcionalidad
        "fix", // Corrección de errores
        "docs", // Documentación
        "style", // Cambios de formato (espacios, comas, etc.)
        "refactor", // Refactorización del código
        "perf", // Mejoras de rendimiento
        "test", // Agregar o corregir tests
        "chore", // Mantenimiento del código
        "ci", // Cambios en CI/CD
        "build", // Cambios en el sistema de build
        "revert", // Revertir un commit anterior
      ],
    ],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "scope-case": [2, "always", "lower-case"],
    "subject-case": [2, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 72],
    "body-leading-blank": [1, "always"],
    "body-max-line-length": [2, "always", 100],
    "footer-leading-blank": [1, "always"],
    "footer-max-line-length": [2, "always", 100],
  },
};
