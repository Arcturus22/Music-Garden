import Logo from "../Logo.png";


const Home = () => {
  return (<div className="h-full w-full flex ">
    <div className="LeftPart h-full w-1/5 bg-black">
    
    <div className="logo p-4 flex justify-center bg-red-500 "> 
        <img src={Logo} alt="Logo-MusicGarden" width={130} className="" />
    </div>
    </div>
    <div className="RightPart h-full">
    Hello
    </div>
  </div>);
};

export default Home;
