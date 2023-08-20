import { Injectable } from '@nestjs/common';
import { TaskModel } from './task.model';

@Injectable()
export class TaskService {
  _tasks: TaskModel[] = [
    { id: 1, description: 'Feed the cat' },
    { id: 2, description: 'Clean the mirrors' },
    { id: 3, description: 'Make a todo app' },
  ];

  findAllTasks(): TaskModel[] {
    return this._tasks;
  }

  findTaskById(id: number): TaskModel {
    return this._tasks.find((t) => t.id == id);
  }
}
