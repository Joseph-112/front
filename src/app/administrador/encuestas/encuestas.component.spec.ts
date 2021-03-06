import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestasComponent } from './encuestas.component';

describe('EncuestaComponent', () => {
  let component: EncuestasComponent;
  let fixture: ComponentFixture<EncuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
