// Gets the URL for the current environment
export const getAbsoluteURL = (relativePath: string) => {
  const baseURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3036"
      : process.env.NODE_ENV === "production" && process.env["VERCEL_URL"]
      ? `https://${process.env["VERCEL_URL"]}`
      : "http://localhost:3000";
  return baseURL + relativePath;
};
