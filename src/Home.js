import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState("bite me"); // Set default query
  const [container, setContainer] = useState([]);
  const [endPoint, setEndPoint] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    const url = `https://shazam.p.rapidapi.com/search?term=${query}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "7fbf449755mshda9343543ee4455p1444bejsn69b45c8405f2",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();

      // Ubah teks respons menjadi objek JSON
      const data = JSON.parse(result);

      // Cek apakah properti "tracks" ada dalam objek data
      if (data.tracks) {
        // Ambil data yang Anda inginkan dari properti "hits" di dalam "tracks"
        const hits = data.tracks.hits;
        setContainer(hits);
        console.log(hits);
      } else {
        console.error('Properti "tracks" tidak ditemukan dalam respons API.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (endPoint) {
      fetchData();
    }
  }, [endPoint]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setEndPoint(query);
  };

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  // Tambahkan useEffect untuk memanggil fetchData saat komponen dimuat pertama kali
  useEffect(() => {
    fetchData();
  }, []); // Dependensi kosong agar hanya dijalankan sekali saat komponen dimuat

  return (
    <div>
      <h2 class="font-bold text-center mt-8">Music List Kelompok 18</h2>
      <form onSubmit={onSubmitHandler}>
        <div class="ml-10 mt-8">
          <h5 class="font-bold">Cari Judul Lagu</h5>
          <input
            type="text"
            value={query}
            onChange={onChangeHandler}
            placeholder=" Masukkan Judul Lagu"
            class="border-2 border-slate-600 rounded-md placeholder:text-sm"
          />
          <button
            type="submit"
            class="ml-5 border-2 p-1 rounded-md border-slate-600 text-sm hover:bg-black hover:text-white transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-105 duration-300"
          >
            Search
          </button>
        </div>
      </form>

      {container.map((item) => {
        return (
          <div class="mt-3 ml-6" key={item.track.id}>
            <div class="w-[200px] h-[300px] rounded-lg float-left border-2 shadow-lg overflow-hidden ml-3">
              <img src={item.track.share.image} alt={item.track.title}></img>
              <h5 class="text-center px-1">{item.track.title}</h5>
              <p class="text-center px-1">{item.track.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
