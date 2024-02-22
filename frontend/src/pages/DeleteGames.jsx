import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteGames = () => {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleDeleteGame = () => {
        setLoading(true);
        axios
            .delete(`http://localhost:9999/games/${id}`)
            .then(() => {
                setLoading(false);
                enqueueSnackbar("Entry successfully deleted", {
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
            <h1 className="text-3xl my-4">Remove Game from Collection</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
                    <h3 className="text-2xl">
                        Are you sure you want to delete this game?
                    </h3>
                    <button
                        className="p-4 bg-red-600 text-white m-8 w-full"
                        onClick={handleDeleteGame}>
                        Yes, Delete it
                    </button>
                    <button
                        className="p-4 bg-gray-400 text-white m-8 w-full"
                        onClick={navigate("/")}>
                        Cancel
                    </button>
                </div>
            )}
        </div>
    );
};

export default DeleteGames;
