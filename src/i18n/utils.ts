import { ui } from "./ui";

// ===== CONSTANTES =====
export const defaultLang = "es" as const;
export const supportedLanguages = ["en", "es"] as const;

// ===== TIPOS LOCALES =====
// Mantenemos los tipos locales para compatibilidad, pero ahora apuntan a los globales
export type Lang = (typeof supportedLanguages)[number];
export type UI = typeof ui;

// ===== FUNCIONES DE UTILIDAD =====

/**
 * Extrae el idioma de la URL usando el enrutamiento de Astro
 */
export function getLangFromUrl(url: URL): Lang {
  const langCandidate = url.pathname.split("/")[1]?.toLocaleLowerCase();
  return isSupportedLanguage(langCandidate) ? langCandidate : defaultLang;
}

/**
 * Verifica si un string es un idioma soportado
 */
function isSupportedLanguage(lang: string | undefined): lang is Lang {
  return !!lang && supportedLanguages.includes(lang as Lang);
}

/**
 * Hook para obtener traducciones tipadas
 * Ahora retorna el tipo TranslationFunction definido globalmente
 */
export function useTranslations<L extends Lang>(currentLang: L) {
  return function t<Key extends keyof (typeof ui)[typeof defaultLang]>(
    key: Key
  ): (typeof ui)[L][Key] {
    return ui[currentLang]?.[key] || ui[defaultLang][key];
  };
}

/**
 * Genera las rutas estáticas para todos los idiomas
 * Retorna el tipo correcto para getStaticPaths de Astro
 */
export function generateStaticPaths() {
  return supportedLanguages.map((lang) => ({
    params: { lang },
  }));
}

/**
 * Obtiene la dirección del texto para un idioma
 */
export function getTextDirection(lang: Lang): "ltr" | "rtl" {
  // Agregar idiomas RTL aquí si es necesario
  const rtlLanguages: Lang[] = [];
  return rtlLanguages.includes(lang) ? "rtl" : "ltr";
}
