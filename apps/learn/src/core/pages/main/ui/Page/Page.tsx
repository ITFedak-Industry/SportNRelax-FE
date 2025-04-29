'use client';
import { useBlogPostQuery } from '@src/entities/blog/api/categoryApi';

interface MainPageProps {
  id: string;
}

export const MainPage: React.FC<MainPageProps> = ({ id }) => {
  const { data } = useBlogPostQuery(id);
  return (
    <p className="text-3xl font-bold underline">
      {data?.join(',')}
      Hello world!
    </p>
  );
};
