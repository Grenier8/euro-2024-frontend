import { Component, Input } from '@angular/core';
import { Group } from '../../interfaces/group';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-group-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group-table.component.html',
  styleUrl: './group-table.component.css'
})
export class GroupTableComponent {
  @Input() group!: Group;
}
