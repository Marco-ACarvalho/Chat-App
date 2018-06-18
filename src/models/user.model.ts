export class User {

  public $key: string;

  constructor(
      public name: string,
      public username: string,
      public telefone: string,
      //public CPF: string,
      //public email: string,
      public photo: string
  ) {}

}
