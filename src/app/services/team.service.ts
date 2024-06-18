import { Injectable } from '@angular/core';
import { Team } from '../interfaces/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  url = 'http://localhost:3000/teams';

  constructor() { }

  async getAllTeams(): Promise<Team[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getAllTeamsByGroup(idGroup: number): Promise<Team[]> {
    const data = await fetch(`${this.url}?idGroup=${idGroup}`);
    return (await data.json()) ?? [];
  }
}
