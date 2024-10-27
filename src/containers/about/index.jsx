import React from'react';
import PageHeaderContent from '../../components/PageHeader';
import { BsInfoCircleFill } from 'react-icons/bs';

const About = () => {
    return (
        <section id='about' className='about'>

        <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40}/>}
        />

        </section>
        
    )
}

export default About;
