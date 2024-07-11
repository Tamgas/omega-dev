import { Link } from "react-router-dom";
import Footer from "../../Companent/Footer/Footer";
import Header from "../../Companent/Header/Header";
import "./Vacancies.css";

function Vacancies() {
  return (
    <>
      <Header />
      <div id="vacancies">
        <div className="container">
          <div className="vacancies">
            <div className="vacancies__content">
              <div className="filter" data-v-6a5c720c>
                <Link to={"/"}>
                  <button
                    className="add-vacancies create-list green"
                    data-v-3fc4231a
                    data-v-6a5c720c
                  >
                    Добавить вакансию
                  </button>
                </Link>
              </div>
              <div className="jobs-list" data-v-3fc4231a>
                <a
                  href="/ru/jobs/hr-menedzher-validon-agency-14277"
                  className="link"
                  data-v-0cfa5cf6
                >
                  <div
                    className="jobs-item content"
                    data-v-6dc437e8
                    data-v-0cfa5cf6
                  >
                    <div className="jobs-item-field icon" data-v-6dc437e8>
                      <div
                        className="preview image contain white image"
                        data-v-7ad410c8
                        data-v-6dc437e8
                      >
                        <picture data-v-7ad410c8>
                          <img
                            src="https://devkg.com/images/organizations/886e28d889f4c24ea73c66b80174110f.webp"
                            alt=""
                            data-v-7ad410c8
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="information" data-v-6dc437e8>
                      <div className="jobs-item-field company" data-v-6dc437e8>
                        <span className="label" data-v-6dc437e8>
                          Компания
                        </span>
                        Validon Agency
                      </div>
                      <div className="jobs-item-field position" data-v-6dc437e8>
                        <span className="label" data-v-6dc437e8>
                          Должность
                        </span>
                        Нr менеджер
                      </div>
                      <div className="jobs-item-field price" data-v-6dc437e8>
                        <span className="label" data-v-6dc437e8>
                          Оклад
                        </span>
                        От 60000 RUB в месяц
                      </div>
                      <div className="jobs-item-field type" data-v-6dc437e8>
                        <span className="label" data-v-6dc437e8>
                          Тип
                        </span>
                        Удаленная работа
                      </div>
                    </div>
                  </div>
                </a>
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
