interface Actions {
    setTrue: () => void;
    setFalse: () => void;
    toggle: (value?: boolean | undefined) => void;
}
declare const useBoolean: (defaultValue?: boolean | undefined) => [boolean, Actions];
export default useBoolean;
//# sourceMappingURL=index.d.ts.map