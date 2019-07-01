
// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise => promise.then((result) => {
  if (result.errors) throw result.errors;
  return result;
});


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const interestPageTemplate = require.resolve('./src/templates/interest.jsx');
  const infoPageTemplate = require.resolve('./src/templates/information-page.jsx');

  const interestPages = await wrapper(
    graphql(`
      {
        allPrismicExpressionOfInterest {
          edges {
            node {
              id
              uid
            }
          }
        }
      }
    `),
  );

  const infoPages = await wrapper(
    graphql(`
      {
        allPrismicInformationPage {
          edges {
            node {
              id
              uid
            }
          }
        }
      }
    `),
  );

  const interestPageList = interestPages.data.allPrismicExpressionOfInterest.edges;
  const infoPageList = infoPages.data.allPrismicInformationPage.edges;

  /* ---------------------------------------------
  = Create an individual page for each Expression of Interest page =
  ----------------------------------------------- */

  interestPageList.forEach((edge) => {
    // The uid you assigned in Prismic is the slug!
    createPage({
      path: `/${edge.node.uid}/`,
      component: interestPageTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
      },
    });
  });

  /* ---------------------------------------------
  = Create an individual page for each Information page =
  ----------------------------------------------- */

  infoPageList.forEach((edge) => {
    // The uid you assigned in Prismic is the slug!
    createPage({
      path: `/${edge.node.uid}/`,
      component: infoPageTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
      },
    });
  });
};
