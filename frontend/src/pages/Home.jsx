import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import GamesCard from "../components/home/GamesCard";
import GamesTable from "../components/home/GamesTable";

const Home = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState("table");

    useEffect(() => {
        setLoading(true);
        //axios is used to make http requests from browser or node.js server
        axios
            .get("http://localhost:9999/games")
            .then((res) => {
                setLoading(false);
                setGames(res.data.data);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="p-4">
            <div className="flex justify-center items-center gap-x-4">
                <button
                    className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
                    onClick={() => setShowType("table")}>
                    Table
                </button>
                <button
                    className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
                    onClick={() => setShowType("card")}>
                    Grid
                </button>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl my-8">Games Catalog</h1>
                <Link to="/games/create">
                    <MdOutlineAddBox className="text-sky-800 text-4xl" />
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : showType === "table" ? (
                <GamesTable games={games} />
            ) : (
                <GamesCard games={games} />
            )}
        </div>
    );
};

export default Home;
