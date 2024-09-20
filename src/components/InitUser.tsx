import { BASE_URL } from "@/config";
import { userState } from "@/store/atoms/user";
import axios from "axios";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

export function InitUser() {
  const setUser = useSetRecoilState(userState);
  const init = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/admin/me`, {
        headers: {
          // "Authorization": "Bearer " + localStorage.getItem("token")
        },
      });
      if (res.data.username) {
        setUser({
          isLoading: false,
          userEmail: res.data.username,
        });
      } else {
        setUser({
          isLoading: false,
          userEmail: null,
        });
      }
    } catch (e) {
      setUser({
        isLoading: false,
        userEmail: null,
      });
    }
  };
  useEffect(() => {
    init();
  }, []);
  return <></>;
}
