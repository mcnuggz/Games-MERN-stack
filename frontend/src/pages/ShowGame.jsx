import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowGame = () => {
    const [games, setGames] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:9999/games/${id}`)
            .then((res) => {
                setLoading(false);
                setGames(res.data);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    }, [id]);

    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Show Game</h1>
            {loading ? (
                <Spinner />
            ) : (
                // TODO: web scrape to find cover art?
                <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Id</span>
                        <span>{games._id}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">
                            Title
                        </span>
                        <span>{games.title}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">
                            System
                        </span>
                        <span>{games.platform}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">
                            Release Year
                        </span>
                        <span>{games.releaseYear}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">
                            Developer
                        </span>
                        <span>{games.developer}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">
                            Publisher
                        </span>
                        <span>{games.publisher}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">
                            Last Updated
                        </span>
                        <span>{new Date(games.updatedAt).toString()}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShowGame;
