import cn from 'classnames';
import type { Category } from '../../model/types';
import css from './CategoryCard.module.css';
import Link from 'next/link';

type Props = {
  category: Category;
};

export function CategoryCard(props: Props) {
  const { name, image, id } = props.category;

  return (
    <Link href={`/category/${id}`}>
      <div className={css.root}>
        <div
          className={css.image}
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
        <div className={cn(css.title, 'text_bold')}>{name}</div>
      </div>
    </Link>
  );
}
