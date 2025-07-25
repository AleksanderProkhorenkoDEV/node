import { User } from "../entities/Users";
import { IUser, UserQueryParams } from "../types/user";
import { sleep } from "../utils/helpers";

export interface IUserRepository {
  save(user: User): Promise<void>;
  findAll(queryParams: UserQueryParams): Promise<User[]>;
  findUser(id: string): Promise<User>;
}

export class UserRepository implements IUserRepository {
  private users: IUser[] = [
    {
      id: "1",
      name: "Aleksander",
      lastName: "Trujillo Prokhorenko",
      email: "aleksander@gmail.com",
    },
    {
      id: "2",
      name: "Aleksander",
      lastName: "Trujillo Prokhorenko",
      email: "prokhorenko@gmail.com",
    },
  ];

  async save(user: User): Promise<void> {
    if (!user.isValid()) throw new Error("User entity isn't valid");
    this.users.push(user);
    await sleep(1500);
  }

  async findAll(queryParams: UserQueryParams): Promise<User[]> {    
    if (!queryParams) {
      return this.users.map((userRaw) => User.fromJson(userRaw));
    }

    const filterUsers = this.users.filter((user) => {
      if (queryParams.name !== undefined && queryParams.name.toLowerCase !== user.name.toLowerCase) return false;
      if (queryParams.lastName !== undefined && queryParams.lastName.toLowerCase !== user.lastName.toLowerCase) return false;
      if (queryParams.email !== undefined && queryParams.email !== user.email) return false;

      return true;
    });

    await sleep(1000);
    return filterUsers.map((userRaw) => User.fromJson(userRaw));
  }

  async findUser(id: string): Promise<User> {
    const userRaw = this.users.find((user) => user.id === id);
    await sleep(1000);
    return User.fromJson(userRaw);
  }
}
