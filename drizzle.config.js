
/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://AI-Content_owner:2hNOCoMsK6WP@ep-spring-base-a1qkutri.ap-southeast-1.aws.neon.tech/AI-Content?sslmode=require',
  }
};