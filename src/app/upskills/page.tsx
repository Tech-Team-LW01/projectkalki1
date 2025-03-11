"use client"
import React from 'react';
import Hero from '@/components/customComponents/upskillComponents/Hero';
import Modules from '@/components/customComponents/upskillComponents/Modules';
import Mentor from "@/components/customComponents/upskillComponents/Mentor";
import CertificateDisplay from "@/components/customComponents/upskillComponents/Certificate"
const page = () => {    
    return (
        <div>
            <Hero/>
            <Modules/>
            <Mentor/>
            <CertificateDisplay/>
        </div>
    )
}

export default page;