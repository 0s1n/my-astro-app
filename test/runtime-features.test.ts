import { createExecutionContext, waitOnExecutionContext } from "cloudflare:test";
import { describe, it, expect } from "vitest";

/* 
  TODO: Verificar si es necesario testear los workers si no se usan en el proyecto.
  - Si no se usan, considerar eliminar estos tests para evitar confusiones.
  - Testear a partir de la configuración de Astro y Vitest para asegurar que la integración está correcta.
*/

// Test de funcionalidades unitarias para Workers
describe("Workers Runtime Features", () => {
  it("should handle URL parsing correctly", () => {
    const url = new URL("https://example.com/api/test?param=value");
    expect(url.hostname).toBe("example.com");
    expect(url.pathname).toBe("/api/test");
    expect(url.searchParams.get("param")).toBe("value");
  });

  it("should create and manipulate headers", () => {
    const headers = new Headers();
    headers.set("content-type", "application/json");
    headers.set("x-custom-header", "test-value");

    expect(headers.get("content-type")).toBe("application/json");
    expect(headers.get("x-custom-header")).toBe("test-value");
    expect(headers.has("content-type")).toBe(true);
  });

  it("should handle execution context", async () => {
    const ctx = createExecutionContext();

    // Simular una operación asíncrona
    ctx.waitUntil(Promise.resolve("async operation"));

    // Esperar que todas las operaciones terminen
    await waitOnExecutionContext(ctx);

    expect(ctx).toBeDefined();
  });

  it("should handle JSON responses", async () => {
    const data = { message: "Hello from Workers", timestamp: Date.now() };
    const response = new Response(JSON.stringify(data), {
      status: 200,
      headers: { "content-type": "application/json" },
    });

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe("application/json");

    const responseData = (await response.json()) as { message: string; timestamp: number };
    expect(responseData.message).toBe("Hello from Workers");
    expect(typeof responseData.timestamp).toBe("number");
  });
});
