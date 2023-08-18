declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly NEXT_PUBLIC_API_THEME_URL: string;
    readonly NEXT_PUBLIC_API_CODE_URL: string;
    readonly NEXT_PUBLIC_API_RESULT_URL: string;
  }
}
