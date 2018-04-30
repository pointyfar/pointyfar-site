```go-html-template
<h4>Authors</h4>
<button xx id="selectAllAuthors" onclick="htf.showAll('authors')">
  All Authors
</button>
{{ range $.Scratch.Get "authors" }}
  <button xx class="auth-button" id="auth-{{ . | replaceRE "[.]" "_" | urlize }}" onclick="htf.checkFilter('{{ . | replaceRE "[.]" "_" | urlize }}', 'auth-')">
    {{ . }}
  </button>
{{ end }}
{{ if gt ( $.Scratch.Get "noAuthors") 0 }}
<button xx class="auth-button" id="auth-no-author" onclick="htf.checkFilter('no-author', 'auth-')">
  No Author
</button>
{{ end }}
```