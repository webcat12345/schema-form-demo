import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaStringWidgetComponent } from './ma-string-widget.component';

describe('MaStringWidgetComponent', () => {
  let component: MaStringWidgetComponent;
  let fixture: ComponentFixture<MaStringWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaStringWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaStringWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
