import Contents from '@/components/contents';
import Header from '@/components/header'
import Navbar from '@/components/navbar';
import { ThemeContext } from '@/context/themeContext';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [isDark, setIsDark] = useState<boolean>(false);
  const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/v2/get-trailers',
    params: {
      tconst: 'tt0120338'
    },
    headers: {
      'x-rapidapi-key': '14348d8d40msh44191441b6d6e03p1f5eb6jsn416e2e61ff14',
      'x-rapidapi-host': 'imdb8.p.rapidapi.com'
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array to run the effect only once
  const handleSwitch = (setisDark: boolean) => {
    setIsDark(setisDark);
  }
  return (
    <ThemeContext.Provider  value={{ isDark, handleSwitch }}>
    <div className='relative w-full h-full flex flex-col gap-20'>
      <div className='absolute top-0 left-0 w-full h-fit bg-transparent z-30'>
        <Navbar />
      </div>
      <div>
      <Header />
      </div>
      <div>
        {/* <video src="https://prod.entry.video-ads.a2z.com/2018-01-01/ads?ptner=imdb&pt=all&dplat=android&gdpre=0&maxd=30&mind=6&prid=imdb-app&bp=preroll&pj=%7B%22CustomMacroContext%22%3A%7B%22PriorityVideoSource%22%3A%22true%22%7D%7D&geoc=US&uagent=Mozilla%2F5.0%20%28Linux%3B%20Android%208.1.0%3B%20Mi%20MIX%202%20Build%2FOPM7.181205.001%3B%20wv%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Version%2F4.0%20Chrome%2F72.0.3626.121%20Mobile%20Safari%2F537.36%20IMDb%2F8.2.4.108240602%20%28Xiaomi%7CMi%20MIX%202%3B%20Android%2027%3B%20Xiaomi%29%20IMDb-flg%2F8.2.4%20%281080%2C2016%2C403%2C403%29%20IMDb-var%2Fapp-andr-ph&lp=987266a8-448b-4bbe-8770-4805fdb695d4&tkws=%7B%22tt%22%3A%22tv%22%2C%22clientId%22%3A%22imdb%22%2C%22vi%22%3A%22_PLAYLISTINDEX_%22%2C%22resp%22%3A%22vast3%22%2C%22u%22%3A%22_CLIENT_SIDE_ATTRIBUTE_%22%2C%22vl%22%3A%22_PLAYLISTID_%22%2C%22android_app%22%3A%228.2.4%22%2C%22id%22%3A%22vi3134834201%7Ctt32383738%22%2C%22vt%22%3A%22_PLAYERTYPE_%22%7D&adUnit=imdb.us.android&slots=%5B%7B%22s%22%3A%221080x2016%22%2C%22mt%22%3A%22v%22%7D%5D&slot=preroll_android&ip=154.29.87.107&vid=vi3134834201&lobexp=6&pdt=EmUKXQAAAAAAAAACBOjkkCaXZNPuBdYoGoGUIC2Zy%2BWoPc7UTm1jFO%2BlOc7uaefyBAoxXVJW%2FgrR0RYb62yA0FFmKoOPDu5pOrE6xMh%2BxHkmHrTY%2FxOGJnODmAmGJCw6jRIECCEQASgCQmUKXQAAAAAAAAACBNDdRlInabF2kwxlZZJq7xYNb9f2dqmiCmTJWBh5ZQ5%2BCP6FDMR2iL0iVT3IJr0kSQ4bnfn0omPRDDb46M5gyuX3vssXaaIiiqwa04bS3RlEfng67hIECCEQAUqFAQp9AAAAAAAAAAIEmtOmM26h6dPRMWF4H56bjJ1wFBUML1zGlalwgB7zEBeNtoigwqteqFOgiQDYX8bzDxoQvHqEvbvfAIvTjpeCLHBTKNTMVjuwW4UwZVdDKUv3dP2xdOW8Wjjh0YVBpbsPZimjNMXgDiMwMc%2Fd37rIzz8L4G0SBAghEAE%3D&maxc=1&rt=vast3"></video> */}
        {/* <video width="600" controls>
            <source src="https://imdb-video.media-imdb.com/vi3134834201/1434659529640-260ouz-1715882201470.mp4?Expires=1721572826&Signature=os9BtE3EOhaGnxedb9Re2-wAfo~qXlPOLZ2B7wOjYGl~ve2clLwoCdBys6EJdgjeEkpd1fs4ICrQfqMJjJaC5qGlP4z33E92EPNhmeEH3z~O7l1SW0IvC6COR-kf2WOuTyyUMEPj4Jlkc7xDlQR-nCm45nlTBJNuhNlA0rBCgI8mVSsfDCquUO-5Jj66dERYHxtURZJX-lYqCMUmCu6epPrbIhthN3Kug7BRCsXy5b0ohU5vF2VCImCj0NzSkysvnUYkktYWJyE2N--Ong5-jcl-t6PvYmah8YAuJUHaN3sCdiribYl73xyQy1kxgH2t1HmkrQScKVPpJd135WI-8w__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <Contents />  
      </div>
    </div>
    </ThemeContext.Provider>
  )
}
