interface ApiMode {
  isDevelopment: boolean;
  isProduction: boolean;
  isTest: boolean;
}

export const apiMode: ApiMode = {
  isDevelopment: process.env.API_ENV === "development",
  isProduction: process.env.API_ENV === "production",
  isTest: process.env.API_ENV === "test",
};
