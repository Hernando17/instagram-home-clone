import { Route, Routes } from 'react-router-dom';
import { Home, Explore, Reels, Messages, Profile, Notifications } from '../pages';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notifications" element={<Notifications />} />
        </Routes>
    );
}