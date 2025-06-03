import Button from '@mui/material/Button';
import { Service, useBookServiceMutation } from '@src/entities/service';
import { useGetSessionsQuery } from '@src/entities/session';

interface Props {
  service: Service;
}

export const BookService = ({ service }: Props) => {
  const { data: sessions } = useGetSessionsQuery(service.id);
  const [bookService] = useBookServiceMutation();

  return (
    <>
      <Button onClick={() => bookService()}>Confirm booking</Button>
      <Calendar></Calendar>
      <TimeSlots></TimeSlots>
      
    </>
  );
};
