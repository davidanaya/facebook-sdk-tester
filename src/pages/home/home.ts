import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

declare var cordova: any;

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  checked = false;

  constructor(public navCtrl: NavController) {}

  toggle() {
    this.checked = !this.checked;

    if (cordova) {
      cordova.plugins["cordova-plugin-facebook4"].setAutoLogAppEventsEnabled(
        this.checked,
        this.success,
        this.failure
      );
    }
  }

  private success(result) {
    const captain = console;
    captain.log("success setAutoLogAppEventsEnabled", result);
  }

  private failure(result) {
    const captain = console;
    captain.log("failure setAutoLogAppEventsEnabled", result);
  }
}
