"use client"
import React from 'react';
import Hero from '@/components/customComponents/upskillComponents/Hero';
import Modules from '@/components/customComponents/upskillComponents/Modules';
import Mentor from "@/components/customComponents/upskillComponents/Mentor";
import CertificateDisplay from "@/components/customComponents/upskillComponents/Certificate";
import VideoCourseCard from "@/components/customComponents/upskillComponents/Video";
import Navbar from '@/components/customComponents/upskillComponents/Navbar';
import DeveloperCommunity from '@/components/customComponents/upskillComponents/Community';
import ProgramDetails from "@/components/customComponents/upskillComponents/ProgramDetails";
const page = () => {    
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Modules/>
            <VideoCourseCard/>
            <Mentor/>
            <CertificateDisplay/>
            <DeveloperCommunity/>
            <ProgramDetails/>
        </div>
    )
}

export default page;