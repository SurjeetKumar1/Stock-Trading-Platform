import React from "react";
import {getByAltText, render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'

// import '@testing-library/jest-dom/extend-expect'
// extend-expect -> use to delay the check, means data base se kuch aa raha hai aur kuch time lag gaya toh fir kuch time rukega then check
import Hero from "../landing_page/home/Hero";
 
//Test Suite  ->multiple test cases ek sath de sakte hai
describe('Hero Componet',()=>{
    test('render hero image',()=>{
        render(<Hero/>);
        const heroImage=screen.getByAltText("Hero");
        expect(heroImage).toBeInTheDocument() //expect funtion ke andar batana hai what we are expecting
        expect(heroImage).toHaveAttribute("src","media/images/homeHero.png");
    })

    test('render sign up button',()=>{
        render(<Hero/>);
        const signupButton=screen.getByRole("button",{name:"Sign up now"});
        expect(signupButton).toBeInTheDocument() //expect funtion ke andar batana hai what we are expecting
        expect(signupButton).toHaveClass("btn-primary");
    })
})