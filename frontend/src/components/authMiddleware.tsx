import React, { useEffect, useState } from "react";
import AuthApi from "@/pages/api/auth/auth";
import { useRouter } from "next/router";

function AuthMiddleware({ children, ...rest }: any) {
  const authApi = new AuthApi();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const verifyAuth = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await authApi.verifyToken(token);
        if (response.success) {
          setLoading(false);
          return;
        }
      }
      router.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    try {
      verifyAuth();
    } catch (err) {}
  }, []);

  return <>{loading ? "Loading" : children}</>;
}

export default AuthMiddleware;
