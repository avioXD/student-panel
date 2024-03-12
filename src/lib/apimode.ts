interface ApiMode {
  isDevelopment: boolean;
  isProduction: boolean;
  isTest: boolean;
}

export const apiMode: ApiMode = {
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
  isTest: process.env.NODE_ENV === "test",
};
