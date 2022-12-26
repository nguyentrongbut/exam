import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { Group5FoodComponent } from "./group5-food.component";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CartComponent} from "./pages-food/cart/cart.component";





const foodRoutes:Routes = [
  {path: 'cart', component: CartComponent},
]


@NgModule({
  declarations: [
    Group5FoodComponent,CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(foodRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [Group5FoodComponent]
})
export class Group5FoodComponentModule {}
