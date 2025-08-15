import { env, createExecutionContext, waitOnExecutionContext } from "cloudflare:test";
import { describe, it, expect } from "vitest";

// Test básico de la configuración de Vitest con Workers
describe("Vitest Workers Configuration", () => {
  it("should have access to cloudflare:test module", () => {
    expect(env).toBeDefined();
    expect(createExecutionContext).toBeDefined();
    expect(waitOnExecutionContext).toBeDefined();
  });

  it("should be running in Workers runtime", () => {
    // Verificar que estamos en el runtime de Workers
    expect(typeof Request).toBe("function");
    expect(typeof Response).toBe("function");
    expect(typeof fetch).toBe("function");
  });

  it("should handle basic Request/Response", async () => {
    const request = new Request("http://example.com/test");
    const response = new Response("Hello from Workers runtime!", {
      status: 200,
      headers: { "content-type": "text/plain" },
    });

    expect(request.url).toBe("http://example.com/test");
    expect(response.status).toBe(200);
    expect(await response.text()).toBe("Hello from Workers runtime!");
  });
});
