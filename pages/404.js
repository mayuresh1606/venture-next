import { redirect } from "next/dist/server/api-utils"
import Link from "next/link"
import Navbar from "../components/Navbar"
import { useEffect } from "react"

export default function Custom404() {
    useEffect(() => {
        window.onload = function(){
            window.location.href = "https://ventureworld.in"
        }
    }, [])
    return <>
        <Navbar />
        <Link href={"/"}>
            <button className="btn">Click here to go to homepage</button>
        </Link>
        </>
}