import { UserType } from "@/types/type";
import { useMemo } from "react";
import { useEncryptStorage } from "use-encrypt-storage";

const useProfile = (): UserType | null => {
  const { get } = useEncryptStorage();

  const profile = useMemo(
    () =>
      get("profile") !== null ? JSON.parse(get("profile") as string) : null,
    [get]
  );

  return profile;
};

export default useProfile;
