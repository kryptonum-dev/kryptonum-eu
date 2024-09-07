export const isPreviewDeployment = import.meta.env.VERCEL_ENV === "preview" || import.meta.env.NODE_ENV !== "production";
