import { UserQueryParams } from "../types/user";

export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const parseParamsUser = (
  params: Record<string, string>
): UserQueryParams | null => {
  if (Object.keys(params).length === 0) return null;
  return {
    id: parseInt(params?.id),
    name: params?.name,
    lastName: params?.lastName,
    email: params?.email,
  };
};
