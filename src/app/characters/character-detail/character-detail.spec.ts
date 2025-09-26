import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetail } from './character-detail';

describe('CharacterDetail', () => {
  let component: CharacterDetail;
  let fixture: ComponentFixture<CharacterDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
