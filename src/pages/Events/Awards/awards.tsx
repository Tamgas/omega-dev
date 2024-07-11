import "./awards.css"

function Awards() {
  return (
    <>
        <div id="awards">
            <div className="container">
                <article className="awards-item">
                    <a href="dev.kg">
                        <div className="awards-date">
                            <span>
                                <time dateTime="2024-06-10T12:30:00.000z">
                                    07 инюя 2024 
                                    <span> 10:00</span>
                                </time>
                            </span>
                        </div>
                        <div className="awards-info">
                            <div className="awards-title">
                                <h1>IT Awards 2024 в КИТ ФОРУМ 2024</h1>
                            </div>

                            <div className="awards-mate">
                                <div className="awards-organizer">
                                    <span className="awards-label">Организатор</span> <br />
                                    Парк Высоких Технологий КР
                                </div>

                                <div className="awards-locate">
                                    <span className="awards-label">
                                        Локация
                                    </span>
                                    <address>Дасмия, Бишкек</address>
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

export default Awards