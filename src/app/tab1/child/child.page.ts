import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-child',
  templateUrl: './child.page.html',
  styleUrls: ['./child.page.scss'],
})
export class ChildPage implements OnInit {
  public counter = 0;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  public backToHome(): void {
    this.navCtrl.navigateRoot('/home');
  }
}
