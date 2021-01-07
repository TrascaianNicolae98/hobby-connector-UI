import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipTournamentPageComponent } from './championship-tournament-page.component';

describe('ChampionshipTournamentPageComponent', () => {
  let component: ChampionshipTournamentPageComponent;
  let fixture: ComponentFixture<ChampionshipTournamentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionshipTournamentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipTournamentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
