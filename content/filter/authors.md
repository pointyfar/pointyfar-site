```go-html-template
<h4>Authors</h4>
<button xx id="selectAllAuthors" onclick="htf.showAll('authors')">
  All Authors
</button>
{{ range $.Scratch.Get "authors" }}
  <button xx class="auth-button" id="auth-{{ . | urlize }}" onclick="htf.checkFilter('{{ . | urlize }}', 'auth-')">
    {{ . }}
  </button>
{{ end }}
```