export interface UserModel {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  thumbnail?: string;
  status: boolean;
  roleId: {
    id: string;
    name: string;
  };
}
