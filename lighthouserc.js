module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      startServerCommand: "npm run dev",
    },
    assert: {
      assertions: {
        "first-contentful-paint": ["warn", { maxNumbericValue: 4000 }],
        "categories:performance": ["warn", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 1 }],
        "installable-manifest": "on",
        "service-worker": "on",
        "works-offline": "on",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
