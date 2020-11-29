import { useEffect, useState } from 'react';
import { useFilters } from '../App/providers/FiltersProvider';
import { APIResponse } from '../types';
import { fetchData } from '../api/queryBuilder';

export const useQuery = () => {
  const { filters } = useFilters();
  const [data, setData] = useState<APIResponse>({});

  useEffect(() => {
    fetchData(filters).then(setData);
  }, [filters, setData]);

  return data;
}
