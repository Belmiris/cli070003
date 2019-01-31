import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HomeComponent } from './home.component';
import { LessonsComponent } from './lessons/lessons.component';
import { ApplicationComponent } from './application/application.component';
import { NotDoneYetComponent } from './lessons/not-done-yet.component';
import { Lesson011Component } from './lessons/lesson011.component';
import { Lesson012Component } from './lessons/lesson012.component';
import { Lesson013Component } from './lessons/lesson013.component';
import { Lesson014Component } from './lessons/lesson014.component';
import { Lesson015Component } from './lessons/lesson015.component';
import { Lecture016Component } from './lessons/lecture016/lecture016.component';
import { Lecture017Component } from './lessons/lecture017/lecture017.component';
import { Lecture018Component } from './lessons/lecture018/lecture018.component';
import { Lecture019Component } from './lessons/lecture019/lecture019.component';
import { Lecture020Component } from './lessons/lecture020/lecture020.component';
import { Lecture021Component } from './lessons/lecture021/lecture021.component';
import { Assignment001Component } from './assignments/assignment001/assignment001.component';
import { Lecture022Component } from './lessons/lecture022/lecture022.component';
import { Lecture023Component } from './lessons/lecture023/lecture023.component';
import { Lecture024Component } from './lessons/lecture024/lecture024.component';
import { Lecture025Component } from './lessons/lecture025/lecture025.component';
import { Lecture026Component } from './lessons/lecture026/lecture026.component';
import { Lecture027Component } from './lessons/lecture027/lecture027.component';
import { Lecture028Component } from './lessons/lecture028/lecture028.component';
import { Lecture029Component } from './lessons/lecture029/lecture029.component';
import { Lecture030Component } from './lessons/lecture030/lecture030.component';
import { Lecture031Component } from './lessons/lecture031/lecture031.component';
import { Lecture032Component } from './lessons/lecture032/lecture032.component';
import { Lecture033Component } from './lessons/lecture033/lecture033.component';
import { Lecture034Component } from './lessons/lecture034/lecture034.component';
import { Lecture035Component } from './lessons/lecture035/lecture035.component';
import { Lecture037Component } from './lessons/lecture037/lecture037.component';
import { Lecture038Component } from './lessons/lecture038/lecture038.component';
import { Lecture039Component } from './lessons/lecture039/lecture039.component';
import { Lecture040Component } from './lessons/lecture040/lecture040.component';
import { Lecture041Component } from './lessons/lecture041/lecture041.component';
import { Lecture042Component } from './lessons/lecture042/lecture042.component';
import { Lecture043Component } from './lessons/lecture043/lecture043.component';
import { Lecture044Component } from './lessons/lecture044/lecture044.component';
import { Lecture045Component } from './lessons/lecture045/lecture045.component';
import { Lecture046Component } from './lessons/lecture046/lecture046.component';
import { Lecture047Component } from './lessons/lecture047/lecture047.component';
import { Assignment002Component } from './assignments/assignment002/assignment002.component';
import { Lecture049Component } from './lessons/lecture049/lecture049.component';
import { Lecture050Component } from './lessons/lecture050/lecture050.component';
import { Lecture051Component } from './lessons/lecture051/lecture051.component';
import { Lecture052Component } from './lessons/lecture052/lecture052.component';
import { Lecture053Component } from './lessons/lecture053/lecture053.component';
import { Lecture054Component } from './lessons/lecture054/lecture054.component';
import { Lecture055Component } from './lessons/lecture055/lecture055.component';
import { Lecture057Component } from './lessons/lecture057/lecture057.component';
import { Lecture059Component } from './lessons/lecture059/lecture059.component';
import { Lecture060Component } from './lessons/lecture060/lecture060.component';
import { Lecture061Component } from './lessons/lecture061/lecture061.component';
import { Lecture062Component } from './lessons/lecture062/lecture062.component';
import { Lecture063Component } from './lessons/lecture063/lecture063.component';
import { Lecture064Component } from './lessons/lecture064/lecture064.component';
import { Lecture065Component } from './lessons/lecture065/lecture065.component';
import { Lecture066Component } from './lessons/lecture066/lecture066.component';
import { Lecture067Component } from './lessons/lecture067/lecture067.component';
import { Lecture068Component } from './lessons/lecture068/lecture068.component';
import { Lecture069Component } from './lessons/lecture069/lecture069.component';
import { Lecture070Component } from './lessons/lecture070/lecture070.component';
import { Lecture071Component } from './lessons/lecture071/lecture071.component';
import { Package001Component } from './packages/package001/package001.component';
import { Package002Component } from './packages/package002/package002.component';
import { Lecture072Component } from './lessons/lecture072/lecture072.component';
import { Lecture073Component } from './lessons/lecture073/lecture073.component';
import { Package003Component } from './packages/package003/package003.component';
import { Lecture074Component } from './lessons/lecture074/lecture074.component';
import { Package074Component } from './lessons/lecture074/package074/package074.component';
import { Lecture075Component } from './lessons/lecture075/lecture075.component';
import { Package075Component } from './lessons/lecture075/package075/package075.component';
import { Lecture076Component } from './lessons/lecture076/lecture076.component';
import { Package076Component } from './lessons/lecture076/package076/package076.component';
import { Lecture077Component } from './lessons/lecture077/lecture077.component';
import { Package077Component } from './lessons/lecture077/package077/package077.component';
import { Lecture080Component } from './lessons/lecture080/lecture080.component';
import { Package080Component } from './lessons/lecture080/package080/package080.component';
import { Lecture081Component } from './lessons/lecture081/lecture081.component';
import { Lecture082Component } from './lessons/lecture082/lecture082.component';
import { Lecture083Component } from './lessons/lecture083/lecture083.component';
import { Package083Component } from './lessons/lecture083/package083/package083.component';
import { Lecture084Component } from './lessons/lecture084/lecture084.component';
import { Package084Component } from './lessons/lecture084/package084/package084.component';
import { Lecture085Component } from './lessons/lecture085/lecture085.component';
import { Package085Component } from './lessons/lecture085/package085/package085.component';
import { Lecture086Component } from './lessons/lecture086/lecture086.component';
import { Package086Component } from './lessons/lecture086/package086/package086.component';
import { Lecture087Component } from './lessons/lecture087/lecture087.component';
import { Package087Component } from './lessons/lecture087/package087/package087.component';
import { Lecture088Component } from './lessons/lecture088/lecture088.component';
import { Lecture089Component } from './lessons/lecture089/lecture089.component';
import { Lecture090Component } from './lessons/lecture090/lecture090.component';
import { Lecture091Component } from './lessons/lecture091/lecture091.component';
import { Assignment003Component } from './assignments/assignment003/assignment003.component';
import { PackageComponent } from './assignments/assignment003/package/package.component';
import { Lecture092Component } from './lessons/lecture092/lecture092.component';
import { Package092Component } from './lessons/lecture092/package092/package092.component';
import { Lecture095Component } from './lessons/lecture095/lecture095.component';
import { Package095Component } from './lessons/lecture095/package095/package095.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'lesson011', component: Lesson011Component },
  { path: 'lesson012', component: Lesson012Component },
  { path: 'lesson013', component: Lesson013Component },
  { path: 'lesson014', component: Lesson014Component },
  { path: 'lesson015', component: Lesson015Component },
  { path: 'lesson016', component: Lecture016Component },
  { path: 'lesson017', component: Lecture017Component },
  { path: 'lesson018', component: Lecture018Component },
  { path: 'lesson019', component: Lecture019Component },
  { path: 'lesson020', component: Lecture020Component },
  { path: 'lesson021', component: Lecture021Component },
  { path: 'lesson022', component: Lecture022Component },
  { path: 'lesson023', component: Lecture023Component },
  { path: 'assignment001', component: Assignment001Component },
  { path: 'lesson024', component: Lecture024Component },
  { path: 'lesson025', component: Lecture025Component },
  { path: 'lesson026', component: Lecture026Component },
  { path: 'lesson027', component: Lecture027Component },
  { path: 'lesson028', component: Lecture028Component },
  { path: 'lesson029', component: Lecture029Component },
  { path: 'lesson030', component: Lecture030Component },
  { path: 'lesson031', component: Lecture031Component },
  { path: 'lesson032', component: Lecture032Component },
  { path: 'lesson033', component: Lecture033Component },
  { path: 'lesson034', component: Lecture034Component },
  { path: 'lesson035', component: Lecture035Component },
  { path: 'lesson036', component: Lecture035Component },
  { path: 'lesson037', component: Lecture037Component },
  { path: 'lesson038', component: Lecture038Component },
  { path: 'lesson039', component: Lecture039Component },
  { path: 'lesson040', component: Lecture040Component },
  { path: 'lesson041', component: Lecture041Component },
  { path: 'lesson042', component: Lecture042Component },
  { path: 'lesson043', component: Lecture043Component },
  { path: 'lesson044', component: Lecture044Component },
  { path: 'lesson045', component: Lecture045Component },
  { path: 'lesson046', component: Lecture046Component },
  { path: 'lesson047', component: Lecture047Component },
  { path: 'assignment002', component: Assignment002Component },
  { path: 'lesson048', component: NotDoneYetComponent },
  { path: 'lesson049', component: Lecture049Component },
  { path: 'lesson050', component: Lecture050Component },
  { path: 'lesson051', component: Lecture051Component },
  { path: 'lesson052', component: Lecture052Component },
  { path: 'lesson053', component: Lecture053Component },
  { path: 'lesson054', component: Lecture054Component },
  { path: 'lesson055', component: Lecture055Component },
  { path: 'lesson056', component: NotDoneYetComponent },
  { path: 'lesson057', component: Lecture057Component },
  { path: 'lesson058', component: NotDoneYetComponent },
  { path: 'lesson059', component: Lecture059Component },
  { path: 'lesson060', component: Lecture060Component },
  { path: 'lesson061', component: Lecture061Component },
  { path: 'lesson062', component: Lecture062Component },
  { path: 'lesson063', component: Lecture063Component },
  { path: 'lesson064', component: Lecture064Component },
  { path: 'lesson065', component: Lecture065Component },
  { path: 'lesson066', component: Lecture066Component },
  { path: 'lesson067', component: Lecture067Component },
  { path: 'lesson068', component: Lecture068Component },
  { path: 'lesson069', component: Lecture069Component },
  { path: 'lesson070', component: Lecture070Component },
  { path: 'lesson071', component: Lecture071Component },
  { path: 'lesson072', component: Lecture072Component },
  { path: 'lesson073', component: Lecture073Component },
  { path: 'lesson074', component: Lecture074Component },
  { path: 'lesson075', component: Lecture075Component },
  { path: 'lesson076', component: Lecture076Component },
  { path: 'lesson077', component: Lecture077Component },
  { path: 'lesson078', component: NotDoneYetComponent },
  { path: 'lesson079', component: NotDoneYetComponent },
  { path: 'lesson080', component: Lecture080Component },
  { path: 'lesson081', component: Lecture081Component },
  { path: 'lesson082', component: Lecture082Component },
  { path: 'lesson083', component: Lecture083Component },
  { path: 'lesson084', component: Lecture084Component },
  { path: 'lesson085', component: Lecture085Component },
  { path: 'lesson086', component: Lecture086Component },
  { path: 'lesson087', component: Lecture087Component },
  { path: 'lesson088', component: Lecture088Component },
  { path: 'lesson089', component: Lecture089Component },
  { path: 'lesson090', component: Lecture090Component },
  { path: 'lesson091', component: Lecture091Component },
  { path: 'assignment3', component: Assignment003Component },
  { path: 'lesson092', component: Lecture092Component },
  { path: 'lesson093', component: NotDoneYetComponent },
  { path: 'lesson094', component: NotDoneYetComponent },
  { path: 'lesson095', component: Lecture095Component },
  { path: 'lesson096', component: NotDoneYetComponent },
  { path: 'lesson097', component: NotDoneYetComponent },
  { path: 'lesson098', component: NotDoneYetComponent },
  { path: 'lesson099', component: NotDoneYetComponent },
  { path: 'lesson100', component: NotDoneYetComponent },
  /* packages */
  { path: 'package001', component: Package001Component },
  { path: 'package002', component: Package002Component },
  { path: 'package003', component: Package003Component },
  { path: 'package074', component: Package074Component },
  { path: 'package075', component: Package075Component },
  { path: 'package076', component: Package076Component },
  { path: 'package077', component: Package077Component },
  { path: 'package078', component: NotDoneYetComponent },
  { path: 'package079', component: NotDoneYetComponent },
  { path: 'package080', component: Package080Component },
  { path: 'package081', component: NotDoneYetComponent },
  { path: 'package082', component: NotDoneYetComponent },
  { path: 'package083', component: Package083Component },
  { path: 'package084', component: Package084Component },
  { path: 'package085', component: Package085Component },
  { path: 'package086', component: Package086Component },
  { path: 'package087', component: Package087Component },
  { path: 'package088', component: NotDoneYetComponent },
  { path: 'package089', component: NotDoneYetComponent },
  { path: 'package090', component: NotDoneYetComponent },
  { path: 'package091', component: NotDoneYetComponent },
  { path: 'package-ass1', component: PackageComponent },
  { path: 'package093', component: NotDoneYetComponent },
  { path: 'package094', component: NotDoneYetComponent },
  { path: 'package095', component: Package095Component },
  { path: 'package096', component: NotDoneYetComponent },
  { path: 'package097', component: NotDoneYetComponent },
  { path: 'package098', component: NotDoneYetComponent },
  { path: 'package099', component: NotDoneYetComponent },
  { path: 'package100', component: NotDoneYetComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    ApplicationComponent,
    NotDoneYetComponent,
    LessonsComponent,
    Lesson011Component,
    Lesson012Component,
    Lesson013Component,
    Lesson014Component,
    Lesson015Component,
    Lecture016Component,
    Lecture017Component,
    Lecture018Component,
    Lecture019Component,
    Lecture020Component,
    Lecture021Component,
    Assignment001Component,
    Lecture023Component,
    Lecture022Component,
    Lecture024Component,
    Lecture025Component,
    Lecture026Component,
    Lecture027Component,
    Lecture028Component,
    Lecture029Component,
    Lecture030Component,
    Lecture031Component,
    Lecture032Component,
    Lecture033Component,
    Lecture034Component,
    Lecture035Component,
    Lecture037Component,
    Lecture038Component,
    Lecture039Component,
    Lecture040Component,
    Lecture041Component,
    Lecture042Component,
    Lecture043Component,
    Lecture044Component,
    Lecture045Component,
    Lecture046Component,
    Lecture047Component,
    Assignment002Component,
    Lecture049Component,
    Lecture050Component,
    Lecture051Component,
    Lecture052Component,
    Lecture053Component,
    Lecture054Component,
    Lecture055Component,
    Lecture057Component,
    Lecture059Component,
    Lecture060Component,
    Lecture061Component,
    Lecture062Component,
    Lecture063Component,
    Lecture064Component,
    Lecture065Component,
    Lecture066Component,
    Lecture067Component,
    Lecture068Component,
    Lecture069Component,
    Lecture070Component,
    Lecture071Component,
    Package001Component,
    Package002Component,
    Lecture072Component,
    Lecture073Component,
    Package003Component,
    Lecture074Component,
    Package074Component,
    Lecture075Component,
    Package075Component,
    Lecture076Component,
    Package076Component,
    Lecture077Component,
    Package077Component,
    Lecture080Component,
    Package080Component,
    Lecture081Component,
    Lecture082Component,
    Lecture083Component,
    Package083Component,
    Lecture084Component,
    Package084Component,
    Lecture085Component,
    Package085Component,
    Lecture086Component,
    Package086Component,
    Lecture087Component,
    Package087Component,
    Lecture088Component,
    Lecture089Component,
    Lecture090Component,
    Lecture091Component,
    Assignment003Component,
    PackageComponent,
    Lecture092Component,
    Package092Component,
    Lecture095Component,
    Package095Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {anchorScrolling: 'enabled'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
