import useCustomHook from "./useCustinHook";
import TempleteOne from './templete/templeteOne'
import React from 'react'
export default function PageOne() {
    const MyTempleteOne = useCustomHook(TempleteOne)
    return <div>
        <div>title</div>
        {MyTempleteOne}
    </div>
}