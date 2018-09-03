import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormexampleComponent } from './formexample.component';

describe('FormexampleComponent', () => {
  let component: FormexampleComponent;
  let fixture: ComponentFixture<FormexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
