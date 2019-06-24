import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import smoothscroll from 'smoothscroll-polyfill';
import {
  Header,
  Footer,
  Navigation,
} from '.';
import { SEO } from '..';
import '../../sass/global/styles.scss';

const isClient = typeof window !== 'undefined';
const viewportUnitsBuggyfill = isClient ? require('viewport-units-buggyfill') : null;

class PureLayout extends Component {
  state = {
    navActive: false,
  };

  componentDidMount() {
    viewportUnitsBuggyfill.init();
    smoothscroll.polyfill();
  }

  componentWillUnmount() {
    if (isClient) window.removeEventListener('scroll', this.handleScroll);
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
    } = this.props;
    const { primaryMenu } = settings;
    const {
      metaTitle = null,
      metaDescription = null,
      openGraphImage = null,
    } = seoData;
    console.log('props @ Layout', this.props);
    const isHome = Boolean(location.pathname === '/');
    return (
      <>
        <SEO
          title={metaTitle && metaTitle.text}
          desc={metaDescription && metaDescription.text}
          banner={openGraphImage && openGraphImage.url}
        />
        <div id="app" className="app">
          <Header
            location={location}
            navActive={navActive}
            toggleNavHandler={event => this.toggleNav(event)}
          />
          <Navigation
            location={location}
            settings={settings}
            navActive={navActive}
            closeNav={event => this.closeNav(event)}
            toggleNavHandler={event => this.toggleNav(event)}
          />
          <main className={isHome ? 'home' : location.pathname.replace(/\//g, '')}>
            {children}
          </main>
          <Footer />
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
                  targetAudience: target_audience {
                    html
                    text
                  }
                  title {
                    text
                  }
                  pageLink: page_link {
                    target
                    url
                    link_type
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
