import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHobbyComponent } from './my-hobby.component';

describe('MyHobbyComponent', () => {
  let component: MyHobbyComponent;
  let fixture: ComponentFixture<MyHobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHobbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
