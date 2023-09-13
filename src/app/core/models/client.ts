import { StateClient } from "../enums/state-client"
import { ClientI } from "../interfaces/client-i";

export class Client implements ClientI {
    state !: StateClient;
        tva= 20;
        id!: number;
        name!: string;
        totalCaHt!: number;
        comment!: string

        constructor(obj?: Partial<Client>) {
            if (obj) {
              // this  //? pour tout ou rien , tandis que patial pour dire qu'on peut initialiser une partie de notre objet
              Object.assign(this, obj);  //on combine l'objet incomplet saisi par le user avec notre constructeur par défaut
            }
          }
}
