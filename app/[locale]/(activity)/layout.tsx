"use client";
import { NextPage } from "next";
import { TapBar, ProfileHeader } from "@/components/shared/index";
import Template from '../Template'

interface RootLayoutProps {
  children: React.ReactNode;
}
const ActivityRoot: NextPage<RootLayoutProps> = ({ children }) => {
  return (
    <div className="profile__body">
      <ProfileHeader auth />
      <main className="main">
        <Template>{children}</Template>
      </main>
      <TapBar />
    </div>
  );
};

export default ActivityRoot;
