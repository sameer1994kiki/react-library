interface Actions {
    setTrue: () => void;
    setFalse: () => void;
    toggle: (value?: boolean | undefined) => void;
}
declare type IState = string | number | boolean | undefined;
declare const useToggle: (defaultValue?: IState, reverseValue?: IState) => [IState, Actions];
export default useToggle;
//# sourceMappingURL=index.d.ts.map