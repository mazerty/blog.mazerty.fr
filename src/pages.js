export default Object
    .entries(import.meta.glob("/src/pages/*", {eager: true}))
    .map(([path, page]) => {
        const [_, date, key] = /\/src\/pages\/(.*)_(.*)\.jsx/g.exec(path)
        return {"date": date, "key": key, ...page.default}
    })
