"use client"
import React from 'react';
import Hero from '@/components/customComponents/upskillComponents/Hero';
import Modules from '@/components/customComponents/upskillComponents/Modules';
import Mentor from "@/components/customComponents/upskillComponents/Mentor";
import CertificateDisplay from "@/components/customComponents/upskillComponents/Certificate";
import VideoCourseCard from "@/components/customComponents/upskillComponents/Video";
const page = () => {    
    return (
        <div>
            <Hero/>
            <Modules/>
            <VideoCourseCard/>
            <Mentor/>
            <CertificateDisplay/>
        </div>
    )
}

export default page;