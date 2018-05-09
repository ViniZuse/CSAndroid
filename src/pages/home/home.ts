import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Jogos } from "./jogos";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { InfoPage } from '../info/info';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {

  public jogos: Jogos[];
  public teste;
  public pushPage: InfoPage

  constructor(
    public navCtrl: NavController,
    private http: Http
  ) {
    this.http.get('/apiDraft5/api/v2/matches?filter[status]=0&limit=50').map(res => res.json()).subscribe(data => this.jogos = data);
  }

  ngOnInit() {

  }
}
