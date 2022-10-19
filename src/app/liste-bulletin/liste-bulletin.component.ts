import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BulletinMeteo } from '../bulletin-meteo';
import { ServiceBulletinService } from '../services/service-bulletin.service';
import { VillesService } from '../services/villes.service';
import { Ville } from '../ville';

@Component({
  selector: 'app-liste-bulletin',
  templateUrl: './liste-bulletin.component.html',
  styleUrls: ['./liste-bulletin.component.scss']
})
export class ListeBulletinComponent implements OnInit {

  public listeBulletins: BulletinMeteo[] = [];

  constructor(private service: ServiceBulletinService, private villesService: VillesService) {

  }

  public ngOnInit() {
    // Récupération des villes
    var villes = this.villesService.recupererVilles();

    for (let ville of villes) {
      this.service.rechercherBulletin(ville).subscribe((response: any) => this.listeBulletins.push(this.convertirJsonEnBulletin(response, ville.nom)));
    }
  }

  public convertirJsonEnBulletin(response: any, town: string): BulletinMeteo {
    console.log(response);

    return {
      ville: {
        nom: town,
        latitude: response.coord.lat,
        longitude: response.coord.lat
      },
      temperature: response.main.temp - 30.0,
      ressenti: response.main.feels_like - 30.0,
      humidite: response.main.humidity,
      resume: response.weather[0].description
    };
  }

}
