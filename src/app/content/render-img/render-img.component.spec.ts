import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderImgComponent } from './render-img.component';

describe('RenderImgComponent', () => {
  let component: RenderImgComponent;
  let fixture: ComponentFixture<RenderImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
