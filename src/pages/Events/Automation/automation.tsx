import "./automation.css"

function Automotion() {
  return (
    <>
    <div id="automation">
        <div className="container">
        <article className="automation-item">
                <a href="dev.kg">
                    <div className="automation-date">
                        <span>
                            <time dateTime="2024-06-10T12:30:00.000z">
                                8 инюя 2024 
                                <span> 13:00</span>
                            </time>
                        </span>
                    </div>
                    <div className="automation-info">
                        <div className="automation-title">
                            <h1>Что такое автоматизация тестирования и с чем её едят</h1>
                        </div>

                        <div className="automation-mate">
                            <div className="automation-organizer">
                                <span className="automation-label">Организатор</span> <br />
                                Software Testers from KG
                            </div>

                            <div className="automation-locate">
                                <span className="automation-label">
                                    Локация
                                </span>
                                <address>Codify Academy, 7-й микрорайон, 26/2</address>
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

export default Automotion