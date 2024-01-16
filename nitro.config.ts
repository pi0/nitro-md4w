import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  experimental: {
    wasm: true,
  },
  esbuild: {
    options: {
      target: "esnext",
    },
  },
});
