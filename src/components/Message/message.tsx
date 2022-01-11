import React from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';

export interface ShowProps {
  /**
   * 文案内容
   */
  content: string;
  /**
   * 持续时间
   */
  duration?: number;
  onClose?: () => void;
}

export interface MessageProps {
  visible: boolean;
  children: React.ReactChild;
}

enum IconType {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  LOADING = 'loading',
  ERROR = 'error',
}

const prefixCls = 'message';

export function Message(props: MessageProps) {
  const { visible, children } = props;
  const result = (
    <div className={`${prefixCls}`}>
      <div
        className={classNames(`${prefixCls}-wrapper`, {
          [`${prefixCls}-open`]: visible,
          [`${prefixCls}-close`]: !visible,
        })}
      >
        <div className={classNames(`${prefixCls}-content`)}>
          <span>{children}</span>
        </div>
      </div>
    </div>
  );
  return ReactDom.createPortal(result, document.body);
}

const renderELement = (type: string, props: ShowProps) => {
  const { onClose, duration = 1, content } = props;
  const result = <Message visible={true}>{content}</Message>;
  const div = document.createElement('div');

  const close = () => {
    ReactDom.render(React.cloneElement(result, { visible: false }), div);
    setTimeout(() => {
      ReactDom.unmountComponentAtNode(div);
      div.remove();
    }, 500); // 等待动画执行完再销毁
  };
  ReactDom.render(result, div);
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      close();
      onClose && onClose();
      clearTimeout(timer);
      return resolve(null);
    }, duration * 1000);
  });
};

Message.success = (props: ShowProps) => {
  return renderELement('success', props);
};

Message.info = (props: ShowProps) => {
  return renderELement('info', props);
};

Message.warning = (props: ShowProps) => {
  return renderELement('warning', props);
};

Message.loading = (props: ShowProps) => {
  return renderELement('loading', props);
};

Message.error = (props: ShowProps) => {
  return renderELement('error', props);
};

export default Message;
