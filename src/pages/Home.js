// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMusicContext } from '../services/MusicContext';
import ApiService from '../services/ApiService';

const Home = () => {
  const { updateMusicData } = useMusicContext();
  const [query, setQuery] = useState('bite me'); // Set default query
  const [container, setContainer] = useState([]);
  const navigate = useNavigate();

  const fetchData = () => {
    ApiService.fetchData(query, setContainer, updateMusicData);
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchData();
  };

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <h1 className="font-bold text-center mt-8">Music List Kelompok 18</h1>
      <form onSubmit={onSubmitHandler}>
        <div className="ml-10 mt-8">
          <h5 className="font-bold">Cari Judul Lagu</h5>
          <input
            type="text"
            value={query}
            onChange={onChangeHandler}
            placeholder=" Masukkan Judul Lagu"
            className="border-2 border-slate-600 rounded-md placeholder:text-sm"
          />
          <button
            type="submit"
            className="ml-3 border-2 p-1 px-2 rounded-md bg-black text-white hover:border-slate-600 text-sm hover:bg-white hover:text-black transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-105 duration-300"
          >
            Search
          </button>
        </div>
      </form>

      {container.length > 0 &&
        container.map((item) => (
          <div className="mt-4 ml-6" key={item.track.key}>
            <div className="w-[200px] h-[300px] rounded-lg float-left border-2 shadow-lg overflow-hidden ml-3 transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-105 duration-300">
              <Link
                to={`/detail/${item.track.key}`}
                onClick={() => updateMusicData(item)}
                className=""
              >
                <img
                  src={item.track.share.image}
                  alt={item.track.title}
                  className="-mt-6"
                />
                <h5 className="text-center px-1 text-black mt-2">{item.track.title}</h5>
                <p className="text-center px-1 text-black">{item.track.subtitle}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
