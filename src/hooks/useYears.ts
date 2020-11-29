import { useState, useMemo, useCallback } from "react";
import { Value, Option } from "baseui/select";

export const useYears = () => {
  const [dates, setDates] = useState<{ startDate?: Value; endDate?: Value }>({
    startDate: undefined,
    endDate: undefined,
  });
  const updateDates = useCallback(
    (newDate) => setDates({ ...dates, ...newDate }),
    [dates, setDates]
  );
  console.log('wow dates', dates);
  const yearOptions = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const options: Option[] = [];
    for (let i = 1960; i <= currentYear; i++) {
      options.push({ id: i, label: String(i) });
    }
    return options;
  }, []);
  return { dates, setDates: updateDates, yearOptions };
};
