export const OrganizationsList = ({
    imgUrl,
    componyName,
    vacancies,
    events,
    video,
}: {
    imgUrl: string,
    componyName: string,
    vacancies: string,
    events: string,
    video: string,

}) => {
    return(
    <>
        <div className="organizations">
                        <div className="organizations-logo-block">
                            <div className="organizations-img">
                                <img src={imgUrl} alt="" />
                            </div>
                            <div className="organizations-logo">
                                <h5>
                                    Компания
                                    <h4>{componyName}</h4>
                                </h5>
                            </div>
                        </div>
                        <div className="organizations-info">
                            <div className="organizations-info-vacancies">
                                <h5>Ваканции</h5>
                                <h4>{vacancies}</h4>
                            </div>
                            <div className="organizations-info-events">
                                <h5>Мероприятия</h5>
                                <h4>{events}</h4>
                            </div>
                            <div className="organizations-info-video">
                                <h5>Видео</h5>
                                <h4>{video}</h4>
                            </div>
                        </div>
                    </div>
    </>
    )
}