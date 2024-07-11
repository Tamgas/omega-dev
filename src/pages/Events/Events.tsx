import Footer from "../../Companent/Footer/Footer"
import Header from "../../Companent/Header/Header"
import Automotion from "./Automation/automation"
import Awards from "./Awards/awards"
import Battle from "./Battle/battle"
import Expo from "./Expo/expo"
import Kitforum from "./KitForum/kitforum"
import Sql from "./SQL/sql"

import "./Events.css"

function Events() {
  return (
    <>
      <Header/>
        <div id="events">
            <div className="container">
                <div className="events">
                  <div className="events__button">
                    <button>Добавить мероприятие</button>
                  </div>
                </div>
            </div>
        </div>
        <Sql/>
        <Automotion/>
        <Battle/>
        <Kitforum/>
        <Awards/>
        <Expo/>
    <Footer/>
    </>
  )
}

export default Events