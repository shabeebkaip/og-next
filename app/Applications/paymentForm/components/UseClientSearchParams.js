import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const useClientSearchParams = () => {
  const [params, setParams] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setParams(searchParams);
    }
  }, [searchParams]);

  return params;
};

export default useClientSearchParams;