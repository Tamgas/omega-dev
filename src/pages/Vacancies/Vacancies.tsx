import { Link } from "react-router-dom";
import Footer from "../../Companent/Footer/Footer";
import Header from "../../Companent/Header/Header";
import "./Vacancies.css";
import useFetch from "../../hooks/useFetch";
import { JobList } from "../../Companent/JobList/jobList";

function Vacancies() {
  const { data, isLoading } = useFetch();
  if (isLoading) {
    return <div>Loading...</div>;
  }
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
                    {
                      data && data.map((item: any) => 
                          <JobList
                            companyName={item?.organization_name || ''}
                            companyRole={item?.position || ''}
                            salary={`${item?.price_from} - ${item?.price_to} ${item?.currency},  ${item?.salary}`}
                            jobType={item?.type || ''}
                          />
                        )
                    }
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
