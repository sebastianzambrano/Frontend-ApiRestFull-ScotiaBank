import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalregisterpqrsComponent } from './modalregisterpqrs.component';

describe('ModalregisterpqrsComponent', () => {
  let component: ModalregisterpqrsComponent;
  let fixture: ComponentFixture<ModalregisterpqrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalregisterpqrsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalregisterpqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
