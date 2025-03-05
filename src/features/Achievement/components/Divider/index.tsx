import type {FC} from 'react';
import Props from './Divider.props';

export const Divider: FC<Props> = ({
  isVertical = false,
  className,
  ...props
}) => {
  return (
    <div
      className={`${
        isVertical ? 'w-2' : 'h-1 w-4/5'
      }  bg-main-orange ${className}`}
      {...props}
    />
  );
};
