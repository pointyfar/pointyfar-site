```js
var htfConfig = {
  filters: [
    {
      name: 'section',
      prefix: 'sect-',
      buttonClass: 'sect-button',
      allSelector: '#selectAllSections',
      attrName: 'data-section'
    },
    {
      name: 'tags',
      prefix: 'tag-',
      buttonClass: 'tag-button',
      allSelector: '#selectAllTags',
      attrName: 'data-tags'
    },
    {
      name: 'authors',
      prefix: 'auth-',
      buttonClass: 'auth-button',
      allSelector: '#selectAllAuthors',
      attrName: 'data-authors'
    }
  ],
  showItemClass: "show-item",
  filterItemClass: "tf-filter-item",
  activeButtonClass: "active",
  counterSelector: "selectedItemCount"
} 
var htf = new HugoTagsFilter(htfConfig);
```