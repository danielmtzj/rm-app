import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteList } from './favorite-list';

describe('FavoriteList', () => {
  let component: FavoriteList;
  let fixture: ComponentFixture<FavoriteList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
