export const VideoList = ({
    imgUrl,
    videoTitle,
    date,
    organizationName,
    
}: {
    imgUrl: string,
    videoTitle: number,
    date: string,
    organizationName: string,

}) => {
    return(
    <>
        <div className="video-block">
            <div className="main-block">
                <div className="first__block">
                    <img src={imgUrl} alt="img" />
                    <div className="first__block-title">
                        <h2>
                            {" "}
                            {videoTitle}
                        </h2>
                    </div>
                  <br />
                    <div className="first__block-organizer">
                        <span>Организатор</span>
                            <h3>{organizationName}</h3>
                    </div>
                    <div className="first__block-data">
                        <span>Когда</span>
                            <br />
                        <h3>{date}</h3>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}