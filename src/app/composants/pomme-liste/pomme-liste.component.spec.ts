import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PommeListeComponent } from './pomme-liste.component';

describe('PommeListeComponent', () => {
  let component: PommeListeComponent;
  let fixture: ComponentFixture<PommeListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PommeListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PommeListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
