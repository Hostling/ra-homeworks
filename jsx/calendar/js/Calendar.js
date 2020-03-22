function Calendar(props) {
  const { date } = props;
  const dayOfWeek = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ]
  const monthName = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря'
  ];
  const month = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ];

  const weeks = {
    "0": [],
    "1": [],
    "2": [],
    "3": [],
    "4": [],
    "5": []
  };

  const daysInPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0);
  const daysInThisMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  let first = new Date(date.getFullYear(), date.getMonth(), 1);
  first = first.getDay();

  for(let i = 6; i >= 0;i--) {
    if(first < i) weeks[0].push(daysInPrevMonth.getDate() - first - i);
    if(first >= i) weeks[0].push(i + 1);
  }

  for(let i = 1; i < 8; i++) weeks[1].push(weeks[0][6] + i);
  for(let i = 1; i < 8; i++) weeks[2].push(weeks[1][6] + i);
  for(let i = 1; i < 8; i++) weeks[3].push(weeks[2][6] + i);
  for(let i = 1; i < 8; i++) weeks[4].push(weeks[3][6] + i);
  let counterForNextMonth = 1;
  for(let i = 1; i < 8; i++) {
    let day = weeks[4][6] + i;
    if(day <= daysInThisMonth.getDate()) weeks[5].push(day);
    if(day > daysInThisMonth.getDate()) {
      weeks[5].push(counterForNextMonth);
      counterForNextMonth++;
    }
  }

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{dayOfWeek[date.getDay()]}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
          <div className="ui-datepicker-material-month">{monthName[date.getMonth()]}</div>
          <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{month[date.getMonth()]}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {weeks[0].map(day => day > 7 ? <td className="ui-datepicker-other-month">{day}</td> : day === date.getDate() ? <td className="ui-datepicker-today">{day}</td> : <td>{day}</td>)}
          </tr>
          <tr>
            {weeks[1].map(day => day === date.getDate() ? <td className="ui-datepicker-today">{day}</td> : <td>{day}</td>)}
          </tr>
          <tr>
            {weeks[2].map(day => day === date.getDate() ? <td className="ui-datepicker-today">{day}</td> : <td>{day}</td>)}
          </tr>
          <tr>
            {weeks[3].map(day => day === date.getDate() ? <td className="ui-datepicker-today">{day}</td> : <td>{day}</td>)}
          </tr>
          <tr>
            {weeks[4].map(day => day === date.getDate() ? <td className="ui-datepicker-today">{day}</td> : <td>{day}</td>)}
          </tr>
          <tr>
            {weeks[5].map(day => day < 7 ? <td className="ui-datepicker-other-month">{day}</td> : day === date.getDate() ? <td className="ui-datepicker-today">{day}</td> : <td>{day}</td>)}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
