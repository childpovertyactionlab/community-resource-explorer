/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  // Use our custom resize-aware implementation for all stages
  // The original package uses JSX runtime which isn't configured in this Gatsby setup
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'react-resize-aware': require.resolve('./src/mocks/react-resize-aware.js'),
      },
    },
  })

  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /mapbox-gl/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

// You can delete this file if you're not using it
// import schools from "../../content/data/schools.json"
const { createFilePath } = require("gatsby-source-filesystem")

const SchoolTemplate = require.resolve(`./src/templates/schoolTemplate.js`)

// Creates pages for course events
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allSchoolsJson {
        edges {
          node {
            OBJECTID
            tea
            level
            hs
            ms
            sln
            campus
            address
            phone
            website
            point_x
            point_y
            dem_poptot_estimate
            dem_undr18_estimate
            dem_65over_estimate
            dem_asian_estimate
            dem_black_estimate
            dem_female_estimate
            dem_hispan_estimate
            dem_male_estimate
            dem_white_estimate
            com_comrec_estimate
            com_comrec_z
            com_evics_estimate
            com_evics_z
            com_libs_estimate
            com_libs_z
            com_urbhe_estimate
            com_urbhe_z
            com_vacbus_estimate
            com_vacbus_z
            com_vacltb_estimate
            com_vacltb_z
            com_vacltr_estimate
            com_vacltr_z
            com_vacres_estimate
            com_vacres_z
            eco_joball_estimate
            eco_joball_z
            eco_lowjob_estimate
            eco_lowjob_z
            eco_midjob_estimate
            eco_midjob_z
            eco_owncb_estimate
            eco_owncb_z
            eco_rentcb_estimate
            eco_rentcb_z
            hel_chkups_estimate
            hel_chkups_z
            hel_inscov_estimate
            hel_inscov_z
            hel_insrat_estimate
            hel_insrat_z
            hel_pharma_estimate
            hel_pharma_z
            hel_sleep_estimate
            hel_sleep_z
            yth_broad_estimate
            yth_broad_z
            yth_aftscl_estimate
            yth_aftscl_z
            yth_cccafd_estimate
            yth_cccafd_z
            yth_cccall_estimate
            yth_cccall_z
            yth_ecseat_estimate
            yth_ecseat_z
            com_INDEX
            eco_INDEX
            hel_INDEX
            yth_INDEX
            cri_INDEX
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.error(result.errors)
    throw result.errors
  }

  const schools = result.data.allSchoolsJson.edges
  const allSchools = schools.map(({ node }) => node)

  schools.forEach(({ node: school }) => {
    createPage({
      path: `/schools/${school.sln}/`,
      component: SchoolTemplate,
      context: {
        slug: school.sln,
        schoolNode: school,
        allSchools: allSchools,
      },
    })
  })
}
