import { Injectable, inject } from '@angular/core';
import { Group } from '../interfaces/group';
import { TeamService } from './team.service';
import { Team } from '../interfaces/team';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  url = 'http://localhost:3000/groups';
  teamService: TeamService = inject(TeamService);

  constructor() { }

  async getAllGroups(): Promise<Group[]> {
    const data = await fetch(this.url);

    let groups: Group[] = await data.json();
    for (let group of groups) {
      this.teamService.getAllTeamsByGroup(group.id).then((result: Team[]) => {
        group.teams = result;
      });
    }

    return groups ?? [];
  }
}
