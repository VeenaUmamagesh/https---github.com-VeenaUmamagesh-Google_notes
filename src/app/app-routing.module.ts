import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './archive/archive.component';

import { EditComponent } from './edit/edit.component';
import { NotesComponent } from './notes/notes.component';
import { ReminderComponent } from './reminder/reminder.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TrashComponent } from './trash/trash.component';

const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
