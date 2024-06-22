import { useEffect, useState } from 'react';
import CommentsCss from './Comments.module.css'

export default function Comments({comment, date, rating}: any) {

    const [formattedDate, setFormattedDate]: any = useState()

    const formatDateToItalian = (dateString: any) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('it-IT', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }).format(date);
      };
      

      useEffect(()=> {
        const formattedDate = formatDateToItalian(date);
        setFormattedDate(formattedDate);
      }, [])

    return (
        <>
        <div className={CommentsCss['comments-container']}>
            <div>{comment}</div>
            <div>{formattedDate}</div>
            <div>voto {rating}/5</div>
        </div>
        </>
    )
}