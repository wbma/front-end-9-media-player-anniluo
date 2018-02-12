import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewSingleFilesPage } from './view-single-files';

@NgModule({
  declarations: [
    ViewSingleFilesPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewSingleFilesPage),
  ],
})
export class ViewSingleFilesPageModule {}
