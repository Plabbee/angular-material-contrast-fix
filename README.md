# Fixes for angular material palette contrast issues
Between @angular/material versions 15 - 17.2.1, some components hadn't been using contrast colours specified in custom palettes. These being:
- Buttons
	- Flat
	- Raised
	- Fab
	- Mini fab
- Slide toggle
- Checkbox
- Datepicker

This is based on the issue ([bug(button): Palette contrast values are not applied · Issue #26056 · angular/components (github.com)](https://github.com/angular/components/issues/26056#issuecomment-1823079154)).

As of @angular/material 17.2.2 this issue has been closed, and contrast issues fixed for buttons, checkboxes, and datepickers. The slide toggle issue remains, but this is working as prior to @angular/material 15, so this remains in case the altered behaviour is your personal preference.

## Getting started
- Install the package with `npm install angular-material-contrast-fix`
- Import into your theming file with `@use 'angular-material-contrast-fix'`
- After including component themes/colors for angular material with your custom palettes, include the additional styles provided. E.g.
```
@include mat.all-component-themes($my-custom-theme);
@include angular-material-contrast-fix.all-component-themes($my-custom-theme);
```

- There are additional mixins provided if you only want to import specific styles, rather than all of them:

| Mixin | Components | Notes on version |
| -- | -- | -- |
| all-component-themes | All the components below | - |
| button-theme | Buttons | Depreciated as of 17.2.2, removed in 18 |
| slide-toggle-theme | Side toggle | - |
| checkbox-theme | Checkbox | Depreciated as of 17.2.2, removed in 18 |
| datepicker-theme | Datepicker | Depreciated as of 17.2.2, removed in 18 |

- For more help, have a look at the demo app on the github page
- Alternatively to using npm, just go to the github page and copy the styles

## Versions
| @angular/material version | angular-material-contrast-fix version | Reason |
| -- | -- | -- | 
| 15, 16 | 16 | - | 
| 17.0.0 - 17.2.1 | 17.2.1 | Switches to use new get-theme-color mixin available in @angular/material 17 | 
| 17.2.2 - 18.* | 18 | Existing issue has been fixed in @angular/material for buttons, checkboxes and datepickers. The slide toggle issue remains, but this is working as prior to @angular/material 15, so this remains in case the altered behaviour is your personal preference. | 
