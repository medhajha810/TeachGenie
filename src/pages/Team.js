import React from 'react';
import { Github, Linkedin, Mail, Award, Code } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Boxes from '../components/BackgroundBoxes';
import '../styles/team.css';
import '../styles/draggable-gallery.css';
import { ContainerScroll } from '../components/ContainerScroll';
import { motion } from 'framer-motion';
import { DraggableCardContainer, DraggableCardBody } from '../components/DraggableCard';

const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Lovi Raj Gupta',
            role: 'Founder & CEO',
            avatar: '/team/LovirajSir.jpg',
            bio: 'Full-stack developer passionate about building innovative educational technology solutions.',
            color: '#8b5cf6', // Updated to Lavender for consistency
            isLead: true,
            social: {
                linkedin: 'https://www.linkedin.com/in/loviraj',
            }
        },
        {
            id: 2,
            name: 'Souhardya Bose',
            role: 'Contributor',
            avatar: 'https://ui-avatars.com/api/?name=Souhardya+Bose&size=200&background=8b5cf6&color=fff&bold=true',
            bio: 'Data scientist and machine learning engineer enhancing AI-powered features.',
            color: '#8b5cf6',
            isLead: false,
            social: {
                linkedin: 'https://www.linkedin.com/in/souhardya-bose/',
            }
        },
        {
            id: 3,
            name: 'Golu Kumar',
            role: 'Contributor',
            avatar: '/team/Golu.png',
            bio: 'Core engineering contributor responsible for designing and scaling the technical foundation of the platform. Experience spans full-stack development, cloud infrastructure, and applied AI, with a strong focus on building secure, reliable, and maintainable systems. Key efforts include clean system architecture, performance optimization, and transforming product requirements into production-ready solutions that support long-term growth.',
            color: '#8b5cf6',
            isLead: false,
            social: {
                linkedin: 'https://www.linkedin.com/in/golukumar15',
            }
        },
        {
            id: 4,
            name: 'Medha Jha',
            role: 'Contributor',
            avatar: '/team/Medha.jpg',
            bio: 'Product builder and computer science engineer focused on designing scalable SaaS platforms with strong emphasis on clarity, performance, and real-world impact. Background includes data analysis, system design, and full-stack development, enabling translation of complex requirements into reliable, user-centric solutions. Motivation stems from a deep interest in solving practical problems faced by growing teams and digital businesses, especially around efficiency, decision-making, and automation.',
            color: '#8b5cf6',
            isLead: false,
            social: {
                linkedin: 'https://www.linkedin.com/in/medha-jha810',
            }
        }
    ];

    const TitleComponent = () => (
        <div className="container" style={{ marginBottom: '-20rem', marginTop: '150px', pointerEvents: 'none' }}>
            <h1 className="team-hero-title">Meet Our Team</h1>
            <p className="team-hero-subtitle">
                The talented people behind TeachGenie, working together to revolutionize education
            </p>
        </div>
    );

    return (
        <div className="team-page">
            <Boxes />
            <Navbar />

            <div style={{ position: 'relative', zIndex: 10 }}>
                <TitleComponent />
                <ContainerScroll titleComponent={null}>
                    <div className="team-scroll-content">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.id}
                                className={`team-member-row ${index % 2 !== 0 ? 'reverse' : ''}`}
                                initial={{ opacity: 0.5, scale: 0.9 }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    boxShadow: `0 20px 40px -10px ${member.color}30`
                                }}
                                viewport={{ margin: "-10% 0px -10% 0px", once: false, amount: 0.6 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                whileHover={{
                                    scale: 1.02,
                                    borderColor: member.color,
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                    boxShadow: `0 25px 50px -12px ${member.color}60`
                                }}
                                style={{
                                    border: `${index < 2 ? '4px' : '2px'} solid ${member.color}4d`, // Thicker for top 2
                                    borderRadius: '24px',
                                    minHeight: member.id === 1 ? '580px' : '280px' // Increased length for Lead card
                                }}
                            >
                                <div className="team-member-image-container">
                                    <img
                                        src={member.avatar}
                                        alt={member.name}
                                        className="team-member-image"
                                    />
                                </div>
                                <div className="team-member-details">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                        <h3 className="team-member-name" style={{ marginBottom: 0 }}>{member.name}</h3>
                                        {member.social.linkedin && (
                                            <a
                                                href={member.social.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="social-link"
                                                aria-label="LinkedIn"
                                                style={{ width: '40px', height: '40px', position: 'relative', zIndex: 100 }}
                                            >
                                                <Linkedin size={18} />
                                            </a>
                                        )}
                                    </div>
                                    <p className="team-member-role" style={{ color: member.color }}>{member.role}</p>
                                    <p
                                        className="team-member-bio"
                                        style={{
                                            fontSize: member.id === 1 ? '1.5rem' : member.id === 2 ? '1.25rem' : undefined,
                                            lineHeight: (member.id === 1 || member.id === 2) ? '1.8' : undefined
                                        }}
                                    >
                                        {member.bio}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </ContainerScroll>
            </div>

            {/* Draggable Gallery Section */}
            <div style={{ position: 'relative', zIndex: 10, marginBottom: '6rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div className="gallery-wrapper">
                    <h2 className="gallery-section-title">Gallery</h2>
                    <p className="gallery-section-subtitle">
                        Behind the scenes of our innovation journey, team events, and collaborative moments.
                    </p>

                    <DraggableCardContainer>
                        <DraggableCardBody style={{
                            rotate: '-18deg',
                            zIndex: 6,
                            marginLeft: '-220px',
                            marginTop: '-250px',
                            scatterTarget: { x: -180, y: -200, rotate: -10 } // Top Left (Safe)
                        }}>
                            <div className="draggable-card-content">
                                <img
                                    src="/Medha-Gallery.jpg"
                                    alt="Medha Gallery"
                                    className="card-image"
                                />
                            </div>
                        </DraggableCardBody>

                        <DraggableCardBody style={{
                            rotate: '12deg',
                            zIndex: 5,
                            marginLeft: '-110px',
                            marginTop: '-170px',
                            scatterTarget: { x: 180, y: -200, rotate: 10 } // Top Right (Safe)
                        }}>
                            <div className="draggable-card-content">
                                <img
                                    src="/Golu-Gallery.jpg"
                                    alt="Golu Gallery"
                                    className="card-image"
                                />
                            </div>
                        </DraggableCardBody>

                        <DraggableCardBody style={{
                            rotate: '-6deg',
                            zIndex: 4,
                            marginLeft: '-190px',
                            marginTop: '-190px',
                            scatterTarget: { x: -180, y: 200, rotate: -5 } // Bottom Left (Safe)
                        }}>
                            <div className="draggable-card-content">
                                <img
                                    src="/BoseBhaiyaGallery.jpg"
                                    alt="Bose Gallery"
                                    className="card-image"
                                />
                            </div>
                        </DraggableCardBody>

                        <DraggableCardBody style={{
                            rotate: '20deg',
                            zIndex: 3,
                            marginLeft: '-100px',
                            marginTop: '-240px',
                            scatterTarget: { x: 180, y: 200, rotate: 5 } // Bottom Right (Safe)
                        }}>
                            <div className="draggable-card-content">
                                <img
                                    src="/LoviRajSir-Gallery.jpg"
                                    alt="LoviRajSir Gallery"
                                    className="card-image"
                                />
                            </div>
                        </DraggableCardBody>

                        <DraggableCardBody style={{
                            rotate: '-10deg',
                            zIndex: 2,
                            marginLeft: '-180px',
                            marginTop: '-220px',
                            scatterTarget: { x: 0, y: 0, rotate: 0 } // Center (Safe)
                        }}>
                            <div className="draggable-card-content">
                                <img
                                    src="https://images.unsplash.com/photo-1528605248644-14dd04022da3?q=80&w=1000&auto=format&fit=crop"
                                    alt="Team Retreats"
                                    className="card-image"
                                />
                            </div>
                        </DraggableCardBody>

                        <DraggableCardBody style={{ rotate: '5deg', zIndex: 1 }}>
                            <div className="draggable-card-content">
                                <img
                                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop"
                                    alt="Knowledge Sharing"
                                    className="card-image"
                                />
                            </div>
                        </DraggableCardBody>
                    </DraggableCardContainer>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Team;
