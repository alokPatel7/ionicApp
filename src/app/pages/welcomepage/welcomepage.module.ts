import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { WelcomepagePageRoutingModule } from "./welcomepage-routing.module";

import { WelcomepagePage } from "./welcomepage.page";
import { StartComponent } from "src/app/components/start/start.component";
import { ComponentsModule } from "src/app/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomepagePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [WelcomepagePage],
})
export class WelcomepagePageModule {}
