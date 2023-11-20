// src/services/ProfileService.js

class ProfileService {
  static id = "";
  static name = "";
  static email = "";

  static async fetchUserData(navigate) {
    try {
      // Ambil username dari sessionStorage
      let username = sessionStorage.getItem("username");

      // Fetch data pengguna berdasarkan username
      const response = await fetch(`http://localhost:8000/user/${username}`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("jwttoken"),
        },
      });

      if (!response.ok) {
        // Handle error jika respons tidak berhasil
        throw new Error("Error fetching user data");
      }

      const data = await response.json();
      // Pastikan kunci di objek data sesuai dengan respons API
      ProfileService.id = data.id;
      ProfileService.name = data.name;
      ProfileService.email = data.email;
    } catch (error) {
      console.error("Error fetching user data:", error);

      // Redirect ke halaman login jika data pengguna tidak ditemukan atau token tidak valid
      navigate("/login");
    }
  }

  static getId() {
    return ProfileService.id;
  }

  static getName() {
    return ProfileService.name;
  }

  static getEmail() {
    return ProfileService.email;
  }
}

export default ProfileService;
