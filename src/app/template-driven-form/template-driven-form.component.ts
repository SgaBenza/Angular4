import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
   
  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'}
  ];

  log(x) {
    console.log(x);
  }

  submit(f){
    console.log(f);
   /*  console.log(f.valid); */
    
  }
}
