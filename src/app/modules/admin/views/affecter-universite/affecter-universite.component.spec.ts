import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterUniversiteComponent } from './affecter-universite.component';

describe('AffecterUniversiteComponent', () => {
  let component: AffecterUniversiteComponent;
  let fixture: ComponentFixture<AffecterUniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterUniversiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffecterUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
