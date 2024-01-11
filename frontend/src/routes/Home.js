import Logo from "../Logo.png";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextwithHover from "../components/shared/TextwithHover";

const focusCardsData = [
  {
    title: "Peaceful Piano",
    description: "Relax and indulge with beautiful piano pieces",
    imgurl:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Deep Focus",
    description: "Keep calm and focus with this music",
    imgurl:
      "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Instrumental Study",
    description: "Focus and soft stufy music in the background",
    imgurl:
      "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Focus Flow",
    description: "Up tempo instrumental hip hop",
    imgurl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Beats to think to",
    description: "Focus with deep techno and tech house ",
    imgurl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const soundIndiaCardsData = [
  {
    title: "Sound of Mumbai",
    description: "The songs that define, unite and distinguish Mumbai IN, according to listening patterns and math.",
    imgurl:
      "https://i.scdn.co/image/ab67706c0000da8436ea3a15c04a4b0821958ceb",
  },
  {
    title: "Sound of Kolkata",
    description: "The songs that define, unite and distinguish Kolkata IN, according to listening patterns and math.",
    imgurl:
      "https://i.scdn.co/image/ab67706c0000da84ca51e0b1b2526295415ea0f7",
  },
  {
    title: "Sound of Delhi",
    description: "The songs that define, unite and distinguish Delhi IN, according to listening patterns and math.",
    imgurl:
      "https://i.scdn.co/image/ab67706c0000da84fdad3548d41af616a7e8d64c",
  },
  {
    title: "Sound of Bengaluru",
    description: "The songs that define, unite and distinguish Bengaluru IN, according to listening patterns and math.",
    imgurl:
      "https://i.scdn.co/image/ab67706c0000da84d8f01d1da427744c3c74172d",
  },
  {
    title: "Sound of Hyderabad",
    description: "The songs that define, unite and distinguish Hyderabad IN, according to listening patterns and math.",
    imgurl:
      "https://i.scdn.co/image/ab67706c0000da84f3b38c327eb3412669e58d96",
  },
  
];

const Home = () => {
  return (
    <div className="h-full w-full flex ">
      {/* This is the screen size div due to w-full and h-full */}
      <div className="LeftPart h-full w-1/5 bg-black flex flex-col justify-between pb-10">
        <div>
          {/* THis is the Left part of the div covering 1/5th of the total part of the screen  */}
          <div className="logo p-4 flex justify-center">
            <img src={Logo} alt="Logo-MusicGarden" width={125} className="" />
          </div>
          <div className="py-5">
            <IconText
              iconName={"ion:home-sharp"}
              displayText={"Home"}
              active
            />
            <IconText
              iconName={"ion:search-sharp"}
              displayText={"Search"}
              // active
            />
            <IconText
              iconName={"clarity:library-solid"}
              displayText={"Library"}
              // active
            />
          </div>
          <div className="py-4">
            <IconText
              iconName={"ic:baseline-add-box"}
              displayText={"Create Playlist"}
              // active
            />
            <IconText
              iconName={"mdi:heart-box"}
              displayText={"Liked Songs"}
              // active
            />
          </div>
        </div>

        <div className="px-5 ">
          <div className="border border-bold rounded-full border-gray-400 text-white w-2/5 flex items-center px-2 py-1 justify-center cursor-pointer hover:border-white">
            <Icon icon="octicon:globe-24" />
            <div className="ml-2 text-sm font-bold  ">English</div>
          </div>
        </div>
      </div>

      <div className="RightPart h-full w-4/5 bg-appBlack overflow-auto ">
        <div className="navbar h-1/10 bg-black bg-opacity-30 flex  items-center justify-end">
          {/* This div is for navbar */}
          <div className="w-1/2 flex h-full items-center">
            <div className="w-3/5 flex justify-around">
              <TextwithHover displayText={"Premium"} />
              <TextwithHover displayText={"Support"} />
              <TextwithHover displayText={"Download"} />
            </div>
            {/* This is for straight | separating Download from Signup */}
            <div className="h-1/2 border-r border-white"></div>
            <div className="w-2/5 flex justify-around h-full items-center">
              <TextwithHover displayText={"Sign up"} />

              <div className="bg-white rounded-full font-semibold h-2/3 px-7 flex items-center justify-center cursor-pointer">
                Log in
              </div>
            </div>
          </div>
        </div>
        <div className="content p-8 pt-0 overflow-auto">
          {/* This div is for content */}
          <PlaylistView titleText="Focus" cardsData={focusCardsData} />
          <PlaylistView titleText="Garden of Music" cardsData={focusCardsData} />
          <PlaylistView titleText="Sound of India" cardsData={soundIndiaCardsData}/>
        </div>
      </div>
    </div>
  );
};

const PlaylistView = ({ titleText, cardsData }) => {
  return (
    <div className="text-white mt-8">
      <div className="text-2xl font-semibold mb-5">{titleText}</div>
      <div className="w-full flex justify-between space-x-4">
        {cardsData.map((item) => {
          return (
            <Card
              title={item.title}
              description={item.description}
              imgurl={item.imgurl}
            />
          );
        })}
      </div>
    </div>
  );
};

const Card = ({ title, description, imgurl }) => {
  return (
    <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
      <div className="px-3 pb-4 pt-2">
        <img src={imgurl} alt="Label" className="w-full rounded-md" />
      </div>
      <div className="text-white  font-semibold py-3">{title}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  );
};

export default Home;
