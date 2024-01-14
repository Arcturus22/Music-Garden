import LoggedInContainer from "../Containers/LoggedInContainer";

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
    description:
      "The songs that define, unite and distinguish Mumbai IN, according to listening patterns and math.",
    imgurl: "https://i.scdn.co/image/ab67706c0000da8436ea3a15c04a4b0821958ceb",
  },
  {
    title: "Sound of Kolkata",
    description:
      "The songs that define, unite and distinguish Kolkata IN, according to listening patterns and math.",
    imgurl: "https://i.scdn.co/image/ab67706c0000da84ca51e0b1b2526295415ea0f7",
  },
  {
    title: "Sound of Delhi",
    description:
      "The songs that define, unite and distinguish Delhi IN, according to listening patterns and math.",
    imgurl: "https://i.scdn.co/image/ab67706c0000da84fdad3548d41af616a7e8d64c",
  },
  {
    title: "Sound of Bengaluru",
    description:
      "The songs that define, unite and distinguish Bengaluru IN, according to listening patterns and math.",
    imgurl: "https://i.scdn.co/image/ab67706c0000da84d8f01d1da427744c3c74172d",
  },
  {
    title: "Sound of Hyderabad",
    description:
      "The songs that define, unite and distinguish Hyderabad IN, according to listening patterns and math.",
    imgurl: "https://i.scdn.co/image/ab67706c0000da84f3b38c327eb3412669e58d96",
  },
];

const Home = () => {
  return (
    <LoggedInContainer currActiveScreen="home">
      <PlaylistView titleText="Focus" cardsData={focusCardsData} />
      <PlaylistView titleText="Garden of Music" cardsData={focusCardsData} />
      <PlaylistView
        titleText="Sound of India"
        cardsData={soundIndiaCardsData}
      />
    </LoggedInContainer>
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
