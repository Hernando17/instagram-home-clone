import { InstagramColorLogo } from "../../../assets"

export function LoadingInstagram() {
    return (
        <div className="loading">
            <div className="loading-instagram">
                <img style={{
                    width: '160px',
                }} src={InstagramColorLogo} />
            </div>
        </div>
    )
}