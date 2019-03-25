import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PommeService } from '../../services/pomme.service';
import { Pomme } from '../../models/pomme';

@Component({
  selector: 'app-pomme-liste',
  templateUrl: './pomme-liste.component.html',
  styleUrls: ['./pomme-liste.component.css']
})
export class PommeListeComponent implements OnInit {
  liste: Pomme[];
  currentPage: number;
  pommePerPage = 10;

  constructor(private pommeService: PommeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    /*this.pommeService.getAll().subscribe(data => {
      console.log('data', data);
      this.liste = data;
    });*/

    // recuperation des données de routage : cas ou une navigation peut intervenir entre un composant et lui meme
    // (ex : appel de la page suivante dans une pagination)
    // ActivatedRoute met a dispo les params de navigation sous forme d'observable,
    // ce qui permet de reexecuter le code dependant des params automatiquement
    // Cet observable est la propriete params
    this.route.params.subscribe(routeParams => {
      this.currentPage = +routeParams.page || 0;
      const skip = this.currentPage * this.pommePerPage;
      this.pommeService.getPommes(skip, this.pommePerPage)
        .subscribe(pommes => this.liste = pommes);
    });
  }

}
