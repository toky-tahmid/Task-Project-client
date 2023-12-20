import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("https://i.ibb.co/JQtCNts/Green-and-Yellow-Retro-Blocks-Error-Page-Website-UI-Prototype-1.png  ")' }}>
      <div className="text-white text-center ml-96 flex mt-96">
        <p className="text-2xl text-green-500 mt-2 mr-8 font-bold">Return to</p> <Link to="/"><button className="btn glass mr-44 btn-wide text-xl font-bold text-green-500">Home</button></Link>
      </div>
    </div>
    );
};

export default Error;