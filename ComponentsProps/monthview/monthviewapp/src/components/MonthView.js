import { startOfMonth, endOfMonth, eachDayOfInterval, format } from "date-fns";

const MonthView = ({ month, year }) => {
  const firstDayOfMonth = startOfMonth(new Date(year, month - 1));
  const lastDayOfMonth = endOfMonth(new Date(year, month - 1));

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return (
    <div className="row" style={{ display: "flex" }}>
      <div className="col">
        {daysInMonth.map((day) => {
          return (
            <div key={day.getTime()}>
              {format(day, "dd/MM/yyyy")}
        
              {weekdays[day.getDay()]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthView;
