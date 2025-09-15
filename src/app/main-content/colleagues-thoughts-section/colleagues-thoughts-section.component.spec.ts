import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleaguesThoughtsSectionComponent } from './colleagues-thoughts-section.component';

describe('ColleaguesThoughtsSectionComponent', () => {
  let component: ColleaguesThoughtsSectionComponent;
  let fixture: ComponentFixture<ColleaguesThoughtsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColleaguesThoughtsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColleaguesThoughtsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
