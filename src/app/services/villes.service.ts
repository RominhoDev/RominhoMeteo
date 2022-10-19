import { Injectable } from '@angular/core';
import { Ville } from '../ville';

@Injectable({
  providedIn: 'root'
})
export class VillesService {

  constructor() { }

  public enregistrerVilles(villes: Ville[]) {
    localStorage.setItem('villes', JSON.stringify(villes));
  }

  public recupererVilles(): Ville[] {
    var storageVille = localStorage.getItem('villes');

    var villes: Ville[] = [];
    if (storageVille) {
      villes = JSON.parse(storageVille);
    }

    return villes;
  }
}
