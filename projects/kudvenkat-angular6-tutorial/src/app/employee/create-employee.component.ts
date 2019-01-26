import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../shared/custom.validators';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';
import { IEmployee } from './IEmployee';
import { ISkill } from './ISkill';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  pageTitle: string;
  employeeForm: FormGroup;
  employee: IEmployee;
  validationMessages = {
    'fullName' : {
      'required': 'Full Name is required',
      'minlength': 'Full Name must be greater than 1 character',
      'maxlength': 'Full Name must be less than 11 characters'
    },
    'email': { 
      'required': 'Email is required' ,
      'emailDomain': 'Email domain should be dell.com'
    },
    'confirmEmail': { 
      'required': 'Confirm Email is required' 
    },
    'emailGroup': {
      'emailMismatch': 'Email and Confirm Email do not match'
    },
    'phone': { 
      'required': 'Phone is required' 
    }
  };

  formErrors = {
  };

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private employeeService: EmployeeService,
              private router: Router) {
  }

  ngOnInit() {
    //this.buildWithComponents();
    this.buildWithFormBuilder();
    this.employeeForm.get('contactPreference').valueChanges.subscribe((data) => {
      this.onContactPreferenceChange(data);
    });
    this.employeeForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.employeeForm);
    });

    this.route.paramMap.subscribe(params => {
      const empId = +params.get('id');    // must be same name as defined in route definition
      if (empId) {
        this.pageTitle = 'Edit Employee';
        this.getEmployee(empId);
      } else {
        this.pageTitle = 'Create Employee';
        this.employee = {
          id: null,
          fullName: '',
          contactPreference: '',
          email: '',
          phone: null,
          skills: []
        };
      }
    });
  }

  getEmployee(empId: number) {
    this.employeeService.getEmployee(empId).subscribe(
      (employee: IEmployee) => { 
        this.editEmployee(employee);
        this.employee = employee;
      },
      (err) => console.log(err)
    )
  }

  editEmployee(employee: IEmployee) {
    this.employeeForm.patchValue({
      fullName: employee.fullName,
      contactPreference: employee.contactPreference,
      emailGroup: {
        email: employee.email,
        confirmEmail: employee.email
      },
      phone: employee.phone
    });

    this.employeeForm.setControl('skills', this.setExistingSkills(employee.skills));
  }

  setExistingSkills(skillSets: ISkill[]): FormArray {
    const formArray = new FormArray([]);
    skillSets.forEach(s => {
      formArray.push(this.fb.group({
        skillName: s.skillName,
        experienceInYears: s.experienceInYears,
        proficiency: s.proficiency
      }));
    });

    return formArray;
  }

  buildWithFormBuilder() {
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      contactPreference: ['email'],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, CustomValidators.emailDomain('dell.com')]],
        confirmEmail: ['', Validators.required]
      }, {'validator': matchEmail}),
      phone: [''],
      skills: this.fb.array([
        this.addSkillFormGroup()
      ])
    });
  }
  
  addSkillButtonClick(): void {
    (<FormArray>this.employeeForm.get('skills')).push(this.addSkillFormGroup());
  }

  addSkillFormGroup(): FormGroup {
    return this.fb.group({
      skillName: ['', Validators.required],
      experienceInYears: ['', Validators.required],
      proficiency: ['', Validators.required]
    });
  }

  removeSkillButtonClick(index: number): void {
    const skillsFormArray: FormArray = (<FormArray>this.employeeForm.get('skills'));
    skillsFormArray.removeAt(index);
    skillsFormArray.markAsDirty();
    skillsFormArray.markAsTouched();
    //skillsFormArray.markAsDirty({onlySelf: true});
    //skillsFormArray.markAsTouched({onlySelf: true});
  }

  onContactPreferenceChange(selectedValue: string): void {
    const phoneControl = this.employeeForm.get('phone');
    if (selectedValue == 'phone') {
      phoneControl.setValidators(Validators.required);
      //phoneControl.setValidators([Validators.required]); // multiple validators
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }

  onLoadDataClick(): void {
  }

  logValidationErrors(group: FormGroup = this.employeeForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);

      this.formErrors[key] = '';
      if (abstractControl && abstractControl.hasError && 
          (abstractControl.touched || abstractControl.dirty || abstractControl.value !== '')) {
        const messages = this.validationMessages[key];
        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }

      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }
    });
  }

  logKeyValuePairs(group: FormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logKeyValuePairs(abstractControl);
      } else {
        console.log('Key = ' + key + ' && Value = ' + abstractControl.value);
        //abstractControl.disable();    // disable all controls
        //abstractControl.markAsDirty();
      }
    });
  }

  buildWithComponents() {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      // Create skills FormGroup
      skills: new FormGroup({
        skillName: new FormControl(),
        experienceInYears: new FormControl(),
        proficiency: new FormControl()
      })
    });
  }

  onPatchDataClick(): void {
    this.employeeForm.patchValue({
      fullName: "Pragim Technologies",
      email: "pragim@pragimtech.com",
    });
  }

  onSubmit(): void {
    this.mapFormValuesToEmployeeModel();
    if (this.employee.id) {
      this.employeeService.updateEmployee(this.employee).subscribe(
        () => this.router.navigate(['employees']),
        (error: any) => console.log(error)
      );
    } else {
      this.employeeService.addEmployee(this.employee).subscribe(
        () => this.router.navigate(['employees']),
        (error: any) => console.log(error)
      );
    }
  }

  mapFormValuesToEmployeeModel() {
    this.employee.fullName = this.employeeForm.value.fullName;  
    this.employee.contactPreference = this.employeeForm.value.contactPreference; 
    this.employee.email = this.employeeForm.value.emailGroup.email;  
    this.employee.phone = this.employeeForm.value.phone;  
    this.employee.skills = this.employeeForm.value.skills;  
  }
}

function matchEmail(group: AbstractControl): {[key:string]: any} | null {
  const emailControl = group.get('email');
  const confirmEmailControl = group.get('confirmEmail');

  if (emailControl.value === confirmEmailControl.value || 
      (confirmEmailControl.pristine && confirmEmailControl.value === '')) {
    return null;
  } else {
    return { 'emailMismatch': true };
  }
}

//  // Monitor changes to controls here
//    this.employeeForm.get('skills').valueChanges.subscribe((value: any) => {
//      console.log(JSON.stringify(value));
//    });

//  onLoadDataClick(): void {
//    // assign errors to controls
//    this.logValidationErrors(this.employeeForm);
//
//    // Looping through controls
//    //this.logKeyValuePairs(this.employeeForm);
//
//    // From an object
//    //this.employeeForm.setValue({
//    //  fullName: "Pragim Technologies",
//    //  email: "pragim@pragimtech.com",
//    //  skills: {
//    //    skillName: "C#",
//    //    experienceInYears: "5",
//    //    proficiency: "beginner"
//    //  }
//    //});
//  }
