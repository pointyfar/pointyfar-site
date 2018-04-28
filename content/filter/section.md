```go-html-template
<!-- The xx button attributes are from bare.css; ignore -->
<h4>Sections</h4>
<button xx id="selectAllSections" onclick="htf.showAll('section')">
  All Sections
</button>
{{ range $sections }}
  <button xx class="sect-button" id="sect-{{ . | urlize }}" onclick="htf.checkFilter('{{ . | urlize }}', 'sect-')">
    {{ . | title }}
  </button>
{{ end }}
```