import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ButtonComponent} from './components/button/button.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {TaskItemComponent} from './components/task-item/task-item.component';
import {FooterComponent} from './components/footer/footer.component';
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from './components/about/about.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AddTaskComponent} from './components/add-task/add-task.component';


const appRoutes: Routes = [
  {path: '', component: TasksComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    FooterComponent,
    AboutComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    FontAwesomeModule,
    HttpClientModule,
    FormsModule //  to enable, 2 way data binding between properties and input in component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
