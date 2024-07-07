export const JobList = ({
    svgUrl,
    componyName,
    companyRole,
    salary,
    type
}: 
{
    
    svgUrl: string,
    componyName: string,
    companyRole: string,
    salary: string,
    type: string

}) => {
    return(
        <>
            <div className="jobs-list" data-v-3fc4231a>
                    {/* <a href="/ru/jobs/hr-menedzher-validon-agency-14277"className="link"data-v-0cfa5cf6> </a> */}
                <div className="jobs-item content"data-v-6dc437e8data-v-0cfa5cf6>
                    <div className="jobs-item-field icon" data-v-6dc437e8>
                        <div className="preview image contain white image"data-v-7ad410c8data-v-6dc437e8>
                            <picture data-v-7ad410c8>
                                {/* {svgUrl} */}
                            </picture>
                        </div>

                        <div className="information" data-v-6dc437e8>
                            <div className="jobs-item-field company" data-v-6dc437e8>
                                <span className="label" data-v-6dc437e8>
                                    Компания
                                </span>    <br />
                                    {componyName}
                            </div>

                            <div className="jobs-item-field position" data-v-6dc437e8>
                                <span className="label" data-v-6dc437e8>
                                    Должность
                                </span>     <br />
                                {companyRole}
                            </div>

                            <div className="jobs-item-field price" data-v-6dc437e8>
                                <span className="label" data-v-6dc437e8>
                                    Оклад
                                </span>      <br />
                                        {salary}
                            </div>
                            <div className="jobs-item-field type" data-v-6dc437e8>
                                <span className="label" data-v-6dc437e8>
                                    Тип
                                </span> <br />
                                    {type}
                            </div>
                        </div> 
                    </div>
                </div>
            </div>     
        </>      
    )
}