import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';
export interface IconProps extends FontAwesomeIconProps {
  icon: string;
  theme?: ThemeProps;
  className?: string;
}

const Icon: React.FC<IconProps> = (props) => {
  const { className, theme, icon, ...restProps } = props;
  const classes = classNames('chocolate-icon', className, {
    [`icon-${theme}`]: theme,
    [`chocolate-icon-loading`]: icon === 'spinner',
  });
  return <FontAwesomeIcon icon={icon} className={classes} {...restProps} />;
};

export default Icon;
