import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NotesComponent } from './notes/notes.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ReminderComponent } from './reminder/reminder.component';
import { EditComponent } from './edit/edit.component';
import { ArchiveComponent } from './archive/archive.component';
import { TrashComponent } from './trash/trash.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { DialogComponent } from './dialog/dialog.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    
    
    SideNavComponent,
    NotesComponent,
    SidenavbarComponent,
  
    ReminderComponent,
    EditComponent,
    ArchiveComponent,
    TrashComponent,
    DialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
