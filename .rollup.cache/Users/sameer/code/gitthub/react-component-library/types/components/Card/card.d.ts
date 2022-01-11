import { ReactNode, CSSProperties, FC } from "react";
export interface CardProps {
    title?: string;
    shadow?: boolean;
    titleOverflowHidden?: boolean;
    actions?: [];
    showShadowWhenHover?: boolean;
    cover?: string;
    loading?: boolean;
    extra?: ReactNode;
    className?: string;
    style?: CSSProperties;
}
declare const Card: FC<CardProps>;
export default Card;
//# sourceMappingURL=card.d.ts.map