import { useEffect, useState } from "react";
import { LuThumbsUp } from "react-icons/lu";
import { MdPreview } from "react-icons/md";

const videos = [
  {
    id: 1,

    title: "Pixabay details",

    thumbnail: "https://images.pexels.com/photos/221181/pexels-photo-221181.jpeg?auto=compress&cs=tinysrgb&w=600",

    likes: 150,

    views: 400,

    channelName: "Social Media",

    channelLogoUrl: "https://images.pexels.com/lib/avatars/grey.png?w=0&h=30&fit=crop",
  },

  {
    id: 2,

    title: "Clicking pictures with clarity",

    thumbnail: "https://images.pexels.com/photos/320617/pexels-photo-320617.jpeg?auto=compress&cs=tinysrgb&w=600",

    likes: 100,

    views: 180,

    channelName: "Social Media",

    channelLogoUrl: "https://images.pexels.com/lib/avatars/grey.png?w=0&h=30&fit=crop",
  },
  {
    id: 3,

    title: "Nature beauty in morning",

    thumbnail: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=600",

    likes: 170,

    views: 60,

    channelName: "Nature Beauti",

    channelLogoUrl: "https://images.pexels.com/lib/avatars/grey.png?w=0&h=30&fit=crop",
  },
  {
    id: 4,

    title: "Youtube logo",

    thumbnail: "https://images.pexels.com/photos/3227986/pexels-photo-3227986.jpeg?auto=compress&cs=tinysrgb&w=600",

    likes: 32,

    views: 56,

    channelName: "Social Media",

    channelLogoUrl: "https://images.pexels.com/lib/avatars/grey.png?w=0&h=30&fit=crop",
  },
  {
    id: 5,

    title: "Stock android",

    thumbnail: "https://images.pexels.com/photos/5678243/pexels-photo-5678243.jpeg?auto=compress&cs=tinysrgb&w=600",

    likes: 150,

    views: 65,

    channelName: "Social Media",

    channelLogoUrl: "https://images.pexels.com/lib/avatars/grey.png?w=0&h=30&fit=crop",
  },
  {
    id: 6,

    title: "New UI designs",

    thumbnail: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",

    likes: 110,

    views: 900,

    channelName: "Android",

    channelLogoUrl: "https://images.pexels.com/lib/avatars/grey.png?w=0&h=30&fit=crop",
  },
  {
    id: 7,

    title: "Laptop works",

    thumbnail: "https://images.pexels.com/photos/6298412/pexels-photo-6298412.jpeg?auto=compress&cs=tinysrgb&w=600",

    likes: 600,

    views: 2900,

    channelName: "Laptop",

    channelLogoUrl: "https://images.pexels.com/lib/avatars/grey.png?w=0&h=30&fit=crop",
  },
  {
    id: 8,

    title: "Just click",

    thumbnail: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=600",

    likes: 900,

    views: 200,

    channelName: "Nature",

    channelLogoUrl: "https://images.pexels.com/lib/avatars/grey.png?w=0&h=30&fit=crop",
  },
  {
    id: 9,

    title: "Galaxy stars info",

    thumbnail: "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=600",

    likes: 678,

    views: 235,

    channelName: "Galaxy",

    channelLogoUrl: "https://images.pexels.com/lib/avatars/grey.png?w=0&h=30&fit=crop",
  },
  {
    id: 10,

    title: "=Mind fresh image",

    thumbnail: "https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=600",

    likes: 765,

    views: 798,

    channelName: "Peaceful Mind",

    channelLogoUrl: "https://images.pexels.com/lib/avatars/grey.png?w=0&h=30&fit=crop",
  },
  {
    id: 11,

    title: "Designs",

    thumbnail: "https://images.pexels.com/photos/1037994/pexels-photo-1037994.jpeg?auto=compress&cs=tinysrgb&w=600",

    likes: 123,

    views: 43,

    channelName: "Flower Design",

    channelLogoUrl: "https://images.pexels.com/lib/avatars/grey.png?w=0&h=30&fit=crop",
  },
  {
    id: 12,

    title: "Stars lights with potrait",

    thumbnail: "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=600",

    likes: 65,

    views: 687,

    channelName: "Stars light",

    channelLogoUrl: "https://images.pexels.com/lib/avatars/grey.png?w=0&h=30&fit=crop",
  },
  {
    id: 13,

    title: "Galaxy looks",

    thumbnail: "https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=600",

    likes: 54,

    views: 798,

    channelName: "Galaxy World",

    channelLogoUrl: "https://images.pexels.com/lib/avatars/grey.png?w=0&h=30&fit=crop",
  },
  {
    id: 14,

    title: "Daily work lifes",

    thumbnail: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=600",

    likes: 43,

    views: 568,

    channelName: "Daily work life",

    channelLogoUrl: "https://images.pexels.com/lib/avatars/grey.png?w=0&h=30&fit=crop",
  },
  {
    id: 15,

    title: "Water waves with blues",

    thumbnail: "https://images.pexels.com/photos/3560168/pexels-photo-3560168.jpeg?auto=compress&cs=tinysrgb&w=600",

    likes: 546,

    views: 678,

    channelName: "Water waves",

    channelLogoUrl: "https://images.pexels.com/lib/avatars/grey.png?w=0&h=30&fit=crop",
  },
  {
    id: 16,

    title: "Darks side",

    thumbnail: "https://images.pexels.com/photos/3374210/pexels-photo-3374210.jpeg?auto=compress&cs=tinysrgb&w=600",

    likes: 234,

    views: 355,

    channelName: "Dark",

    channelLogoUrl: "https://images.pexels.com/lib/avatars/grey.png?w=0&h=30&fit=crop",
  },
  {
    id: 17,

    title: "Evening nature",

    thumbnail: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=600",

    likes: 50,

    views: 250,

    channelName: "Kerala",

    channelLogoUrl: "https://images.pexels.com/lib/avatars/grey.png?w=0&h=30&fit=crop",
  },
  {
    id: 18,

    title: "EDecoration details",

    thumbnail: "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=600",

    likes: 564,

    views: 354,

    channelName: "Decoration",

    channelLogoUrl: "https://images.pexels.com/lib/avatars/grey.png?w=0&h=30&fit=crop",
  },
  {
    id: 19,

    title: "Dreams",

    thumbnail: "https://images.pexels.com/photos/2541310/pexels-photo-2541310.jpeg?auto=compress&cs=tinysrgb&w=600",

    likes: 234,

    views: 75,

    channelName: "Dreams",

    channelLogoUrl: "https://images.pexels.com/lib/avatars/grey.png?w=0&h=30&fit=crop",
  },
  {
    id: 20,

    title: "Sun light",

    thumbnail: "https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?auto=compress&cs=tinysrgb&w=600",

    likes: 34,

    views: 978,

    channelName: "Sun",

    channelLogoUrl: "https://images.pexels.com/lib/avatars/grey.png?w=0&h=30&fit=crop",
  },
  // More Data to render at least 20 Youtube Card ( For better visual )
];

const Cards = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProductList(videos);
    }, 0);
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold mt-1 ml-1">Recommended</h1>
      <div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8">
        {productList.map((item) => (
          <div>
            <div className="flex">
              <img src={item.channelLogoUrl} />
              <h3 className="ml-2 mb-1">{item.channelName}</h3>
            </div>
            <div className="flex">
              <a href="#"><img className="mt-3 rounded-xl" src={item.thumbnail} alt={item.title} style={{height: 199}} /></a>
            </div>
            <div className="flex">
              <h3>{item.title}</h3>
            </div>
            <div className="flex">
              <LuThumbsUp className="mt-1 mr-1" />
              <p>{item.likes}k</p>
            </div>
            <div className="flex">
              <MdPreview className="mt-1 mr-1" />
              <p>{item.views}k</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
