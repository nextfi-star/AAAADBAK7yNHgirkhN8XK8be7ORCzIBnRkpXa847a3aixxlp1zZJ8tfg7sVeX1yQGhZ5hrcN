import { Profile_nav } from "../components/shared";
import { ProfileHeader } from "../components/shared/ProfileHeader";
import { TapBar } from "../components/shared/TapBar";

export const metadata = {
  title: "Profile | Home",
  description: "Auth page for NextFi",
};

export default function FormLayout({ children }) {
  return (
    <div className="profile__body container mx-auto">
      <ProfileHeader />
      <main className="profile__main container mx-auto">
        <Profile_nav />
        {children}
      </main>
      <TapBar />
    </div>
  );
}
