import Footer from "../../Companent/Footer/Footer"
import Header from "../../Companent/Header/Header"
import "./Events.css"
import { EventsList } from "../../Companent/EventsList/eventsList"
import useFetch from "../../hooks/useFetch"

function Events() {
  const{ data, isLoading } = useFetch({url: "http://3.34.200.34/events"})
    console.log("data: ", data);

    
    if(isLoading) {
        return <div>Loading...</div>
    }
  
  return (
    <>
      <Header/>
        <div id="events">
            <div className="container">
                <div className="events">
                  <div className="events__button">
                    <button >Добавить мероприятие</button>
                  </div>
                
                  {
                    data && data.map((item: any) => 
                      <EventsList
                      imgUrl={item?.cover}
                          date={item?.date}
                          eventsName={item?.name}
                          organizationName ={item?.organization_name}
                          locations = {item?.location}
                      />
                    )
                  }    

                </div>
            <div className="btns">
              <button className="btn previous">Предыдующая страница</button>
              <button className="btn next">Cледующая страница</button>
            </div>
            </div>
            
        </div>    
        <Footer/>
    </>
  )
}

export default Events