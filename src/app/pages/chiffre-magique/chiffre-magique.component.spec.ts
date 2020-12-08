import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiffreMagiqueComponent } from './chiffre-magique.component';

describe('ChiffreMagiqueComponent', () => {
  let component: ChiffreMagiqueComponent;
  let fixture: ComponentFixture<ChiffreMagiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiffreMagiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiffreMagiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
