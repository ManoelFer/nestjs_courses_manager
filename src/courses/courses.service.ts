import { Injectable, HttpException } from '@nestjs/common';

import { COURSES } from './courses.mock';

import { CreateCourseDto } from './create-course.dto';

@Injectable()
export class CoursesService {
  courses = COURSES;

  getCourses(): Promise<CreateCourseDto[]> {
    return new Promise<any>((resolve) => {
      resolve(this.courses);
    });
  }

  getCourse(courseId: number): Promise<CreateCourseDto> {
    return new Promise<any>((resolve) => {
      const course = this.courses.find((course) => course.id == courseId);

      if (!course) {
        throw new HttpException('Course not found', 404);
      }

      resolve(course);
    });
  }

  addCourse(createCourseDto: CreateCourseDto): Promise<CreateCourseDto> {
    return new Promise<any>((resolve) => {
      this.courses.push(createCourseDto);

      resolve(this.courses);
    });
  }

  deleteCourse(courseId: number): Promise<string> {
    return new Promise<any>((resolve) => {
      const coursePosition = this.courses.findIndex(
        (course) => course.id == courseId,
      );

      if (coursePosition == -1) {
        throw new HttpException('Course not found', 404);
      }

      this.courses.splice(coursePosition, 1);

      resolve(this.courses);
    });
  }
}
