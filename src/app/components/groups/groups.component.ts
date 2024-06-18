import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Group } from '../../interfaces/group';
import { GroupTableComponent } from '../group-table/group-table.component';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [CommonModule, GroupTableComponent],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css',
})
export class GroupsComponent {
  groupService: GroupService = inject(GroupService);

  groups: Group[] = [];

  constructor() {
    this.groupService.getAllGroups().then((result: Group[]) => {
      this.groups = result;
    })
  }

  login() {

  }
}
