module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run dev",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
