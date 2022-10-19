import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionVilleComponent } from './edition-ville.component';

describe('EditionVilleComponent', () => {
  let component: EditionVilleComponent;
  let fixture: ComponentFixture<EditionVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionVilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
