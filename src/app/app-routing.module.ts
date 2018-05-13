import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ItemDetailComponent } from "./pages/item-detail/item-detail.component";
import { ItemListComponent } from "./pages/item-list/item-list.component";

const routes: Routes = [
	{ path: "", redirectTo: "/list", pathMatch: "full" },
	{ path: "list", component: ItemListComponent },
	{ path: "item", component: ItemDetailComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
