import CommentsCss from './Comments.module.css'

export default function Comments({comment, date, rating}: any) {
    return (
        <>
        <div className={CommentsCss['comments-container']}>
            <div>{comment}</div>
            <div>{date}</div>
            <div>voto {rating}/5</div>
        </div>
        </>
    )
}