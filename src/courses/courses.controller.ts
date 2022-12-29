import { Controller } from '@nestjs/common';
import { ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';

import { Body, Delete, Get, Param, Post } from '@nestjs/common/decorators';

import { CoursesService } from './courses.service';

import { CreateCourseDto } from './create-course.dto';

@Controller('courses') //route example: http://localhost:3000/courses
export class CoursesController {
  //TODO: create constructor to get functionality from CoursesService
  constructor(private coursesService: CoursesService) {}

  @Get() //TODO: default get route, example: http://localhost:3000/courses
  @ApiOkResponse({ description: 'List of All Courses' })
  async getCourses() {
    const courses = await this.coursesService.getCourses();
    return courses;
  }

  @Get(':courseId') //TODO: parameter in route, example: http://localhost:3000/courses/2
  @ApiOkResponse({ description: 'List course by id' })
  async getCourse(@Param('courseId') courseId) {
    //TODO: create variable to get courseId Param
    const course = await this.coursesService.getCourse(courseId);
    return course;
  }

  @Post() //TODO: route to add, example: http://localhost:3000/courses
  @ApiCreatedResponse({ description: 'To create course' })
  async addCourse(@Body() createCourseDto: CreateCourseDto) {
    const course = await this.coursesService.addCourse(createCourseDto);
    return course;
  }

  @Delete(':courseId') //TODO: route to add, example: http://localhost:3000/courses
  @ApiCreatedResponse({ description: 'Remove a course' })
  async deleteCourse(@Param('courseId') courseID) {
    const course = await this.coursesService.deleteCourse(courseID);
    return course;
  }
}
