import { IUser } from "../Types/user";

export class User {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly lastName: string,
    public readonly email: string
  ) {}

  isValid(): boolean {
    return (
      typeof this.name === "string" &&
      this.name.length > 2 &&
      typeof this.lastName === "string" &&
      this.lastName.length > 2 &&
      typeof this.email === "string" &&
      this.email.includes("@")
    );
  }

  static fromJson(json: IUser): User {
    return new User(json.id, json.name, json.lastName, json.email);
  }

  toJson(): IUser {
    return {
      id: this.id,
      name: this.name,
      lastName: this.lastName,
      email: this.email,
    };
  }
}
