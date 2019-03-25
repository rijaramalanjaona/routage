import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PommeDetailComponent } from './pomme-detail.component';

describe('PommeDetailComponent', () => {
  let component: PommeDetailComponent;
  let fixture: ComponentFixture<PommeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PommeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PommeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
