# Fixes for angular material palette contrast issues
Since angular material version 15, some components haven't been using contrast colours specified in custom palettes. These being:
- Buttons
	- Flat
	- Raised
	- Fab
	- Mini fab
- Slide toggle
- Checkbox
- Datepicker
Hopefully the issue ([bug(button): Palette contrast values are not applied · Issue #26056 · angular/components (github.com)](https://github.com/angular/components/issues/26056#issuecomment-1823079154)) is addressed soon and can mark this depreciated.
## Getting started
- Install the package with `npm install angular-material-contrast-fix`
- Import into your theming file with `@use 'angular-material-contrast-fix'`
- After including component themes/colors for angular material with your custom palettes, include the additional styles provided. E.g.
```
@include mat.all-component-themes($my-custom-theme);
@include angular-material-contrast-fix.all-component-themes($my-custom-theme);
```

- There are additional mixins provided if you only want to import specific styles, rather than all of them:

| Mixin | Components |
| -- | -- |
| all-component-themes | All the components below |
| button-theme | Buttons |
| slide-toggle-theme | Side toggle |
| checkbox-theme | Checkbox |
| datepicker-theme | Datepicker |

- Alternatively, just go to the github page and copy the styles
