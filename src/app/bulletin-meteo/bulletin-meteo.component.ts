import { Component, Input, OnInit } from '@angular/core';
import { BulletinMeteo } from '../bulletin-meteo';

@Component({
  selector: 'app-bulletin-meteo',
  templateUrl: './bulletin-meteo.component.html',
  styleUrls: ['./bulletin-meteo.component.scss']
})
export class BulletinMeteoComponent implements OnInit {

  @Input()
  public bulletinMeteo!: BulletinMeteo;

  constructor() { }

  ngOnInit(): void {
  }

}
