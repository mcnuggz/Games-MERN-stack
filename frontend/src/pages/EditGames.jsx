import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const EditGames = () => {
    const [title, setTitle] = useState("");
    const [platform, setPlatform] = useState("");
    const [releaseYear, setReleaseYear] = useState("");
    const [developer, setDeveloper] = useState("");
    const [publisher, setPublisher] = useState("");
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:9999/games/${id}`)
            .then((res) => {
                setLoading(false);
                setTitle(res.data.title);
                setPlatform(res.data.platform);
                setReleaseYear(res.data.releaseYear);
                setDeveloper(res.data.developer);
                setPublisher(res.data.publisher);
            })
            .catch((err) => {
                setLoading(false);
                enqueueSnackbar("Error", {
                    variant: "error",
                });
                console.log(err);
            });
    }, [id]);

    const handleEditGame = () => {
        const data = {
            title,
            platform,
            releaseYear,
            developer,
            publisher,
        };
        setLoading(true);
        axios
            .put(`http://localhost:9999/games/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar("Entry successfully updated", {
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
            <h1 className="text-3xl my-4">Edit Game Entry</h1>
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
                <button className="p-2 bg-sky-300 m-8" onClick={handleEditGame}>
                    Update
                </button>
            </div>
        </div>
    );
};

export default EditGames;
