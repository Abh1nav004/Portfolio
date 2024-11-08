import React from 'react';
import PageHeaderContent from '../../components/PageHeader';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import './styles.scss';
import { DiApple, DiAndroid } from 'react-icons/di'
import { FaDev, FaDatabase } from 'react-icons/fa'
const personalDetails = [
    {
        label: "Name",
        value: "Abhinav Sharma",
    },
    {
        label: "Age",
        value: "20",
    },
    {
        label: "Address",
        value: "India, Punjab",
    },
    {
        label: "Email",
        value: "abhinavsharma04.contact@gmail.com",
    },
    {
        label: "Contact",
        value: "+91 8195922173",
    },
]

const jobSummary = `Hello! I'm Abhinav Sharma, a passionate and creative software developer currently pursuing my BTech in Computer Science and Engineering at Lovely Professional University. My journey in tech has been fueled by a love for problem-solving and a drive to create impactful solutions.

I’ve had the opportunity to work on diverse projects, including EliteCare, a healthcare platform that secured a spot in the Smart India Hackathon, and a smart Discord Bot designed with AI enhancements for community management.

Alongside my technical skills in languages like Java, Python, and JavaScript, I'm proficient in full-stack development using frameworks like Node.js, React, and Angular. I am also experienced in database management with MongoDB, MySQL, and Postgres, and I enjoy exploring AI integrations to make applications more intuitive and efficient.

Beyond coding, I’m an active participant in the tech community, currently serving as a Campus Ambassador for IIT Bombay, where I collaborate on national events and tech challenges. My goal is to bring creative ideas and technical depth to every project, always aiming to create solutions that make a difference.`;

<p className="jobsum">
  {jobSummary.split("\n").map((text, index) => (
    <span key={index}>
      {text}
      <br />
      <br />
    </span>
  ))}
</p>


const About = () => {
    return (
        <section id='about' className='about'>

            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className='about__content'>
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-900px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <h3>Developer</h3>
                        <p className="jobsum">{jobSummary}</p>
                    </Animate>


                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(500px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <h3 className='personalInformationHeaderText'>Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className='title'>{item.label}</span>
                                        <span className='value'>{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(600px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >

                        <div className="about__content__servicesWrapper__innerContent">

                            <div>
                                <FaDev size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiApple size={60} color="var(--yellow-theme-main-color)" />
                            </div>

                        </div>

                    </Animate>


                </div>

            </div>

        </section>

    )
}

export default About;
