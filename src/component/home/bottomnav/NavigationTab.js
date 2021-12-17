import React from "react"
import { BiHomeHeart } from "react-icons/bi";
import { FaClipboardCheck } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import {Link} from "react-router-dom";
const NavigationTab = () => {
  return (
    <>
      <div className="fixed-bottom">
        <nav className="d-flex justify-content-between bg-white shadow">
          <div className=" w-50 text-center nav-hover">
            <Link className="link" to="/home">
           <BiHomeHeart size="25" className="mb-0" />
           <small className="">Home</small>
            </Link>
          </div>
          <div className=" w-50 text-center nav-hover">
          <Link className="link" to="/check">
          <FaClipboardCheck size="25" className="mb-0" />
            <small className="">Check</small>
            </Link>
          </div>
          <div className="w-50 text-center nav-hover">
          <Link className="link" to="/category">
            <BsFillGridFill size="25" className="mb-0" />
            <small className="">Category</small>
            </Link>
          </div>
          <div className="w-50 text-center nav-hover">
          <Link className="link" to="/notification">
            <IoIosNotifications size="25" className="mb-0" />
         
            <small className="">Notification</small>
            </Link>
          </div>
          <div className="w-50 text-center nav-hover">
          <Link className="link" to="/setting">
          <HiUserCircle size="25" className="pe-2 mb-0" />
            <small className="">Settings</small>
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavigationTab