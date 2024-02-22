/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const GameModal = ({ game, onClose }) => {
    return (
        <div
            className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
            onClick={onClose}>
            <div
                onClick={(event) => event.stopPropagation()}
                className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative">
                <AiOutlineClose
                    onClick={onClose}
                    className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
                />
                <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
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
                <p className="mt-4">Show anything here</p>
                <p className="my-2 overflow-scroll">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Nunc id cursus metus aliquam eleifend. Nisi porta
                    lorem mollis aliquam ut porttitor leo a. Sit amet massa
                    vitae tortor condimentum. Id neque aliquam vestibulum morbi
                    blandit cursus risus at. Mi ipsum faucibus vitae aliquet nec
                    ullamcorper sit amet. Libero volutpat sed cras ornare arcu
                    dui. Lorem ipsum dolor sit amet. Fringilla phasellus
                    faucibus scelerisque eleifend donec pretium vulputate sapien
                    nec. Placerat vestibulum lectus mauris ultrices eros.
                    Volutpat lacus laoreet non curabitur gravida arcu ac.
                    Iaculis eu non diam phasellus. Pellentesque eu tincidunt
                    tortor aliquam.
                </p>
            </div>
        </div>
    );
};

export default GameModal;
