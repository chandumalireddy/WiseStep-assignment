import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetshortenUrlComponent } from './getshorten-url.component';

describe('GetshortenUrlComponent', () => {
  let component: GetshortenUrlComponent;
  let fixture: ComponentFixture<GetshortenUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetshortenUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetshortenUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
