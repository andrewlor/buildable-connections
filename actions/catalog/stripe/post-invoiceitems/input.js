const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    customer: "string", // Required

    // amount: 0,
    // currency: "string",
    // description: "string",
    // discountable: true,
    // discounts: [{ coupon: "string", discount: "string" }],
    // expand: ["string"],
    // invoice: "string",
    // metadata: { property1: "string", property2: "string" },
    // period: { end: 0, start: 0 },
    // price: "string",
    // price_data: {
    //     currency: "string",
    //     product: "string",
    //     tax_behavior: "exclusive",
    //     unit_amount: 0,
    //     unit_amount_decimal: "string"
    //   },
    // quantity: 0,
    // subscription: "string",
    // tax_rates: ["string"],
    // unit_amount: 0,
    // unit_amount_decimal: "string",
  };
};
