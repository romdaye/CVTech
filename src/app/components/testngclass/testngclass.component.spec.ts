import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestngclassComponent } from './testngclass.component';

describe('TestngclassComponent', () => {
  let component: TestngclassComponent;
  let fixture: ComponentFixture<TestngclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestngclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestngclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
