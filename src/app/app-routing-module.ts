import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './component/home/home.component';
import { FormsComponent } from './component/forms/forms.component';


@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot([
      { path: '',  redirectTo: 'home', pathMatch:'full' },
      { path: 'home', component: HomeComponent },
      { path: 'overviewforms', component: FormsComponent }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


