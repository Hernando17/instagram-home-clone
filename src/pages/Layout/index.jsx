import { Sidebar } from "../../components"

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Sidebar />
            {children}
        </div>
    )
}