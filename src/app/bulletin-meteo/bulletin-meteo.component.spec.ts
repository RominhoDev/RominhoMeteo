import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinMeteoComponent } from './bulletin-meteo.component';

describe('BulletinMeteoComponent', () => {
  let component: BulletinMeteoComponent;
  let fixture: ComponentFixture<BulletinMeteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulletinMeteoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletinMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
