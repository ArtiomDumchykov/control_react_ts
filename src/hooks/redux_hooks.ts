import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RooState } from "reduxRTK";


const useAppSelector: TypedUseSelectorHook<RooState> = useSelector
const useAppDispatch = () => useDispatch<AppDispatch>()

export {
    useAppDispatch,
    useAppSelector,
}