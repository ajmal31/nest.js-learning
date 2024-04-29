import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/createTask.dto';

@Controller('task')
export class TaskController {

    constructor(private taskService:TaskService){}
    
    // HTTP POST METHODS
    @Post()
    createTask(@Body()createTaskDto:CreateTaskDto){

        return this.taskService.createTask(createTaskDto)
    }

    // HTTP GET METHODS
    @Get('/:id')
    getTask(@Param('id') id: string){

       return this.taskService.getTask(id)
    }
    
    @Delete('/:id')
    deleteTask(@Param("id") id:string){
         
     return this.taskService.deleteTask(id)

    }

}
