```go-html-template
<h4>Tags</h4>
<button class="" id="selectAllTags" onclick="htf.showAll('tags')">
  All Tags
</button>
{{ range $tags }}
  {{ if .Term }}
    <button class="tag-button" id="tag-{{ .Term | replaceRE "[.]" "_" | urlize }}" onclick="htf.checkFilter('{{ .Term | replaceRE "[.]" "_" | urlize }}', 'tag-')">
      <span>{{.Term | humanize | title }}</span>
      <span> ({{.Count}})</span>
    </button>
  {{ end }}
{{ end }}
{{ if gt ( $.Scratch.Get "untagged") 0 }}
<button class="tag-button" id="tag-tfuntagged" onclick="htf.checkFilter('tfuntagged', 'tag-')">
  Untagged ({{ $.Scratch.Get "untagged" }})
</button>
{{ end }}

```