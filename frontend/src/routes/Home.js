import Logo from "../Logo.png";
import IconText from "../components/shared/IconText";

const Home = () => {
  return (
    <div className="h-full w-full flex ">
      {/* This is the screen size div due to w-full and h-full */}
      <div className="LeftPart h-full w-1/5 bg-black">
        {/* THis is the Left part of the div covering 1/5th of the total part of the screen  */}
        <div className="logo p-4 flex justify-center bg-red-500 ">
          <img src={Logo} alt="Logo-MusicGarden" width={130} className="" />
        </div>
        <div>
          <IconText iconName={"ion:home-sharp"} displayText={"Home"} />
          <IconText iconName={"ion:search-sharp"} displayText={"Search"} />
          <IconText iconName={"ion:home-sharp"} displayText={"Home"} />
          <IconText iconName={"ion:home-sharp"} displayText={"Home"} />
        </div>
      </div>

      <div className="RightPart h-full">Hello</div>
    </div>
  );
};

export default Home;
