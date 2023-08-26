import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root',
})
export class FirebaseErrorService {
  constructor() {}

  firebaseError(code: string) {
    switch (code) {
      //El correo ya existe
      case FirebaseCodeErrorEnum.EmailAlReadyInUse:
        return 'El usuario ya existe';

      // Contraseña muy debil
      case FirebaseCodeErrorEnum.WeakPassword:
        return 'La contraseña es muy corta';

      //Correo invalido
      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'Correo invalido';

      //Contraseña incorrecta
      case FirebaseCodeErrorEnum.WrongPassword:
        return 'La contraseña es incorrecta';

      //El usuariono existe

      case FirebaseCodeErrorEnum.UseNotFound:
        return 'El usuariono existe';

      default:
        return 'Error desconocido';
    }
  }
}
