import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { MdDialog } from 'ng2-material/components/dialog';
import { MdDataTable } from 'ng2-material/components/data-table';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MdDialog,
    MdDataTable
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    //Ng2MaterialModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
