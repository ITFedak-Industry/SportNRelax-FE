import React, { useCallback, useState } from 'react';

import {
  useConfirmModal,
  useFeatureSlicedDebug,
} from '../../../../../shared/lib';
import { useAppDispatch, useAppSelector } from '../../../../../shared/model';
import { Button } from '../../../../../shared/ui';

import type { ProductId } from '../../../../../entities/product';
import { selectIsAuthorized } from '../../../../../entities/session';
import { selectIsInWishlist } from '../../../../../entities/wishlist';

import { toggleWishlistProductThunk } from '../../model/toggleWishlistProduct';

type Props = {
  productId: ProductId;
};

export function AddToWishlistButton({ productId }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const { rootAttributes } = useFeatureSlicedDebug('feature/AddToWishlist');
  const loginModal = useConfirmModal();
  const router = {
    push: (str) => null,
  };
  const isAuthorized = useAppSelector(selectIsAuthorized);
  const isInWishlist = useAppSelector((state) =>
    selectIsInWishlist(state, productId),
  );
  const dispatch = useAppDispatch();

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      e.preventDefault();

      if (!isAuthorized) {
        loginModal.show({
          title: 'To add product in wishlist you need login',
          confirmText: 'Login',
          cancelText: 'Later',
          onConfirm: () => {
            loginModal.remove();
            router.push('/login');
          },
          onCancel: () => loginModal.remove(),
        });

        return;
      }

      setIsLoading(true);
      dispatch(toggleWishlistProductThunk(productId)).finally(() => {
        setIsLoading(false);
      });
    },
    [isAuthorized, dispatch, productId, loginModal, router],
  );

  return (
    <div {...rootAttributes}>
      <Button isLoading={isLoading} onClick={onClick} theme="secondary">
        {isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
      </Button>
    </div>
  );
}
