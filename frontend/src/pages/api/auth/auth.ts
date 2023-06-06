class AuthApi {
  async register(data: any) {
    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      return response.json();
    } catch (err) {
      console.log(err);
    }
  }
  async login(data: any) {
    try {
      const response = await fetch("http://localhost:4000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (err) {
      console.log(err);
    }
  }

  async verifyToken(token: string) {
    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/auth/verify-token",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      return response.json();
    } catch (err) {
      console.log(err);
    }
  }
}

export default AuthApi;
