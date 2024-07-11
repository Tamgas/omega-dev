import "./sql.css"

function Sql() {
  return (
    <>
    <div id="sql">
        <div className="container">
            <article className="sql-item">
                <a href="dev.kg">
                    <div className="sql-date">
                        <span>
                            <time dateTime="2024-06-10T12:30:00.000z">
                                10 инюя 2024 
                                <span> 14:30</span>
                            </time>
                        </span>
                    </div>
                    <div className="sql-info">
                        <div className="sql-title">
                            <h1>Что такое SQL и почему он нужен везде?</h1>
                        </div>

                        <div className="sql-mate">
                            <div className="sql-organizer">
                                <span className="sql-label">Организатор</span> <br />
                                Mega Lab
                            </div>

                            <div className="sql-locate">
                                <span className="sql-label">
                                    Локация
                                </span>
                                <address>Суюмбаева 123 (головной офис Mega)</address>
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

export default Sql