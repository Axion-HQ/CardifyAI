'use client'
import {userUser} from '@clerk/nextjs'
import {useEffect, useState} from 'react'
import {CollectionReference, doc, getDoc, setDoc} from 'firebase/firestore'
import {db} from '@firebase'
import { useRouter } from 'next/router'

export default function Flashcards() {
    const [isLoaded, isSigned, user] = useUser()
    const [flashcards, setFlashcards] = useState({})
    const router = useRouter()

        useEffect(() => {
            async function getFlashcards() {
                if (!user) return 
                const docRef = doc(collection(db, 'users'), user.id)
                const docSnap = await getDoc(docRef)

                if (docSnap.exists()) {
                 const collections  = docSnap.data().flashcards || []
                 setFlashcards(collections)
                }

                else { 
                    await setDoc(docRef, {flashcards: []})
                }
            }
            getFlashcards()

        }, [user])
        if (!isLoaded || !signedIn) {
            return <></>
        }
        const handleCardClick = (id) => { 
            Route.push('/flashcard?id=${id}')
        }
}