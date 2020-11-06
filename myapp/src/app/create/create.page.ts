import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
 
  constructor(
    public db: AngularFireDatabase
  ) { }

  ngOnInit() {
  }

}
