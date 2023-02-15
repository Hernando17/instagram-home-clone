import { Route, Routes } from 'react-router-dom';
import { Home, Explore, Reels } from '../pages';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/reels" element={<Reels />} />
        </Routes>
    );
}