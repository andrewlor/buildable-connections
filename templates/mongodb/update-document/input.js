const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_MONGODB_CONNECTION_KEY: $env.BUILDABLE_MONGODB_CONNECTION_KEY, // Required
    collection: "collection-1", // Required
    id: "61d62cf94bed0700133c866a", // Required
    // convertToObjectId: true,

    key: "updated",
    // otherKeys: 10051164
  };
};
