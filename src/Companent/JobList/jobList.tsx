export const JobList = ({
    componyName,
    companyRole,
    salary,
    type
}: {
    componyName: string,
    companyRole: string,
    salary: string,
    type: string

}) => {
    return(
        <>
            <div className="information" data-v-6dc437e8>
                <div className="jobs-item-field company" data-v-6dc437e8>
                    <span className="label" data-v-6dc437e8>
                        Компания
                    </span>
                        {componyName}
                </div>
            <div className="jobs-item-field position" data-v-6dc437e8>
                <span className="label" data-v-6dc437e8>
                      Должность
                </span>
                   {companyRole}
            </div>
                <div className="jobs-item-field price" data-v-6dc437e8>
                    <span className="label" data-v-6dc437e8>
                      Оклад
                    </span>
                        {salary}
              </div>
                   <div className="jobs-item-field type" data-v-6dc437e8>
                        <span className="label" data-v-6dc437e8>
                            Тип
                        </span>
                            {type}
                  </div>
          </div>      
        </>      
    )
}