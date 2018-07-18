import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { JsonpModule } from '@angular/http';

/* components */
import { CardComponent } from './components/card/card.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TabsetComponent } from './components/tabset/tabset.component';
import { TabContentComponent } from './components/tabset/tab-content/tab-content.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FileTreeComponent } from './components/file-tree/file-tree.component';
import { SwitchComponent } from './components/switch/switch.component';
import { AlertComponent } from './components/alert/alert.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material/';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    MatTabsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatFormFieldModule, 
    MatInputModule,
    MatTooltipModule,
    MatDialogModule
  ],
  declarations: [
    CardComponent,
    FileTreeComponent,
    TodolistComponent,
    TabsetComponent,
    TabContentComponent,
    ProgressBarComponent,
    SwitchComponent,
    AlertComponent,
    WeatherComponent,
    ProfileComponent,
    CurrencyConverterComponent
  ],
  exports: [
    CardComponent,
    FileTreeComponent,
    TodolistComponent,
    TabsetComponent,
    TabContentComponent,
    ProgressBarComponent,
    SwitchComponent,
    AlertComponent,
    WeatherComponent,
    ProfileComponent,
    CurrencyConverterComponent,
    //Very important
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatFormFieldModule, 
    MatInputModule,
    MatTooltipModule,
    MatDialogModule
  ]
})
export class SharedModule { }
