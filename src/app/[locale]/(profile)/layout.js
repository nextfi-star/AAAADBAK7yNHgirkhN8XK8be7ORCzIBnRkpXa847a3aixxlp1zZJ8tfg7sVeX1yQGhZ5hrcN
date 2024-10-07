import { Profile_nav } from "../components/shared";
import { ProfileHeader } from "../components/shared/ProfileHeader";
import { TapBar } from "../components/shared/TapBar";

export const metadata = {
  title: "Profile | Home",
  description: "Your personal space in NextFi",
};

export default function FormLayout({ children }) {
  return (
    <div className="profile__body ">
      <ProfileHeader />
      <main className="profile__main site-holder">
        <Profile_nav />
        {children}
      </main>
      <TapBar />
    </div>
  );
}
