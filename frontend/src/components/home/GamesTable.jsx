/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const GamesTable = ({ games }) => {
    return (
        <table className="w-full border-separate border-spacing-2">
            <thead>
                <tr>
                    <th className="border border-slate-600 rounded-md">#</th>
                    <th className="border border-slate-600 rounded-md">
                        Title
                    </th>
                    <th className="border border-slate-600 rounded-md">
                        System
                    </th>
                    <th className="border border-slate-600 rounded-md">
                        Release Year
                    </th>
                    <th className="border border-slate-600 rounded-md max-md:hidden">
                        Developer
                    </th>
                    <th className="border border-slate-600 rounded-md max-md:hidden">
                        Publisher
                    </th>
                    <th className="border border-slate-600 rounded-md">
                        Operations
                    </th>
                </tr>
            </thead>
            <tbody>
                {games.map((game, index) => (
                    <tr key={game._id} className="h-8">
                        <td className="border border-slate-700 rounded-md text-center">
                            {index + 1}
                        </td>
                        <td className="border border-slate-700 rounded-md text-center">
                            {game.title}
                        </td>
                        <td className="border border-slate-700 rounded-md text-center">
                            {game.platform}
                        </td>
                        <td className="border border-slate-700 rounded-md text-center">
                            {game.releaseYear}
                        </td>
                        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                            {game.developer}
                        </td>
                        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                            {game.publisher}
                        </td>
                        <td className="border border-slate-700 rounded-md text-center">
                            <div className="flex justify-center gap-x-4">
                                <Link to={`/games/details/${game._id}`}>
                                    <BsInfoCircle className="text-2xl text-green-800" />
                                </Link>
                                <Link to={`/games/edit/${game._id}`}>
                                    <AiOutlineEdit className="text-2xl text-yellow-600" />
                                </Link>
                                <Link to={`/games/delete/${game._id}`}>
                                    <MdOutlineDelete className="text-2xl text-red-600" />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default GamesTable;
