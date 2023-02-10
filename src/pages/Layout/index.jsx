import { Sidebar, TabNav } from "../../components"
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Layout({ children, title }) {
    return (
        <div className="layout">
            <HelmetProvider>
                <Helmet>
                    <title>{title}</title>
                </Helmet>
            </HelmetProvider>
            <Sidebar />
            {children}
            <TabNav />
        </div>
    )
}