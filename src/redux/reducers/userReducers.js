import { USER_LIST_REQUEST, USER_LIST_SUCCESS } from "../constants/userConstants"

export const usersListReducer = (state = { }, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
          return { loading: true }
        case USER_LIST_SUCCESS:
          return { loading: false, users: action.payload }
        default:
          return state
      }
  
  }