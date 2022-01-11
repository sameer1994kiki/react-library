import { FC, MouseEventHandler, CSSProperties } from 'react';
export declare type AlertType = 'success' | 'default' | 'danger' | 'warning';
export interface BaseAlertProps {
    className?: string;
    message: string;
    description?: string;
    closable?: boolean;
    type?: AlertType;
    onClose?: MouseEventHandler<HTMLElement>;
    style?: CSSProperties;
}
export declare const Alert: FC<BaseAlertProps>;
export default Alert;
//# sourceMappingURL=alert.d.ts.map