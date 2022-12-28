import { Injectable, HttpException } from '@nestjs/common';

import { COURSES } from './courses.mock';

@Injectable()
export class CoursesService {
  courses = COURSES;

  getCourses(): Promise<any> {
    return new Promise<any>((resolve) => {
      resolve(this.courses);
    });
  }

  getCourse(courseId: number): Promise<any> {
    return new Promise<any>((resolve) => {
      const course = this.courses.find((course) => course.id == courseId);

      if (!course) {
        throw new HttpException('Course not found', 404);
      }

      resolve(course);
    });
  }
}
