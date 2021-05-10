import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ItemDetailComponent } from "./pages/item-detail/item-detail.component";
import { ItemListComponent } from "./pages/item-list/item-list.component";
import { LoginComponent } from "./pages/login/login.component";
import { AuthGuard } from "./shared/auth.guard";

const routes: Routes = [
	{ path: "", redirectTo: "/list", pathMatch: "full" },
	{ path: "list", component: ItemListComponent, canActivate: [AuthGuard] },
	{ path: "detail", component: ItemDetailComponent, canActivate: [AuthGuard] },
	{ path: "login", component: LoginComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
