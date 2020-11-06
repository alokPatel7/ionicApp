import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "./home.page";

const routes: Routes = [
  {
    path: "",
    component: HomePage,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("../pages/welcomepage/welcomepage.module").then(
            (m) => m.WelcomepagePageModule
          ),
      },
      {
        path: "login",
        loadChildren: () =>
          import("../pages/login/login.module").then((m) => m.LoginPageModule),
      },
      {
        path: "signup",
        loadChildren: () =>
          import("../pages/signup/signup.module").then(
            (m) => m.SignupPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
