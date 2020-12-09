import React, {useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';

export function ShowFileComponent(){
     const handleFileUpload = (files: any)=>{
        const file = files[0]
         console.log(file);
    }
    useEffect(()=>{})
        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.File id="FormControlFile" label="File input" onChange={(e: any)=>{handleFileUpload(e)}}/>
                    </Form.Group>
                </Form>
                Show File
                <Button variant="dark" onChange={(event)=>{handleFileUpload(event)}}>Выбрать файл</Button>
            </div>
        )


}

