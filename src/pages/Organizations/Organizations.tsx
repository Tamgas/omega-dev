import Footer from "../../Companent/Footer/Footer";
import Header from "../../Companent/Header/Header";
import "../Organizations/Organizations.css";
import organizationsImg from "../../assets/Images/53fecf5935b721031f4f636b13bf18ae.webp";

function Organizations() {
    return (
        <>
            <Header />
            <div id="organizations">
                <div className="container">
                    <div className="organizations">
                        <div className="organizations-logo-block">
                            <div className="organizations-img">
                                <img src={organizationsImg} alt="" />
                            </div>
                            <div className="organizations-logo">
                                <h5>
                                    Компания
                                    <h4>CodifyLab</h4>
                                </h5>
                            </div>
                        </div>
                        <div className="organizations-info">
                            <div className="organizations-info-vacancies">
                                <h5>Ваканции</h5>
                                <h4>193</h4>
                            </div>
                            <div className="organizations-info-events">
                                <h5>Мероприятия</h5>
                                <h4>100</h4>
                            </div>
                            <div className="organizations-info-video">
                                <h5>Видео</h5>
                                <h4>0</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Organizations;
