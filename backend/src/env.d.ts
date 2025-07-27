declare module NodeJS {
  interface ProcessEnv {
    ATLAS_URL: string;
    JWT_SECRET_KEY: string;
  }
}
