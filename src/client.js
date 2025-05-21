// /Sanity/client.js
import { createClient } from "@sanity/client";

 const client = createClient({
  projectId: "4oh569ed",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
export default client;
