import {describe, expect, test} from "vitest"
import pages from "./pages.js"

describe("an article", () => {
    test("must have a date property that is a string", () => {
        pages.forEach(page => {
            expect(page).toHaveProperty("date")
            expect(page.date).toEqual(expect.any(String))
        })
    })
    test("must have a key property that is a string", () => {
        pages.forEach(page => {
            expect(page).toHaveProperty("key")
            expect(page.key).toEqual(expect.any(String))
        })
    })
    test("must have a title property that is a string", () => {
        pages.forEach(page => {
            expect(page).toHaveProperty("title")
            expect(page.title).toEqual(expect.any(String))
        })
    })
    test("must have a description property that is a string", () => {
        pages.forEach(page => {
            expect(page).toHaveProperty("description")
            expect(page.description).toEqual(expect.any(String))
        })
    })
    test("must have a language property that is either 'en' or 'fr'", () => {
        pages.forEach(page => {
            expect(page).toHaveProperty("language")
            expect(["en", "fr"]).toContain(page.language)
        })
    })
    test("must have a content property that is a function", () => {
        pages.forEach(page => {
            expect(page).toHaveProperty("content")
            expect(page.content).toEqual(expect.any(Function))
        })
    })
})

test("keys must be unique", () => {
    expect(new Set(pages.map(page => page.key)).size).toEqual(pages.length)
})
