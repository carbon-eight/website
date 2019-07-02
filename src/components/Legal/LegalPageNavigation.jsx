import React, { useState, useEffect } from 'react';
import { getSectionId } from './LegalPageSection';
import './LegalPageNavigation.scss';

const isClient = typeof window !== 'undefined';

const generateKey = pre => `${pre}_${new Date().getTime()}`;

const scrollToPageSection = (event, index) => {
  if (event) event.preventDefault();
  const targetEl = document.getElementById(getSectionId(index));
  if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const isInView = (index, viewportTop) => {
  const targetEl = document.getElementById(getSectionId(index));
  const rect = targetEl.getBoundingClientRect();
  const isSectionInView = rect.top < viewportTop && rect.bottom > viewportTop;
  console.log({ isSectionInView });
  console.log({ rect });
  return isSectionInView;
};

const LegalPageNavigation = (props) => {
  const {
    sections,
  } = props;
  const [activeSection, setActiveSection] = useState(0);
  const sectionTitles = sections && sections.map(section => section.sectionHeading.text);
  useEffect(() => {
    const findActiveSection = () => {
      const viewportTop = isClient ? window.scrollY : 0;
      isInView(0, viewportTop);
      // setActiveSection(0);
    };
    window.addEventListener('scroll', findActiveSection);
    return () => {
      window.addEventListener('scroll', findActiveSection);
    };
  });
  console.log({ activeSection });
  return (
    <nav className="legal-page-navigation">
      <ul className="nav-items">
        { sectionTitles && sectionTitles.map((sectionTitle, index) => {
          const count = (index < 9) ? `0${index + 1}` : `${index + 1}`;
          return (
            <li
              key={generateKey(index)}
              className="nav-item"
            >
              <button
                type="button"
                className="anchor-link"
                onClick={event => scrollToPageSection(event, index)}
                aria-label={`Jump to ${sectionTitle} section`}
              >
                <span className="count">{count}</span>
                <span className="section-title">{sectionTitle}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default LegalPageNavigation;
