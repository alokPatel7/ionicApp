import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LandingPage } from "./landing.page";

const routes: Routes = [
  {
    path: "",
    component: LandingPage,
    children: [
      {
        path: "notifications",
        loadChildren: () =>
          import("../../pages/notifications/notifications.module").then(
            (m) => m.NotificationsPageModule
          ),
      },
      {
        path: "timeline",
        loadChildren: () =>
          import("../../pages/timeline/timeline.module").then(
            (m) => m.TimelinePageModule
          ),
      },
      {
        path: "messages",
        loadChildren: () =>
          import("../../pages/messages/messages.module").then(
            (m) => m.MessagesPageModule
          ),
      },
      {
        path: "profile",
        loadChildren: () =>
          import("../../pages/profile/profile.module").then(
            (m) => m.ProfilePageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
