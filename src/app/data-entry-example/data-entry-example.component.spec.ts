import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryExampleComponent } from './data-entry-example.component';

describe('DataEntryExampleComponent', () => {
  let component: DataEntryExampleComponent;
  let fixture: ComponentFixture<DataEntryExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataEntryExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEntryExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
