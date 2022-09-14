import { addDoc, collection } from 'firebase/firestore';
import React from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../firebase.config';

export default function Feedbackform() {
    let {id} = useParams();
    console.log(id);
    let receiver = id.substring(1);
    console.log(receiver)
    
    async function addFeedback(e){
        let data = new FormData(e.target);
        let feedback = data.get('feedback');
        let obj = {
            feedback:feedback,
            sendDate:Date.now(),
            receiver: receiver
        }
        await addDoc(collection(db, "feedback"), obj);
    }

    return (
        <div className='feedbackform'>
            <form onSubmit={(e)=>{
                e.preventDefault();
                addFeedback(e);
            }}>
                <input type="text" name="feedback" placeholder='Leave your feedback' />
                <button>Send</button>
            </form>
        </div>
    )
} 
