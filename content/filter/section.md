```go-html-template
<h4>Sections</h4>
<button id="selectAllSections" onclick="htf.showAll('section')">
  All Sections
</button>
{{ range $sections }}
  <button class="sect-button" id="sect-{{ . | urlize }}" onclick="htf.checkFilter('{{ . | urlize }}', 'sect-')">
    {{ . | title }}
  </button>
{{ end }}
```