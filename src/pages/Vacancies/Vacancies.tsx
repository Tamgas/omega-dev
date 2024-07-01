import { Link } from "react-router-dom";
import Footer from "../../Companent/Footer/Footer";
import Header from "../../Companent/Header/Header";
import useFetch from "../../Hooks/useFetch";
import { Job } from "../../Hooks/types";  
import "./Vacancies.css";

function Vacancies() {
  const { data, isLoading } = useFetch();

  return (
    <>
      <Header />
      <div id="vacancies">
        <div className="container">
          <div className="vacancies">
            <div className="vacancies__content">
              <div className="filter">
                <Link to={"/"}>
                  <button className="add-vacancies create-list green">
                    Добавить вакансию
                  </button>
                </Link>
              </div>
              <div className="jobs-list">
                {isLoading ? (
                  <p>Загрузка...</p>
                ) : (
                  data.map((job: Job, index: number) => (
                    <a key={index} href={`/ru/jobs/${job.id}`} className="link">
                      <div className="jobs-item content">
                        <div className="jobs-item-field icon">
                          <div className="preview image contain white">
                            <picture>
                              <img src={job.company_logo} alt="" />
                            </picture>
                          </div>
                        </div>
                        <div className="information">
                          <div className="jobs-item-field company">
                            <span className="label">Компания</span>
                            {job.company_name}
                          </div>
                          <div className="jobs-item-field position">
                            <span className="label">Должность</span>
                            {job.position}
                          </div>
                          <div className="jobs-item-field price">
                            <span className="label">Оклад</span>
                            {job.salary}
                          </div>
                          <div className="jobs-item-field type">
                            <span className="label">Тип</span>
                            {job.type}
                          </div>
                        </div>
                      </div>
                    </a>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Vacancies;
