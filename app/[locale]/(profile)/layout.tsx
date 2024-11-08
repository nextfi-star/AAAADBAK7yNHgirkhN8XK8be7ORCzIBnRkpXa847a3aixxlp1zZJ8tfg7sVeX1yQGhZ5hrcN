"use client";
import { NextPage } from "next";
import Template from "./Template";
import { TapBar, ProfileHeader, Profile_nav } from "@/components/shared/index";
import { ADMIN } from "@/components/shared/ADMIN";

interface RootLayoutProps {
  children: React.ReactNode;
}

const FormLayout: NextPage<RootLayoutProps> = ({ children }) => {
  return (
    <div className="profile__body ">
      <ProfileHeader auth />
      <main className="profile__main site-holder">
        <Profile_nav />
        <Template>{children}</Template>
      </main>
      <TapBar />
    </div>
  );
};

export default FormLayout;
