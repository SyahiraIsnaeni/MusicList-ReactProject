// src/pages/Profile.js

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import ProfileService from "../services/ProfileService";

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    ProfileService.fetchUserData(navigate);
  }, [navigate]);

  return (
    <div>
      <h2 className="text-center font-bold mt-12">Profil Pengguna</h2>
      <div className="mx-auto">
        <FaUser className="mt-12 w-32 h-32 mx-auto" />
        <div className="mt-5 mx-auto text-center text-lg">
          <strong>ID Pengguna:</strong> {ProfileService.getId()}
        </div>
        <div className="mt-2 mx-auto text-center text-lg">
          <strong>Name:</strong> {ProfileService.getName()}
        </div>
        <div className="mt-2 mx-auto text-center text-lg">
          <strong>Email:</strong> {ProfileService.getEmail()}
        </div>
        <Link to={"/"} className="hover:font-bold ml-1/2 w-[300px] h-[50px] bg-slate-400">
          <div className="p-2 ml-[490px] border-2 text-white text-center bg-black w-[300px] h-[45px] rounded-lg mt-3">
            Back
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
