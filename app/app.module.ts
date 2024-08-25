import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


// Angular Material Modules
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

// Other Modules
import { ProgressBarModule } from 'angular-progress-bar';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { CKEditorModule } from 'ng2-ckeditor';
import { SlideshowModule } from 'intouch-screensaver';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TestComponent } from './test/test.component';
import { ScoreComponent } from './score/score.component';
import { LoginComponent } from './login/login.component';
import { MusicComponent } from './music/music.component';
import { JournalismComponent } from './journalism/journalism.component';
import { CaseComponent } from './case/case.component';
import { MotivateComponent } from './motivate/motivate.component';
import { KeyComponent } from './key/key.component';
import { MentalComponent } from './mental/mental.component';
import { SelfComponent } from './self/self.component';
import { DiaryComponent } from './diary/diary.component';
import { GratituteComponent } from './gratitute/gratitute.component';
import { ReciteComponent } from './recite/recite.component';
import { ExpertsComponent } from './experts/experts.component';
import { ScreenComponent } from './screen/screen.component';

// Routing Module
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    TestComponent,
    ScoreComponent,
    LoginComponent,
    MusicComponent,
    JournalismComponent,
    CaseComponent,
    MotivateComponent,
    KeyComponent,
    MentalComponent,
    SelfComponent,
    DiaryComponent,
    GratituteComponent,
    ReciteComponent,
    ExpertsComponent,
    ScreenComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      MatExpansionModule,
      MatFormFieldModule,
      MatInputModule,
      MatCheckboxModule,
      MatDialogModule,
      MatMenuModule,
      MatTabsModule,
      MatToolbarModule,
      MatButtonModule,
      MatGridListModule,
      MatCardModule,
      MatSelectModule,
      ProgressBarModule,
      NgxAudioPlayerModule,
      CKEditorModule,
      SlideshowModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
    })
    export class AppModule { }
    