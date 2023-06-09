import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SET_LOGIN } from "../../redux/constants/userConstants";
import { userInforLocal } from "../../services/local.service";

export default function UserNav() {
  let userInfor = useSelector((state) => {
    return state.userReducer.userInfor;
  });
  let dispatch = useDispatch();
  let handleLogout = () => {
    // window.location.href = "/login";
    userInforLocal.remove();
    dispatch({
      type: SET_LOGIN,
      payload: null,
    });
  };

  let renderContent = () => {
    if (userInfor) {
      return (
        <div className="flex items-center">
          <img
            className="rounded-full"
            width={40}
            hight={20}
            src={userInfor.image}
            alt=""
          />
          <span className="mx-4 text-blue-500 font-medium text-lg">
            {userInfor.username}
          </span>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-5 py-2 rounded shadow-lg"
          >
            Đăng xuất
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <NavLink
            to="/login"
            className="bg-red-600 text-white px-5 py-2 rounded shadow-lg mr-4"
          >
            Đăng nhập
          </NavLink>
          <NavLink
            to="/register"
            className="bg-black text-white px-5 py-2 rounded shadow-lg"
          >
            Đăng ký
          </NavLink>
        </div>
      );
    }
  };
  return <div>{renderContent()}</div>;
}
