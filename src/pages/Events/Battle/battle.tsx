import "./battle.css"

function Battle() {
  return (
    <>
    <div id="battle">
        <div className="container">
            <article className="battle-item">
                    <a href="dev.kg">
                        <div className="battle-date">
                            <span>
                                <time dateTime="2024-06-10T12:30:00.000z">
                                    8 инюя 2024 
                                    <span> 13:00</span>
                                </time>
                            </span>
                        </div>
                        <div className="battle-info">
                            <div className="battle-title">
                                <h1>Баттл «Стартап-Нация»</h1>
                            </div>

                            <div className="battle-mate">
                                <div className="battle-organizer">
                                    <span className="battle-label">Организатор</span> <br />
                                    CodifyLab
                                </div>

                                <div className="battle-locate">
                                    <span className="battle-label">
                                        Локация
                                    </span>
                                    <address>Дасмия, Анкара 2, юрта «Хан Тенир»</address>
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

export default Battle