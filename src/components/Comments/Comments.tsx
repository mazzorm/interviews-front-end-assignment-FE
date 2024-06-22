export default function Comments({comment, date, rating}: any) {
    return (
        <>
            <li>{comment}</li>
            <li>{date}</li>
            <li>{rating}</li>
        </>
    )
}