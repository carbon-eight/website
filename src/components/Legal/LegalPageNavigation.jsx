import React, { useState, useEffect } from 'react';
import { getSectionId } from './LegalPageSection';
import { useDebouncedCallback } from 'use-debounce';
import './LegalPageNavigation.scss';

const isClient = typeof window !== 'undefined';

const generateKey = pre => `${pre}_${new Date().getTime()}`;
const getSectionAffix = index => `${(index < 9) ? `0${index + 1}` : index + 1}`;

const scrollToPageSection = (event, index) => {
  if (event) event.preventDefault();
  const targetEl = document.getElementById(getSectionId(index));
  if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const isInView = (index, sectionOffset) => {
  const targetEl = document.getElementById(getSectionId(index));
  const rect = targetEl.getBoundingClientRect();
  return (rect.top - sectionOffset) < 0;
};

const getPercentageRead = (activeSection, sectionOffset) => {
  const targetEl = document.getElementById(getSectionId(activeSection));
  const elementHeight = targetEl.clientHeight;
  const elementScrollTop = Math.abs(targetEl.getBoundingClientRect().top);
  const scrollPercentage = elementScrollTop / elementHeight;
  return scrollPercentage.toFixed(2);
};

const LegalPageNavigation = (props) => {
  const {
    sections,
    isMobile,
  } = props;
  const sectionOffset = isMobile ? 50 : 150;
  const [activeSection, setActiveSection] = useState(0);
  const [percentageRead, setPercentageRead] = useState(0);
  const [setPercentageDebounced] = useDebouncedCallback(
    (percentage) => {
      setPercentageRead(percentage, sectionOffset);
    },
    100,
    { maxWait: 100 },
  );
  const sectionTitles = sections && sections.map(section => section.sectionHeading.text);
  useEffect(() => {
    const findActiveSection = async () => {
      let currActiveSection = activeSection;
      sectionTitles.forEach((section, index) => {
        if (isInView(index, sectionOffset)) currActiveSection = index;
      });
      if (currActiveSection !== activeSection) setActiveSection(currActiveSection);
      setPercentageDebounced(getPercentageRead(currActiveSection));
    };
    if (isClient) window.addEventListener('scroll', findActiveSection);
    return () => {
      if (isClient) window.addEventListener('scroll', findActiveSection);
    };
  });
  console.log({ percentageRead });
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
      { isMobile && (
        <div className="reading-progress-bar">
          <div className="inner-progress" style={{ transform: `scaleX(${percentageRead})` }} />
        </div>
      )}
    </nav>
  );
};

export default LegalPageNavigation;
