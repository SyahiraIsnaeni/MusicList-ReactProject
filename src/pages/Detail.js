import React from "react";
import { Link, useParams } from "react-router-dom";
import { useMusicContext } from "../services/MusicContext";

const Detail = () => {
  const { musicData } = useMusicContext();
  const { id } = useParams();

  // Cari data lagu yang sesuai dengan ID di musicData
  const selectedSong = musicData.find((item) => item.track.key === id);

  if (!selectedSong) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img
        src={selectedSong.track.share.image}
        alt={selectedSong.track.title}
        class="h-[350px] w-[320px] mx-auto mt-3 rounded-xl"
      />
      <h5 class="text-center mt-2">Title Song: {selectedSong.track.title}</h5>
      <p className="text-center px-1">Artist: {selectedSong.track.subtitle}</p>
      <p className="text-center px-1 -mt-2">
        Subject: {selectedSong.track.share.text}
      </p>
      <p className="text-center px-1 -mt-2">Type: {selectedSong.track.type}</p>
      <a href={selectedSong.track.url} target="blank">
        <p class="text-center text-blue-600 mx-auto underline -mt-6 font-medium">
          Listen Now!
        </p>
      </a>
      <Link
        to={"/"}
        class="hover:hover:font-bold ml-1/2 w-[300px] h-[40px] bg-slate-400"
      >
        <div class="p-2 -mt-4 ml-[490px] border-2 text-white text-center bg-black w-[300px] h-[45px] rounded-lg">
          Back
        </div>
      </Link>
    </div>
  );
};

export default Detail;
