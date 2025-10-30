import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: 'https://rare-gnat-92.clerk.accounts.dev',
      applicationID: "convex",
    },
  ]
} satisfies AuthConfig;