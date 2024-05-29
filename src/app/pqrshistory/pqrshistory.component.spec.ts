import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrshistoryComponent } from './pqrshistory.component';

describe('PqrshistoryComponent', () => {
  let component: PqrshistoryComponent;
  let fixture: ComponentFixture<PqrshistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PqrshistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PqrshistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
