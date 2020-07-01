import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarnavComponent } from './topbarnav.component';

describe('TopbarnavComponent', () => {
  let component: TopbarnavComponent;
  let fixture: ComponentFixture<TopbarnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
