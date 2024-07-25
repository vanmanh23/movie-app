import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { GetPathOfMovieVideo, GetVideoPlayUrl } from "@/Services/firmpopular";


type dataSlide = {
  id: string;
  url: string;
  width: number;
  height: number;
  titleText: string;
  ratingsSummary: number;
  year: number;
};
export default function MovieSlides({ dataSlide }: { dataSlide: dataSlide[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [getId, setGetId] = useState("");
  const [VideoId, setVideoId] = useState("");
  const [VideoUrl, setVideoUrl] = useState("");
  const handleNext = () => {
    if (currentIndex < dataSlide.length - 5) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handlePriviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  useEffect(() => {
   const fetchVideos = async () => {
      const data = await GetPathOfMovieVideo(getId);
      setVideoId(data);
      console.log("data fetching:", data );
   } 
   fetchVideos();
  }, [getId]);
  useEffect(() => {
    const getVideoUrl = async() => {
      const data = await GetVideoPlayUrl();
      setVideoUrl(data);
    }
    getVideoUrl();
  })
  console.log("movie choose: ", getId);
  console.log("Video Id: ", VideoId)
  console.log("Video url: ", VideoUrl);
  return (
    <div className="relative w-full flex flex-row justify-center items-center">
      <div className="relative bottom-1/2 left-8 ">
        <button
          onClick={handlePriviousClick}
          className="text-3xl text-white p-4 bg-red-500  rounded-full "
        >
          <ChevronLeft size={40} className="mr-4" />
        </button>
      </div>
      <div className="flex flex-row gap-5 items-center w-full h-60 transform transition-transform duration-1000 z-20">
        {dataSlide.slice(currentIndex, currentIndex + 5).map((firm) => (    
          <div key={firm.id} className="w-full h-64">    
          <Dialog>
          <DialogTrigger>
          <div
            key={firm.id}
            className="relative w-full h-64 overflow-hidden group"
            onClick={() => setGetId(firm.id)}
          > 
              <Image
              src={firm.url}
              alt="poster"
              width={firm.width}
              height={firm.height}
              className="w-full h-full object-cover"
              objectFit="cover"
            />
            <div className="absolute -bottom-10 left-0 right-0 bg-opacity-50 text-white p-3 bg-black transition-all duration-1000 ease-in-out h-0 group-hover:bottom-0 group-hover:h-full">
              <p className="text-2xl font-bold">{firm.titleText}</p>
              <p>Rank: {firm.ratingsSummary} </p>
              <p>Year: {firm.year}</p>
            </div>
          </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                <video width="600" controls>
            <source src={VideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        </div>
        ))}
      </div>
      <div className="relative bottom-1/2 right-8">
        <button
          onClick={handleNext}
          className="text-white p-4 bg-red-500  rounded-full"
        >
          <ChevronRight size={40} className="ml-4" />
        </button>
      </div>
    </div>
  );
}
