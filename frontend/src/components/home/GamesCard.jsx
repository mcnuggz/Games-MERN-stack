/* eslint-disable react/prop-types */
import GameSingleCard from "./GameSingleCard";

const GamesCard = ({ games }) => {
    if (!games) return null;
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {games.map((item) => (
                <GameSingleCard key={item._id} game={item} />
            ))}
        </div>
    );
};

export default GamesCard;
