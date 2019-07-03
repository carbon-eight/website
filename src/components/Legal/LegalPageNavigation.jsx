import React, { useState, useEffect } from 'react';
import { getSectionId } from './LegalPageSection';
import './LegalPageNavigation.scss';

const isClient = typeof window !== 'undefined';

const generateKey = pre => `${pre}_${new Date().getTime()}`;
const getSectionAffix = index => `${(index < 9) ? `0${index + 1}` : index + 1}`;

const scrollToPageSection = (event, index) => {
  if (event) event.preventDefault();
  const targetEl = document.getElementById(getSectionId(index));
  if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const isInView = (index) => {
  const offset = 150; // Offset top position of section with some padding
  const targetEl = document.getElementById(getSectionId(index));
  const rect = targetEl.getBoundingClientRect();
  return (rect.top - offset) < 0;
};

const LegalPageNavigation = (props) => {
  const {
    sections,
    isMobile,
  } = props;
  const [activeSection, setActiveSection] = useState(0);
  const sectionTitles = sections && sections.map(section => section.sectionHeading.text);
  useEffect(() => {
    const findActiveSection = () => {
      let currActiveSection = 0;
      sectionTitles.forEach((section, index) => {
        if (isInView(index)) currActiveSection = index;
      });
      if (currActiveSection !== activeSection) setActiveSection(currActiveSection);
    };
    if (isClient) window.addEventListener('scroll', findActiveSection);
    return () => {
      if (isClient) window.addEventListener('scroll', findActiveSection);
    };
  });
  return (
    <nav className="legal-page-navigation">
      { isMobile && (
        <button
          type="button"
          className="mobile-section-selector"
          onClick={event => scrollToPageSection(event)}
          aria-label={`Jump to ${sectionTitles[activeSection]} section`}
        >
          <span className="current-active-section">
            {sectionTitles[activeSection]}
          </span>
        </button>
      )}
      <ul className="nav-items">
        { sectionTitles && sectionTitles.map((sectionTitle, index) => (
          <li
            key={generateKey(index)}
            className="nav-item"
          >
            <button
              type="button"
              className={`anchor-link${activeSection === index ? ' active' : ''}`}
              onClick={event => scrollToPageSection(event, index)}
              aria-label={`Jump to ${sectionTitle} section`}
            >
              <span className="count">{getSectionAffix(index)}</span>
              <span className="section-title">{sectionTitle}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LegalPageNavigation;
