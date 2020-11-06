import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  contactNumber = new FormControl("");
  constructor(private router: Router) {}

  ngOnInit() {}
  handleLogin() {
    console.log("work", this.contactNumber.value);
    this.router.navigate(["/landing/timeline"]);
  }
}
