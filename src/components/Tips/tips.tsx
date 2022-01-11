import React, { FC, MouseEventHandler, MouseEvent, useState, CSSProperties } from 'react';
import classNames from 'classnames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './style.css';
export type TipsType = 'success' | 'default' | 'danger' | 'warning';

export interface TipsIprops {
  className?: string;
  // 警告提示内容
  message: string;
  // 警告提示的辅助性文字介绍
  description?: string;
  // 默认不显示关闭按钮
  closable?: boolean;
  // 指定警告提示的样式，有四种选择
  type?: TipsType;
  // 关闭时触发的回调函数
  onClose?: MouseEventHandler<SVGSVGElement>;
  style?: CSSProperties;
}

const Tips: FC<TipsIprops> = (props) => {
  const { className, message, description, closable, type, onClose, icon, theme, ...restProps } =
    props;
  const [visible, setVisible] = useState(true);
  const handleClose = (e: MouseEvent<SVGSVGElement>) => {
    setVisible(false);
    onClose && onClose(e);
  };
  return (
    <div
      className={classNames('alert-wrapper', className, {
        [`alert-${type}`]: type,
        'alert-closable': true,
      })}
      {...restProps}
    >
      <span className={description ? '' : 'alert-message-normal'}>{message}</span>
      {description && <span className="alert-description">{description}</span>}
    </div>
  );
};

export default Tips;
