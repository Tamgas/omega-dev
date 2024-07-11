import "./expo.css"

function Expo() {
  return (
    <>
        <div id="expo">
            <div className="container">
                <article className="expo-item">
                    <a href="dev.kg">
                        <div className="expo-date">
                            <span>
                                <time dateTime="2024-06-10T12:30:00.000z">
                                    07 инюя 2024 
                                    <span> 09:00</span>
                                </time>
                            </span>
                        </div>
                        <div className="expo-info">
                            <div className="expo-title">
                                <h1>EXPO</h1>
                            </div>

                            <div className="expo-mate">
                                <div className="expo-organizer">
                                    <span className="expo-label">Организатор</span> <br />
                                    Парк Высоких Технологий КР
                                </div>

                                <div className="expo-locate">
                                    <span className="expo-label">
                                        Локация
                                    </span>
                                    <address>Ул. Горького 2, ул. Алматинская</address>
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

export default Expo