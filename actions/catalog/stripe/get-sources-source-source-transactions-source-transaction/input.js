const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_SECRET_KEY: $env.BUILDABLE_STRIPE_SECRET_KEY, // Required
    source: "string", // Required
    source_transaction: "string", // Required

    // expand: ["string"],
  };
};
