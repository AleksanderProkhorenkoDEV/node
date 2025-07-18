import { IUser } from "../Types/user";

export class User {
  constructor(private user: IUser) {}

  isValid(): boolean {
    return (
      typeof this.name === "string" &&
      this.name.length > 2 &&
      typeof this.lastNames === "string" &&
      this.lastNames.length > 2 &&
      typeof this.email === "string" &&
      this.email.includes("@")
    );
  }

  toJson(): IUser {
    return {
      id: this.user.id,
      name: this.user.name,
      lastNames: this.user.lastNames,
      email: this.user.email,
    };
  }

  get name(): string {
    return this.user.name;
  }

  get lastNames(): string {
    return this.user.lastNames;
  }

  get id(): string {
    return this.user.id;
  }

  get email(): string {
    return this.user.email;
  }
}
