import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Tasks';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  faCoffee = faCoffee;

  constructor() {}

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  ngOnInit(): void {}
}
