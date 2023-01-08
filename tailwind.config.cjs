const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
    content: ["./index.html", "./src/**/*.jsx"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
                specialelite: ["Special Elite", ...defaultTheme.fontFamily.sans]
            }
        }
    }
}
