const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    name: "string", // Required
    scope: { type: "account", user: "string" }, // Required

    // expand: ["string"],
  };
};
