import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { Jogos } from '../home/jogos';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  public idPartida: String;
  public jogo: Jogos;
  public headtohead;
  public hthScoreTimeA;
  public hthScoreTimeB;

  public times = [
    { 'nome': 'FaZe Clan', 'logo': 'assets/imgs/faze.svg' },
    { 'nome': 'mousesports', 'logo': 'assets/imgs/mousesports.svg' },
    { 'nome': 'Fnatic', 'logo': 'assets/imgs/fnatic.svg' },
    { 'nome': 'Cloud9', 'logo': 'assets/imgs/cloud9.svg' },
    { 'nome': 'Astralis', 'logo': 'assets/imgs/astralis.svg' },
    { 'nome': 'Natus Vincere', 'logo': 'assets/imgs/navi.svg' },
    { 'nome': 'Team Liquid', 'logo': 'assets/imgs/liquid.svg' },
    { 'nome': 'SK Gaming', 'logo': 'assets/imgs/sk.svg' },
    { 'nome': 'G2 Esports', 'logo': 'assets/imgs/g2.svg' },
    { 'nome': 'Ninjas in Pyjamas', 'logo': 'assets/imgs/nip.svg' },
    { 'nome': 'Team EnVyUs', 'logo': 'assets/imgs/envyus.svg' },
    { 'nome': 'TyLoo', 'logo': 'assets/imgs/tyloo.svg' },
    { 'nome': 'Gambit Esports', 'logo': 'assets/imgs/gambit.svg' },
    { 'nome': 'Renegades', 'logo': 'assets/imgs/renegades.svg' },
    { 'nome': 'Space Soldiers', 'logo': 'assets/imgs/ss.svg' },
    { 'nome': 'Valiance', 'logo': 'assets/imgs/valiance.svg' },
    { 'nome': 'Luminosity Gaming', 'logo': 'assets/imgs/lg.svg' },
    { 'nome': 'Virtue Gaming', 'logo': 'assets/imgs/virtue.png' },
    { 'nome': 'NRG Esports', 'logo': 'assets/imgs/nrg.svg' },
    { 'nome': 'Isurus Gaming', 'logo': 'assets/imgs/isurus.png' },
    { 'nome': 'YeaH! Gaming', 'logo': 'assets/imgs/yeah.png' },
    { 'nome': 'FURIA eSports', 'logo': 'assets/imgs/furia.png' },
    { 'nome': 'Splyce', 'logo': 'assets/imgs/splyce.svg' },
    { 'nome': 'compLexity Gaming', 'logo': 'assets/imgs/complexity.svg' },
    { 'nome': 'Ghost Gaming', 'logo': 'assets/imgs/ghost.svg' },
    { 'nome': 'eUnited', 'logo': 'assets/imgs/eunited.svg' },
    { 'nome': 'Bulldozer e-Sports', 'logo': 'assets/imgs/bulldozer.png' },
    { 'nome': 'CSBL', 'logo': 'assets/imgs/csbl.png' },
    { 'nome': 'Team WILD', 'logo': 'assets/imgs/wild.png' },
    { 'nome': 'C4 Gaming', 'logo': 'assets/imgs/c4.png' },
    { 'nome': 'YNG Sharks Esports', 'logo': 'assets/imgs/yng.png' },
    { 'nome': 'Team One', 'logo': 'assets/imgs/tone.png' },
    { 'nome': 'Rogue', 'logo': 'assets/imgs/rogue.svg' },
    { 'nome': 'INTZ e-Sports Club', 'logo': 'assets/imgs/intz.svg' },
    { 'nome': 'Grayhound Gaming', 'logo': 'assets/imgs/grayhound.svg' },
    { 'nome': 'OpTic Gaming', 'logo': 'assets/imgs/optic.svg' },
    { 'nome': 'Heroic', 'logo': 'assets/imgs/heroic.svg' },
    { 'nome': 'LiNE5 Academy', 'logo': 'assets/imgs/line5.png' },
    { 'nome': 'DETONA Gaming', 'logo': 'assets/imgs/detona.png' },
    { 'nome': 'Coscu Army', 'logo': 'assets/imgs/cusco.png' },
    { 'nome': 'Furious Gaming', 'logo': 'assets/imgs/furious.svg' },
    { 'nome': 'Avangar', 'logo': 'assets/imgs/avangar.svg' },
    { 'nome': 'Virtus.pro', 'logo': 'assets/imgs/vp.svg' },
    { 'nome': 'Teammate', 'logo': 'assets/imgs/teammate.png' },
    { 'nome': 'VG.FlashGaming', 'logo': 'assets/imgs/vg.svg' },
    { 'nome': 'Ago Esports', 'logo': 'assets/imgs/ago.png' },
    { 'nome': 'North', 'logo': 'assets/imgs/north.svg' },
    { 'nome': 'HellRaisers', 'logo': 'assets/imgs/hellraisers.svg' },
    { 'nome': 'GODSENT', 'logo': 'assets/imgs/godsent.svg' },

  ];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    private _platform: Platform) {

    this.idPartida = navParams.get('idPartida');

    if (this._platform.is('cordova')) {
      // CORDOVA
      this.http.get('https://api.draft5.gg/api/v2/matches/' + this.idPartida)
        .map(res => res.json())
        .subscribe(data => {
          this.jogo = data;
          let dataJogo = new Date(this.jogo.matchDate * 1000);
          let dataAtual = new Date();
          let hours = dataJogo.getHours();
          let minutes = "0" + dataJogo.getMinutes();
          this.jogo.horaJogo = hours + ':' + minutes.substr(-2);
          this.jogo.dataJogo = dataJogo;
          let _timeA = this.times.find(item => item.nome === this.jogo.teamA);
          let _timeB = this.times.find(item => item.nome === this.jogo.teamB);
          this.jogo.logos = {
            teamA: _timeA !== undefined ? _timeA.logo : 'https://draft5.gg/img/flags/TBA.svg',
            teamB: _timeB !== undefined ? _timeB.logo : 'https://draft5.gg/img/flags/TBA.svg'
          }
          if (dataJogo <= dataAtual) {
            if (this.jogo.isOver === 0) {
              this.jogo.live = 1;
            }
          }

          this.jogo.urlFundoCampeonato = "https://static.draft5.gg/" + this.jogo.tournament.tournamentImage;

          this.http.get('https://api.draft5.gg/api/v2/teams/headToHead/' + this.jogo.teamAId + '/' + this.jogo.teamBId + '')
            .map(res => res.json())
            .subscribe(data => {
              if (data.seriesList.length > 0) {
                this.hthScoreTimeA = data.totalScore[this.jogo.teamA.toString()];
                this.hthScoreTimeB = data.totalScore[this.jogo.teamB.toString()];
              }
            })
        })


    } else {

      // WEB
      this.http.get('/apiDraft5/api/v2/matches/' + this.idPartida)
        .map(res => res.json())
        .subscribe(data => {
          this.jogo = data;
          let dataJogo = new Date(this.jogo.matchDate * 1000);
          let dataAtual = new Date();
          let hours = dataJogo.getHours();
          let minutes = "0" + dataJogo.getMinutes();
          this.jogo.horaJogo = hours + ':' + minutes.substr(-2);
          this.jogo.dataJogo = dataJogo;
          // let formattedTime = hours + ':' + minutes.substr(-2);
          // this.jogo.matchDateFormatted = dataJogo.toLocaleDateString() + ' ' + formattedTime;

          let _timeA = this.times.find(item => item.nome === this.jogo.teamA);
          let _timeB = this.times.find(item => item.nome === this.jogo.teamB);
          this.jogo.logos = {
            teamA: _timeA !== undefined ? _timeA.logo : 'https://draft5.gg/img/flags/TBA.svg',
            teamB: _timeB !== undefined ? _timeB.logo : 'https://draft5.gg/img/flags/TBA.svg'
          }
          if (dataJogo <= dataAtual) {
            if (this.jogo.isOver === 0) {
              this.jogo.live = 1;
            }
          }

          this.jogo.urlFundoCampeonato = "https://static.draft5.gg/" + this.jogo.tournament.tournamentImage;

          this.http.get('/apiDraft5/api/v2/teams/headToHead/' + this.jogo.teamAId + '/' + this.jogo.teamBId + '')
            .map(res => res.json())
            .subscribe(data => {
              if (data.seriesList.length > 0) {
                this.hthScoreTimeA = data.totalScore[this.jogo.teamA.toString()];
                this.hthScoreTimeB = data.totalScore[this.jogo.teamB.toString()];
              }
            })
        })

    }

  }

  ionViewDidLoad() {
  }

}
