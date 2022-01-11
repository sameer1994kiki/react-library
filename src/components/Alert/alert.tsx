import React, { FC, MouseEventHandler, MouseEvent, useState, CSSProperties } from 'react';
import classNames from 'classnames';

export type AlertType = 'success' | 'default' | 'danger' | 'warning';

export interface BaseAlertProps {
  className?: string;
  /** 警告提示内容 */
  message: string;
  /** 警告提示的辅助性文字介绍 */
  description?: string;
  /** 默认不显示关闭按钮 */
  closable?: boolean;
  /** 指定警告提示的样式，有四种选择 success、default、warning、danger */
  type?: AlertType;
  /** 关闭时触发的回调函数 */
  onClose?: MouseEventHandler<HTMLElement>;
  style?: CSSProperties;
}

export const Alert: FC<BaseAlertProps> = (props) => {
  const {
    className,
    message,
    description,
    closable = false,
    type = 'default',
    onClose,
    ...restProps
  } = props;
  const [visible, setVisible] = useState(true);

  const classes = classNames('alert-wrapper', className, {
    [`alert-${type}`]: type,
    'alert-closable': true,
  });

  const handleClose = (e: MouseEvent<HTMLElement>) => {
    setVisible(false);
    onClose && onClose(e);
  };

  return visible ? (
    <>
      <div className={classes} {...restProps}>
        <span className={description ? '' : 'alert-message-normal'}>{message}</span>
        {description && <span className="alert-description">{description}</span>}
        {closable && <span onClick={handleClose}>x</span>}
      </div>
    </>
  ) : null;
};

export default Alert;
