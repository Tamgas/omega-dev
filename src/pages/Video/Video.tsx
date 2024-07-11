import "./Video.css";
import Footer from "../../Companent/Footer/Footer";
import Header from "../../Companent/Header/Header";
import useFetch from "../../hooks/useFetch";
import { VideoList } from "../../Companent/VideoList/videoList";


function Video() {
  const{ data, isLoading } = useFetch({
    url: "http://3.38.98.134/meetups"
  })
  
  console.log("data: ", data);
  
  if(isLoading) {
    return <div>Loading...</div>
  }
  
  return (
    <>
      <Header />
      <div id="video">
        <div className="container">
          <div className="video">
            <div className="video-add">
              <button>Добавить видео</button>
            </div>
            <div className="video-title">
              <h1>Все видео</h1>
            </div>
            <div className="video__content">
            {
               data && data.map((item: any) => 
                <VideoList
                    imgUrl={item?.cover}
                    videoTitle={item?.title}
                    organizationName={item?.organization_name}
                    date ={item?.date}
                />
              )
            }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Video;
