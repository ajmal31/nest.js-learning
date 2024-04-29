import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';

@Injectable()
export class TaskService {

    createTask(createTaskDto:CreateTaskDto):string{

        const {title,description,status}=createTaskDto
        return `Task created with name of ${title}`

    }

    getTask(id:string):string{

        return `Task get successfull ${id}`
    }
    deleteTask(id:string):string{

        return `${id} Task deleted Succesfully`
    }

}
