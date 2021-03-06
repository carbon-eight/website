import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {
  Header,
  Footer,
} from '.';
import {
  NavigationMenu,
} from '../Navigation';
import { SEO } from '..';
import '../../sass/global/styles.scss';
import 'typeface-montserrat';

const isClient = typeof window !== 'undefined';
const viewportUnitsBuggyfill = isClient ? require('viewport-units-buggyfill') : null;

class PureLayout extends Component {
  state = {
    navActive: false,
  };

  componentDidMount() {
    viewportUnitsBuggyfill.init();
    if (isClient) {
      window.addEventListener('keydown', this.handleEscKey);
    }
  }

  componentWillUnmount() {
    if (isClient) {
      window.removeEventListener('keydown', this.handleEscKey);
    }
  }

  handleEscKey = (event) => {
    const { navActive } = this.state;
    if (event.keyCode === 27 && navActive) this.closeNav();
  }

  toggleNav = (event) => {
    event.preventDefault();
    const { navActive } = this.state;
    if (event) event.preventDefault();
    if (navActive) document.body.classList.remove('nav-open');
    if (!navActive) document.body.classList.add('nav-open');
    this.setState({
      navActive: !navActive,
    });
  };

  openNav = (event) => {
    if (event) event.preventDefault();
    document.body.classList.add('nav-open');
    this.setState({
      navActive: true,
    });
  };

  closeNav = () => {
    document.body.classList.remove('nav-open');
    this.setState({
      navActive: false,
    });
  };

  render() {
    const {
      navActive,
    } = this.state;
    const {
      children,
      location,
      settings,
      seoData,
      solidHeader,
    } = this.props;
    const {
      metaTitle = null,
      metaDescription = null,
      openGraphImage = null,
    } = seoData;
    const isHome = Boolean(location.pathname === '/');
    return (
      <>
        <SEO
          title={metaTitle && metaTitle.text}
          desc={metaDescription && metaDescription.text}
          banner={openGraphImage && openGraphImage.url}
          pathname={location.pathname}
        />
        <div id="app" className="app">
          <Header
            location={location}
            navActive={navActive}
            toggleNavHandler={event => this.toggleNav(event)}
            closeNav={event => this.closeNav(event)}
            solidHeader={solidHeader}
          />
          <NavigationMenu
            location={location}
            settings={settings}
            navActive={navActive}
            closeNav={event => this.closeNav(event)}
            toggleNavHandler={event => this.toggleNav(event)}
          />
          <main className={isHome ? 'home' : location.pathname.replace(/\//g, '')}>
            {children}
          </main>
          <Footer
            location={location}
            settings={settings}
          />
        </div>
      </>
    );
  }
}

class Layout extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            settings: prismicSettings {
              data {
                primaryMenu: primary_menu {
                  description {
                    html
                    text
                  }
                  audience {
                    html
                    text
                  }
                  linkLabel: link_label {
                    text
                  }
                  link {
                    target
                    url
                    linkType: link_type
                    slug: uid
                  }
                }
                legalLinks: legal_links {
                  linkLabel: link_label {
                    text
                  }
                  link {
                    target
                    url
                    linkType: link_type
                    slug
                  }
                }
                socialLinks: social_links {
                  link {
                    url
                    target
                  }
                  type
                }
                email {
                  text
                }
              }
            }
          }
        `}
        render={data => <PureLayout {...this.props} settings={data.settings.data} />}
      />
    );
  }
}

export default Layout;
