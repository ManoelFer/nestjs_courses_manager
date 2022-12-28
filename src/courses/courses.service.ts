import { Injectable } from '@nestjs/common';

import { COURSES } from './courses.mock';

@Injectable()
export class CoursesService {
  courses = COURSES;

  getCourses(): Promise<any> {
    return new Promise<any>((resolve) => {
      resolve(this.courses);
    });
  }
}