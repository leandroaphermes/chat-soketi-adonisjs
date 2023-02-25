import type { UserIdType, UserType } from "./User";

export type ChatType = {
  id: string;
  owner_id: UserIdType;
  owner: UserType;
};
