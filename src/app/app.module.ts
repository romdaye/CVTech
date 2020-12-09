import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { ColorComponent } from './components/color/color.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { RotatingCardComponent } from './pages/rotating-card/rotating-card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { CardComponent } from './cv/card/card.component';
import { TestngstyleComponent } from './directives/testngstyle/testngstyle.component';
import { WordComponent } from './pages/word/word.component';
import { TestngclassComponent } from './components/testngclass/testngclass.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { NgiftestComponent } from './directives/ngiftest/ngiftest.component';
import { MoneyConvertorPipe } from './pipes/money-convertor.pipe';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './components/header/header.component';
import { ChiffreMagiqueComponent } from './pages/chiffre-magique/chiffre-magique.component';
import { RouterSimulatorComponent } from './components/router-simulator/router-simulator.component';
import { DetailPersonneComponent } from './cv/detail-personne/detail-personne.component';
import { GitComponent } from './git/git.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ColorComponent,
    TwoWayComponent,
    RotatingCardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    CardComponent,
    TestngstyleComponent,
    WordComponent,
    TestngclassComponent,
    HighlightDirective,
    RainbowDirective,
    NgiftestComponent,
    MoneyConvertorPipe,
    DefaultImagePipe,
    TodoComponent,
    HeaderComponent,
    ChiffreMagiqueComponent,
    RouterSimulatorComponent,
    DetailPersonneComponent,
    GitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
