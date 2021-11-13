import { USER_LIST_REQUEST, USER_LIST_SUCCESS } from "../constants/userConstants";

const data = [
    {Name:'Frozen yoghurt', address:'katkala',  FatherName:"aakdfdkf" },
    {Name:'Frozen yoghurt', address:'katkala',  FatherName:"aakdfdkf" },
    {Name:'Frozen yoghurt', address:'katkala',  FatherName:"aakdfdkf" },
    
  ];
export const usersList = () => async (dispatch) => {
      dispatch({
        type: USER_LIST_REQUEST,
      })
      dispatch({
        type: USER_LIST_SUCCESS,
        payload: data,
      })

  }