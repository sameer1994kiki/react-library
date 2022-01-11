import React, { FC } from 'react';
export interface ProgressProps {
    percent: number;
    strokeHeight?: number;
    showText?: boolean;
    style?: React.CSSProperties;
    circle?: boolean;
    max: number;
    className?: string;
    unit?: string;
    width?: number;
    animation?: boolean;
}
export declare const Progress: FC<ProgressProps>;
export default Progress;
//# sourceMappingURL=progress.d.ts.map