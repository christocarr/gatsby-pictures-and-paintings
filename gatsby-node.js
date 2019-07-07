const path = require('path')

exports.createPages = async({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      paintings: allContentfulPainting {
        edges {
          node{
            slug
          }
        }
      }
    }
  `)


  data.paintings.edges.forEach(({ node }) => {
    createPage({
      path: `paintings/${node.slug}`,
      component: path.resolve(`./src/templates/painting-template.js`),
      context: {
        slug: node.slug
      }
    })
  })

}