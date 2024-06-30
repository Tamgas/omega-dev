export const JobList = ({
  companyName,
  companyRole,
  salary,
  jobType,
}: {
  companyName: string,
  companyRole: string,
  salary: string,
  jobType: string,
}) => {

  return (
    <div className="information" data-v-6dc437e8>
      <div className="jobs-item-field company" data-v-6dc437e8>
        <span className="label" data-v-6dc437e8>
          Компания
        </span>
        {
          companyName
        }
      </div>
      <div className="jobs-item-field position" data-v-6dc437e8>
        <span className="label" data-v-6dc437e8>
          Должность
        </span>
        {
          companyRole
        }
      </div>
      <div className="jobs-item-field price" data-v-6dc437e8>
        <span className="label" data-v-6dc437e8>
          Оклад
        </span>
        {
          salary
        }
      </div>
      <div className="jobs-item-field type" data-v-6dc437e8>
        <span className="label" data-v-6dc437e8>
          Тип
        </span>
        {
          jobType
        }
      </div>
    </div>
  )
}