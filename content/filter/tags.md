```go-html-template
<h4>Tags</h4>
<button xx class="" id="selectAllTags" onclick="htf.showAll('tags')">
  All Tags
</button>
{{ range $tags }}
  {{ if .Term }}
    <button xx class="tag-button" id="tag-{{ .Term | replaceRE "[.]" "_" | urlize }}" onclick="htf.checkFilter('{{ .Term | replaceRE "[.]" "_" | urlize }}', 'tag-')">
      <span>{{.Term | humanize | title }}</span>
      <span> ({{.Count}})</span>
    </button>
  {{ end }}
{{ end }}
{{ if gt ( $.Scratch.Get "untagged") 0 }}
<button xx class="tag-button" id="tag-tfuntagged" onclick="htf.checkFilter('tfuntagged', 'tag-')">
  Untagged ({{ $.Scratch.Get "untagged" }})
</button>
{{ end }}

{{ with .Resources.GetMatch "tags.md" }}
{{ partial "accordion.html" (dict "panelLabel" "Show: Tag Buttons" "panelContent" .Content )}}
{{ end }}

```