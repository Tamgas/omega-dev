import "./kitforum.css"

function Kitforum() {
  return (
    <>
        <div id="kitforum">
            <div className="container">
                <article className="kitforum-item">
                    <a href="dev.kg">
                        <div className="kitforum-date">
                            <span>
                                <time dateTime="2024-06-10T12:30:00.000z">
                                    8 инюя 2024 
                                    <span> 8:00</span>
                                </time>
                            </span>
                        </div>
                        <div className="kitforum-info">
                            <div className="kitforum-title">
                                <h1>KIT Forum/ KIT EXPO 2024</h1>
                            </div>

                            <div className="kitforum-mate">
                                <div className="kitforum-organizer">
                                    <span className="kitforum-label">Организатор</span> <br />
                                    Парк Высоких Технологий КР
                                </div>

                                <div className="kitforum-locate">
                                    <span className="kitforum-label">
                                        Локация
                                    </span>
                                    <address>Анкара 2</address>
                                </div>
                            </div>

                        </div>
                    </a>
                </article>
            </div>
        </div>
    </>
  )
}

export default Kitforum