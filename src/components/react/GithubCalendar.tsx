import { useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { githubCalendarTheme } from "./github-calendar-theme";
import "./GithubCalendar.css";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface GithubCalendarProps {
  dataByYear: Record<string, ContributionDay[]>;
  years: string[];
  currentYear: string;
}

export default function GithubCalendar({
  dataByYear,
  years,
  currentYear,
}: GithubCalendarProps) {
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const labels =
    selectedYear === currentYear
      ? { totalCount: "{{count}} contribuciones en el último año" }
      : { totalCount: "{{count}} contribuciones en {{year}}" };

  return (
    <div className="github-calendar">
      <ActivityCalendar
        data={dataByYear[selectedYear]}
        theme={githubCalendarTheme}
        colorScheme="dark"
        blockSize={12}
        blockMargin={4}
        blockRadius={3}
        fontSize={14}
        labels={labels}
      />

      <div className="github-calendar__years">
        {years.map((year) => (
          <button
            key={year}
            type="button"
            className={`github-calendar__year-button${
              year === selectedYear
                ? " github-calendar__year-button--active"
                : ""
            }`}
            onClick={() => setSelectedYear(year)}
            title={`Ver gráfico del año ${year}`}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
}
