const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const { BUILDABLE_STRIPE_API_KEY, promotion_code, active, expand, metadata, restrictions } =
    input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/promotion_codes/${promotion_code}`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(active ? { active } : {}),
        ...(expand ? { expand } : {}),
        ...(metadata ? { metadata } : {}),
        ...(restrictions ? { restrictions } : {}),
      }),
    });

    return data;
  } catch (error) {
    return {
      failed: true,
      message: error.message,
      data: error.response.data,
    };
  }
};

/**
 * Verifies the input parameters
 */
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, promotion_code }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_PROMOTION_CODE: "A valid promotion_code field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof promotion_code !== "string") throw new Error(ERRORS.INVALID_PROMOTION_CODE);
};
