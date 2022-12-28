import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  //TODO: create constructor to get functionality from CoursesService
  constructor(private coursesService: CoursesService) {}

  @Get()
  async getCourses() {
    const courses = await this.coursesService.getCourses();
    return courses;
  }
}
