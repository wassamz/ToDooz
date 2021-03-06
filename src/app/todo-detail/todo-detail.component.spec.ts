import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoDetailComponent } from './todo-detail.component';

describe('ToDoDetailComponent', () => {
  let component: ToDoDetailComponent;
  let fixture: ComponentFixture<ToDoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
