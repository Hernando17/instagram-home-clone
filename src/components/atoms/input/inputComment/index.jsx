export function InputComment({ postComment, index, onChange, placeholder }) {
    return <input type="text" id={index} value={!postComment[index] ? "" : postComment[index].value} onChange={onChange} className="post-comment-input" placeholder={placeholder} />
}