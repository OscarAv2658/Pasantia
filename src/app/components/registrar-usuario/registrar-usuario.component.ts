import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  registrarUsuario : FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrarUsuario = this.fb.group({
      email: ['',],
      password: [''],
      repetirPassword: ['']
    })
  }

  ngOnInit(): void {
    
  }

  registrar(){
    const email = this.registrarUsuario.value.email
    const password = this.registrarUsuario.value.password
    const repetirPassword = this.registrarUsuario.value.repetirPassword
    console.log(email.password, repetirPassword);
  }

}
