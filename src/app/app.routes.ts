import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProjetbutComponent } from './projetbut/projetbut.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Prog1Component } from './prog1/prog1.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { MenuComponent } from './menu/menu.component';
import { RsComponent } from './rs/rs.component';
import { InterestComponent } from './interest/interest.component';

export const routes: Routes = [
    { path: "", component: AccueilComponent},
    { path: "menu", component: MenuComponent},
    { path: "accueil", component: AccueilComponent },
    { path: "portfolio", component: PortfolioComponent },    
    { path: "projet-but", component: ProjetbutComponent},
    { path: "contact", component: ContactComponent},
    { path:"prog1", component: Prog1Component},
    { path: "entreprise", component: EnterpriseComponent },
    { path: "liens-divers", component: RsComponent},
    {path : "centre-interet", component: InterestComponent},
    { path: "**", component:NotfoundComponent },
];
