import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/users.modele';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  id;
  userForm: FormGroup;
 
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      queryParams=>{
        this.id=queryParams['id'];
        let user = this.userService.getUser(this.id);
        this.initForm(user);
      });
  }

  initForm(user) {
    if(user!=null){

        this.userForm = this.formBuilder.group({
          firstName: [user.firstName, Validators.required],
          lastName: [user.lastName, Validators.required],
          matricule: [user.matricule, Validators.required],
          email: [user.email, [Validators.required, Validators.email]],
          telephone: [user.telephone,[Validators.required, Validators.pattern('[0-9]+')]],
        });
    } else {

        this.userForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          matricule: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          telephone: ['',[Validators.required, Validators.pattern('[0-9]+')]],
        });
    }
}

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['matricule'],
      formValue['email'],
      formValue['telephone']
    );
   if (this.id == null) {
    this.userService.addUser(newUser);
    this.router.navigate(['/admin/managementAgents']);
  }else{
    this.userService.changeUser(this.id, newUser);

    this.router.navigate(['/admin/managementAgents']);
  }
  }
}
