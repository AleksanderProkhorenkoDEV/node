export type IUser = {
  id: string;
  name: string;
  lastName: string;
  email: string;
};

export interface UserQueryParams {
  id?: number;
  name?: string;
  lastName?: string;
  email?: string;
}
