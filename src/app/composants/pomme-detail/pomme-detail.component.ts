import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pomme } from '../../models/pomme';
import { PommeService } from '../../services/pomme.service';

@Component({
  selector: 'app-pomme-detail',
  templateUrl: './pomme-detail.component.html',
  styleUrls: ['./pomme-detail.component.css']
})
export class PommeDetailComponent implements OnInit {
  pomme: Pomme;

  constructor(private pommeService: PommeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // recuperation des données de routage via la propriete snapshot de route (ActivatedRoute)
    // cette propriete contient une propriete params contenant tous les parametres passes a la route lors de la navigation
    const id = +this.route.snapshot.params['id'];
    this.pommeService.getPomme(id)
      .subscribe(pomme => this.pomme = pomme);
  }

  goBack() {
    this.router.navigate(['pommes']);
  }

}
