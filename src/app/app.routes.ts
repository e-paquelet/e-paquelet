import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProjetbutComponent } from './projetbut/projetbut.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { EnterpriseComponent } from './enterprise/enterprise.component';
import { MenuComponent } from './menu/menu.component';
import { RsComponent } from './rs/rs.component';
import { InterestComponent } from './interest/interest.component';
import { CardComponent } from '../shared/card/card.component';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { AutreComponent } from './autre/autre.component';
import { TestComponent } from './test/test.component';
import { Header2Component } from '../shared/header2/header2.component';


export const routes: Routes = [
    { path: "", component: AccueilComponent},
    { path: "menu", component: MenuComponent},
    { path: "accueil", component: AccueilComponent },
    { path: "portfolio", component: PortfolioComponent },    
    { path: "projet-but", component: ProjetbutComponent},
    { path: "contact", component: ContactComponent},
    { path: "test", component: TestComponent},
    { path: "entreprise", component: EnterpriseComponent },
    { path: "liens-divers", component: RsComponent},
    { path: "centre-interet", component: InterestComponent},
    { path: "card", component: CardComponent},
    { path: "autre", component: AutreComponent},
    
    { path: "**", component:NotfoundComponent },
];
