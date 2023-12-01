import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Subject, scan, takeUntil } from 'rxjs';

const Themes = { lightWhite: 'light-theme-white-text', lightBlack: 'light-theme-black-text', darkWhite: 'dark-theme-white-text', darkBlack: 'dark-theme-black-text' } as const;
type Theme = typeof Themes[keyof typeof Themes];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatIconModule, MatSlideToggleModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Angular Material Contrast Fix';

  readonly themeControl = this.fb.nonNullable.control<Theme>(Themes.lightWhite);

  get themes() {
    return Themes;
  }

  private readonly destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.subscribeToTheme();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private subscribeToTheme() {
    this.themeControl.valueChanges.pipe(
      scan((acc, val) => ({ prev: acc.next, next: val }), { prev: this.themeControl.value, next: this.themeControl.value }),
      takeUntil(this.destroy$)
    ).subscribe(theme => {
      this.renderer.removeClass(this.document.body, theme.prev);
      this.renderer.addClass(this.document.body, theme.next);
    });
  }

}
