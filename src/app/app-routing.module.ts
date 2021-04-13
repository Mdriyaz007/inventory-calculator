import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InventoryComponent} from './inventory/inventory.component';
import {HomeComponent} from './home/home.component';
import {ProfitComponent} from './profit/profit.component';



const routes: Routes = [
  { path: '',component:HomeComponent},
  { path: 'home',component:HomeComponent},
  { path: 'inventory',component:InventoryComponent},
  { path: 'calc',component:ProfitComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }