const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_USERNAME: $env.BUILDABLE_GITHUB_ACCOUNT_USERNAME, // Required

    // filter: "assigned",
    // state: "open",
    // labels: "string",
    // sort: "created",
    // direction: "asc",
    // since: "2019-08-24T14:15:22Z",
    // per_page: 30,
    // page: 1,
  };
};
