import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCreativeCommons, faCreativeCommonsBy, faCreativeCommonsNcEu, faCreativeCommonsSa} from "@fortawesome/free-brands-svg-icons"

export default () => (
    <footer className="pt-20 bg-gray-700 text-gray-400 text-xs text-center">
        <div><FontAwesomeIcon icon={faCreativeCommons}/> <FontAwesomeIcon icon={faCreativeCommonsBy}/> <FontAwesomeIcon icon={faCreativeCommonsNcEu}/> <FontAwesomeIcon icon={faCreativeCommonsSa}/></div>
        <div>Licensed under the <a href="https://creativecommons.org/licenses/by-nc-sa/4.0">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.</div>
        <div>Powered by <a href="https://reactjs.org">React</a>, <a href="https://vitejs.dev">Vite</a>, <a href="https://tailwindcss.com">Tailwind</a>, <a href="https://fontsource.org">Fontsource</a>, <a href="https://fontawesome.com">Font Awesome</a> and hosted on <a href="https://github.com/mazerty/blog.mazerty.fr">GitHub</a>.</div>
    </footer>
)
