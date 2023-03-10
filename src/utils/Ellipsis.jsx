export function Ellipsis({ text, limit }) {
    if (text.length <= limit) {
        return <>{text}</>;
    }
    return <>{text.slice(0, limit)}...</>;
};