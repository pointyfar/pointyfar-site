---
title: "Using Material Components for the Web"
date: 2018-03-28T13:21:38+10:00
draft: false
---

Hello! This post is me documenting how I got [Material Components for the Web](https://material.io/components/web/) working in a Hugo theme. I'm sure there are better-written posts out there, but I wanted to write this one myself, for myself, because for sure in about a week or so I will have forgotten how exactly I was able to get this done.

I am writing this as I go along, so I'm not actually sure I will succeed, so fingers crossed!

## Really getting started

I am starting this on a new empty Hugo site, with a new empty Hugo theme. 

```bash
$ hugo new site my-site
$ hugo new theme my-theme
$ hugo new post/hello-world.md
$ hugo server
```
This won't display anything, because we have no layouts defined as yet.

A few files to get us started: 

```html
<!-- my-theme/layouts/_default/baseof.html -->
{{ partial "header.html" . }}
{{ block "main" . }}
{{ end }}
{{ partial "footer.html" . }}
```

```html
<!-- my-theme/layouts/header.html -->
<!DOCTYPE html>
<html{{ with .Site.LanguageCode }} lang="{{ . }}"{{ end }}>
<head>
</head>
<body>
```

```html
<!-- my-theme/layouts/partials/footer.html -->
</body>
</html>
```

```html
<!-- my-theme/layouts/index.html -->
{{ define "main" }}
  {{ range first 1 ( where .Site.RegularPages.ByPublishDate.Reverse ".Type" "post") }}
  <!-- Display LATEST published blog post  -->
    {{ .Title }}
    {{ .Content }}
  {{ end }}
{{ end }}
```

These should be enough to get us started. Running `$hugo server` should let us see something when we navigate to `localhost:1313`.

{{< image resource="images/screenshot01.png" alt="Screenshot">}}

---

## Setting MDC up

Following along with the [instructions](https://material.io/components/web/docs/) on the material website (using `yarn` instead of `npm`): 

```bash
# in mytheme/
$ yarn init 
$ yarn add material-components-web
$ yarn add webpack@3 webpack-dev-server@2 css-loader sass-loader node-sass extract-loader file-loader

```
and adding a few scripts to my `package.json`

```json
"scripts": {
  "dev": "webpack --watch --config webpack.config.js",
  "build": "webpack -p --config webpack.config.js"
}
```

...and I'm good to go!

I could/should probably use `gulp` or similar so I can run `hugo serve` and `yarn run dev` in one go, but for now this works well enough for me and I can focus on actually putting a theme together.


