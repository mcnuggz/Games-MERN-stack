/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { AiOutlineEdit } from "react-icons/ai";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import GameModal from "./GameModal";
import { useState } from "react";

const GameSingleCard = ({ game }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div
            key={game._id}
            className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
            <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
                {game.releaseYear}
            </h2>
            <h4 className="my-2 text-gray-500">{game._id}</h4>
            <div className="flex justify-start items-center gap-x-2">
                <PiBookOpenTextLight className="text-red-300 text-2xl" />
                <h2 className="my-1">{game.title}</h2>
            </div>
            <div className="flex justify-start items-center gap-x-2">
                <BiUserCircle className="text-red-300 text-2xl" />
                <h2 className="my-1">{game.platform}</h2>
            </div>
            <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
                <BiShow
                    className="text-3xl text-blue-800 hover:text-black cursor-pointer"
                    onClick={() => setShowModal(true)}
                />
                <Link to={`/games/details/${game._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
                </Link>
                <Link to={`/games/edit/${game._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
                </Link>
                <Link to={`/games/delete/${game._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
                </Link>
            </div>
            {showModal && (
                <GameModal game={game} onClose={() => setShowModal(false)} />
            )}
        </div>
    );
};

export default GameSingleCard;
