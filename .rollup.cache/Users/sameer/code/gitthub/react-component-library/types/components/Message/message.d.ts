import React from 'react';
export interface ShowProps {
    content: string;
    duration?: number;
    onClose?: () => void;
}
export interface MessageProps {
    visible: boolean;
    children: React.ReactChild;
}
export declare function Message(props: MessageProps): any;
export declare namespace Message {
    var success: (props: ShowProps) => Promise<unknown>;
    var info: (props: ShowProps) => Promise<unknown>;
    var warning: (props: ShowProps) => Promise<unknown>;
    var loading: (props: ShowProps) => Promise<unknown>;
    var error: (props: ShowProps) => Promise<unknown>;
}
export default Message;
//# sourceMappingURL=message.d.ts.map