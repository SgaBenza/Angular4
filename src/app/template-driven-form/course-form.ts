import { Component } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.html',
})
export class CourseForm {

  submit(f) {
    console.log(f);
  }

  categories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Languages' }
  ];
}