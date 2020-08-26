import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotlyComponent } from './quotly.component';

describe('QuotlyComponent', () => {
  let component: QuotlyComponent;
  let fixture: ComponentFixture<QuotlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
