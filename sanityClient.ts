import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "5el21aj4",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
  // token: 'SANITY_API_READ_TOKEN', // فقط اگه دیتاست خصوصی داری و می‌خوای از سمت سرور fetch کنی لازم می‌شه
});
