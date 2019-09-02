import React from 'react';
// import { Link } from 'react-router-dom';


export const firebaseLooper = (snapshot) => {
    let data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
    })
    return data;
}

export const reverseArray = (actualArray) => {
    let reversedArray = [];

    for(let i = actualArray.length - 1; i >= 0; i--) {
        reversedArray.push(actualArray[i])
    }
    return reversedArray;
}

export const validate = (element) => {
    let error = [true,''];

    if(element.validation.email){
        const valid = /\S+@\S+\.\S+/.test(element.value);
        const message = `${!valid ? 'Precisa ser um email válido':''}`;
        error = !valid ? [valid,message]: error;
    }

    if(element.validation.required){
        const valid = element.value.trim() !== '';
        const message = `${!valid ? 'Campo obrigatório':''}`;
        error = !valid ? [valid,message]: error;
    }

    return error;
}