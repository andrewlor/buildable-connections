const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_USERNAME: $env.BUILDABLE_GITHUB_ACCOUNT_USERNAME, // Required
    installation_id: 0, // Required

    // repositories: ["rails"],
    // repository_ids: [1],
    // permissions: { contents: "read", issues: "read", deployments: "write", single_file: "read" },
  };
};
