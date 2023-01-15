import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"
import tailwind from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme.js"

export default defineConfig({
    plugins: [react()],
    css: {
        postcss: {
            plugins: [
                tailwind({
                    content: ["./index.html", "./src/**/*.jsx"],
                    theme: {
                        extend: {
                            fontFamily: {
                                sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
                                specialelite: ["Special Elite", ...defaultTheme.fontFamily.sans]
                            }
                        }
                    }
                })
            ]
        }
    }
})
