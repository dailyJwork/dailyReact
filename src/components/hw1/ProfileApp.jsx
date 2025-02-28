import Profile from "./Profile";
import profileJSON from "./profile.json";

export default function ProfileApp () {
    return (
        <>
        <Profile
            name = {profileJSON.username}
            tag = {profileJSON.tag}
            location = {profileJSON.location}
            image = {profileJSON.avatar}
            stats = {profileJSON.stats}
            />
        </>
    );
}