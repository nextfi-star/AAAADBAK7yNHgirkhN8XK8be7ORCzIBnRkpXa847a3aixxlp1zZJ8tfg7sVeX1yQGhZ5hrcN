import { Metadata, NextPage } from "next";
import { TapBar, ProfileHeader, Profile_nav } from "../../../components/shared/index";
import FramerMotion from '@/components/shared/FramerMotion'

export const metadata: Metadata = {
  title: "Profile | Home",
  description: "Your personal space in NextFi",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const FormLayout: NextPage<RootLayoutProps> = ({ children }) => {
  return (
    <div className="profile__body ">
      <ProfileHeader />
      <main className="profile__main site-holder">
        <Profile_nav />
        <FramerMotion>{children}</FramerMotion>
      </main>
      <TapBar />
    </div>
  );
};
export default FormLayout;
