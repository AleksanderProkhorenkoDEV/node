import { IUser } from "../types/user";

export class User {
  constructor(
    public readonly id: string,
    public name: string,
    public lastName: string,
    public email: string
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

  updateUser(user: Partial<Omit<User, "id">>): void {
    if (!this.isValid()) throw new Error("User entity isn't valid");
    this.name = user.name ?? this.name;
    this.lastName = user.lastName ?? this.lastName;
    this.email = user.email ?? this.email;
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
