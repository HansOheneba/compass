import Assessments from '@/components/home/assessments';
import CallToAction from '@/components/home/cta';
import Features from '@/components/home/features'
import Hero from '@/components/home/hero'
import React from 'react'

const Compass = () => {
  return (
    <>
      <section>
        <Hero
          categories={[
            {
              label: "Career Discovery",
              sub: "Find Your Path",
              img: "/images/hero/school.jpg",
            },
            {
              label: "Skill Assessment",
              sub: "Identify Your Strengths",
              img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              label: "Career Transition",
              sub: "Pivot with Confidence",
              img: "https://plus.unsplash.com/premium_photo-1693671725924-302f7a2c450b?q=80&w=660&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              label: "Global Opportunities",
              sub: "Work Beyond Borders",
              img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              label: "Leadership Growth",
              sub: "Advance Your Career",
              img: "https://plus.unsplash.com/premium_photo-1661605653366-b1a6a6831cd4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              label: "Advisory Sessions",
              sub: "Talk to Experts",
              img: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ]}
        />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <CallToAction />
      </section>
      <section>
        <Assessments />
      </section>
    </>
  );
}

export default Compass