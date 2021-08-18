module.exports = {
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/base",
        "plugin:vue/vue3-essential",
        "plugin:vue/vue3-strongly-recommended",
        "plugin:vue/vue3-recommended",
        "eslint:recommended",
    ],
    // Расширения линтера
    plugins: ["vue", "prettier"],
};
