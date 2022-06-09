import React from "react";
import {
  ChatAlt2Icon,
  LocationMarkerIcon,
  CogIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

function Navbar() {
  return (
    <header className="header__wrapper col-span-1 h-screen">
      <div className="header__logo">
        <h1>FutureDevs Apps</h1>
      </div>
      {/* profile */}
      <div className="header__profile_wrapper">
        <div className="header__profile_img_container">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
            alt=""
            className="header__profile_img"
          />
        </div>
        <h1 className="header__username">Jane Doe</h1>
      </div>
      {/* links */}
      <ul className="header__links_wrapper">
        <li className="header__links_item">
          <ChatAlt2Icon height={24} />
          <a href="">Feed</a>
        </li>
        <li className="header__links_item">
          <LocationMarkerIcon height={24} />
          <a href="">Nearby</a>
        </li>
        <li className="header__links_item">
          <UserCircleIcon height={24} />
          <a href="">Profile</a>
        </li>
        <li className="header__links_item">
          <CogIcon height={24} />
          <a href="">Settings</a>
        </li>
      </ul>
      {/* footer */}
      <footer className="footer__wrapper">
        <div className="footer__text_container ">
          <p className="footer__text">
            <a href="" className="underline">
              Click here
            </a>{" "}
            to learn more about our Privacy Policy and Terms of Use
          </p>
          <p className="footer__text">© FutureDevs 2022</p>
        </div>
      </footer>
    </header>
  );
}

export default Navbar;
