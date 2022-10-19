import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceBulletinService } from '../services/service-bulletin.service';
import { VillesService } from '../services/villes.service';
import { Ville } from '../ville';

@Component({
  selector: 'app-edition-ville',
  templateUrl: './edition-ville.component.html',
  styleUrls: ['./edition-ville.component.scss']
})
export class EditionVilleComponent implements OnInit {

  public formulaire: FormGroup = this.formsBuilder.group({
    nom: ["", [Validators.required]],
    latitude: [null, [Validators.required]],
    longitude: [null, [Validators.required]]
  },
  {
    updateOn: 'blur'
  });
  constructor(private formsBuilder: FormBuilder, private service: ServiceBulletinService, private villesService: VillesService, private router: Router) { }

  ngOnInit(): void {
  }

  onChangeVille(nomVille: string) {
    this.service.rechercherVille(nomVille)
      .subscribe((response: any) => {
        if (response.length > 0) {
          this.formulaire.get('latitude')?.setValue(response[0].lat);
          this.formulaire.get('longitude')?.setValue(response[0].lon);
        } else {
          this.formulaire.get('latitude')?.setValue(null);
          this.formulaire.get('longitude')?.setValue(null);
        }
      });
  }

  onAjouterVille() {
    console.log(this.formulaire.value);
    if (this.formulaire.valid) {
      
      // Récupération des villes
      let villes = this.villesService.recupererVilles();

      // Ajout de la nouvelle ville
      villes.push({
        nom: this.formulaire.value.nom,
        latitude: this.formulaire.value.latitude,
        longitude: this.formulaire.value.longitude
      })

      // Enregistrement des villes
      this.villesService.enregistrerVilles(villes);

      // Navigation
      this.router.navigate(['bulletins']);
    }
  }

}
