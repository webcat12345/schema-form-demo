import { Component, OnInit } from '@angular/core';
import { GenerateMethod } from '../core/_statics/generate-method.enum';
import {FormBuildService} from '../core/services/form-build.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  e_generateMethod = GenerateMethod;

  mySchema = null;

  data = {
    'properties': {
      'email': {
        'type': 'string',
        'description': 'email',
        'format': 'email'
      },
      'password': {
        'type': 'string',
        'description': 'Password'
      },
      'rememberMe': {
        'type': 'boolean',
        'default': false,
        'description': 'Remember me'
      }
    },
    'required': ['email', 'password', 'rememberMe']
  };

  myModel = {email: 'john.doe@example.com'};

  constructor(
    private formService: FormBuildService
  ) { }

  ngOnInit() {
  }

  generateForm(method: number): void {
    this.formService.getSchema(method, this.data).subscribe(res => {
      this.mySchema = res.data;
    });
  }

  resetData(): void {
    this.mySchema = null;
  }

}
