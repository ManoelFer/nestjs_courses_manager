import { Controller } from '@nestjs/common';

import { Get, Param } from '@nestjs/common/decorators';

import { CoursesService } from './courses.service';

@Controller('courses') //route example: http://localhost:3000/courses
export class CoursesController {
  //TODO: create constructor to get functionality from CoursesService
  constructor(private coursesService: CoursesService) {}

  @Get() //TODO: default get route, example: http://localhost:3000/courses
  async getCourses() {
    const courses = await this.coursesService.getCourses();
    return courses;
  }

  @Get(':courseId') //TODO: parameter in route, example: http://localhost:3000/courses/2
  async getCourse(@Param('courseId') courseId) {
    //TODO: create variable to get courseId Param
    const course = await this.coursesService.getCourse(courseId);
    return course;
  }
}
