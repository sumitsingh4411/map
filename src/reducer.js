export const initialState={
    country:"India",
    dark:false,
    default:false
};
export const actionTypes={
    SET_COUNTRY: "SET_COUNTRY",
    SET_DARK: "SET_DARK",
    "SET_DEFAULT": "SET_DEFAULT"
}
const reducer=(state,action) => {
    switch(action.type)
    {
        case actionTypes.SET_COUNTRY:
            return{
           ...state,
           country: action.country,
            };
         case actionTypes.SET_DARK:
            return {
                 ...state,
                 dark:action.dark
             } 
        case actionTypes.SET_DEFAULT:
            return {
                 ...state,
                 dark:action.dark
             }     
         default:
             return state; 
        }
}
export default reducer;