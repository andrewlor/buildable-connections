const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_SLACK_ACCESS_TOKEN: $env.BUILDABLE_SLACK_ACCESS_TOKEN, // Required
    team_id: "string", // Required

    // cursor: "string",
    // limit: 0,
  };
};
