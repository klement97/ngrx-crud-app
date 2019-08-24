import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypeListComponent } from 'src/app/service-type/service-type-list-component/service-type-list.component';

describe('ProductListComponent', () => {
  let component: ServiceTypeListComponent;
  let fixture: ComponentFixture<ServiceTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
