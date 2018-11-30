import MarkdownIt from "../../../markdown-it.gozala.io/lib/index.js"
import template from "./template.js"
import highlight from "../../../highlightjs.org/highlight.pack.js"

const markdownIt = new MarkdownIt({
  highlight(code, lang) {
    if (lang && highlight.getLanguage(lang)) {
      try {
        return highlight.highlight(lang, code).value
      } catch (_) {}
    }
    
    return highlight.highlightAuto(code).value
  }
})

export default template(function(string) {
  const root = document.createElement("div")
  root.innerHTML = markdownIt.render(string).trim()
  return root
}, function() {
  return document.createElement("div")
})