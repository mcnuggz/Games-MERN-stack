import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const CreateGames = () => {
    const [title, setTitle] = useState("");
    const [platform, setPlatform] = useState("");
    const [releaseYear, setReleaseYear] = useState("");
    const [developer, setDeveloper] = useState("");
    const [publisher, setPublisher] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const handleSaveGame = () => {
        const data = {
            title,
            platform,
            releaseYear,
            developer,
            publisher,
        };
        setLoading(true);
        axios
            .post("http://localhost:9999/games", data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar("Game Entry Created successfully", {
                    variant: "success",
                });
                navigate("/");
            })
            .catch((err) => {
                setLoading(false);
                enqueueSnackbar("Error", {
                    variant: "error",
                });
                console.log(err);
            });
    };

    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Create Game Entry</h1>
            {loading ? <Spinner /> : ""}
            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                        placeholder="i.e. Chrono Trigger, Final Fantasy"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">System</label>
                    <input
                        type="text"
                        value={platform}
                        onChange={(e) => setPlatform(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                        placeholder="i.e. PlayStation 2, Xbox 360"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">
                        Release Year
                    </label>
                    <input
                        type="text"
                        value={releaseYear}
                        onChange={(e) => setReleaseYear(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                        placeholder="1995"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">
                        Developer
                    </label>
                    <input
                        type="text"
                        value={developer}
                        onChange={(e) => setDeveloper(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                        placeholder="i.e. Capcom"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">
                        Publisher
                    </label>
                    <input
                        type="text"
                        value={publisher}
                        onChange={(e) => setPublisher(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                        placeholder="i.e. Capcom"
                    />
                </div>
                <button className="p-2 bg-sky-300 m-8" onClick={handleSaveGame}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default CreateGames;
