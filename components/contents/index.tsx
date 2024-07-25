import { useEffect, useState } from "react";
import MovieSlides from "./MovieSlides";
import { fetchFirmPopular } from "@/Services/firmpopular";
import loadingAnimation from "../../assets/images/loadingAnimation.svg";
import Image from "next/image";

export default function Contents() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const getData = async () => {
            const result = await fetchFirmPopular();
            setData(result);
            setIsLoading(false);
        }
        getData();
    }, [])
  return (
    <div className="w-10/12 h-full p-7 m-auto flex flex-col items-center justify-center bg-red-200 rounded-xl">
        <div>
            <h2 className="text-white text-4xl mb-10">Currently playing</h2>
        </div>
        <div>     
        {
            isLoading ? <div><Image src={loadingAnimation} alt="loading animation"/></div> : <MovieSlides dataSlide={data} />
        }
        </div>
    </div>
  )
}
