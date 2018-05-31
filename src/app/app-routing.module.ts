import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ItemDetailComponent } from "./pages/item-detail/item-detail.component";
import { ItemListComponent } from "./pages/item-list/item-list.component";
import { AuthGuard } from "./shared/auth.guard";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
	{ path: "", redirectTo: "/list", pathMatch: "full", canActivate: [AuthGuard] },
	{ path: "list", component: ItemListComponent, canActivate: [AuthGuard] },
	{ path: "item", component: ItemDetailComponent, canActivate: [AuthGuard] },
	{ path: "login", component: LoginComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
