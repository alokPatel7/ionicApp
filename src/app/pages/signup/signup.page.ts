import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {
  contactNumber = new FormControl("");
  constructor() {}

  ngOnInit() {}

  handleSignup() {
    console.log("Signup Work");
  }
}
