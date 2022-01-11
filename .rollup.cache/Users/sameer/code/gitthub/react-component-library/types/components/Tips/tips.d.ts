import { FC, MouseEventHandler, CSSProperties } from 'react';
import './style.css';
export declare type TipsType = 'success' | 'default' | 'danger' | 'warning';
export interface TipsIprops {
    className?: string;
    message: string;
    description?: string;
    closable?: boolean;
    type?: TipsType;
    onClose?: MouseEventHandler<SVGSVGElement>;
    style?: CSSProperties;
}
declare const Tips: FC<TipsIprops>;
export default Tips;
//# sourceMappingURL=tips.d.ts.map