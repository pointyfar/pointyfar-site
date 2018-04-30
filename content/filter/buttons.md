For each filter set you want to use, generate buttons (or your preferred element) to use as toggles. For each button:

- Assign an id beginning with the `prefix` defined in its config. 

- Assign the class defined as `buttonClass`.

- Set `onclick="htf.checkFilter()"`, passing as parameters the term and the `prefix`

- Add a 'Select All x' button as well. 
  - Set `onclick="htf.showAll('x')"`
  - Assign an id matching the configured `allSelector`

