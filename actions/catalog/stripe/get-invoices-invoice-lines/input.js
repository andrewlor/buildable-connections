const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    invoice: "string", // Required

    // ending_before: "string",
    // expand: ["string"],
    // limit: 0,
    // starting_after: "string",
  };
};
