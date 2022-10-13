import React from "react";

export default function Footer(){
    return (
        <footer>
            <div className="flex gap-3 justify-center pt-14">
                <button><img src="images\icons8-facebook.svg" alt="" className="w-[30px]" /></button>
                <button><img src="images\icons8-twitter.svg" alt="" className="w-[30px]" /></button>
                <button><img src="images\icons8-instagram.svg" alt="" className="w-[30px]" /></button>
            </div>
        </footer>
    )
}