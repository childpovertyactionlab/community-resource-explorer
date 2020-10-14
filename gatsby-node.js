/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
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

// School page template.
const SchoolTemplate = require.resolve(`./src/templates/schoolTemplate.js`)
// Blog post template.
const PostTemplate = require.resolve(`./src/templates/postTemplate.js`)

// Creates pages for course events
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            body
            frontmatter {
              title
              date
              path
              showCaroItems
              caroItems {
                alt
                character1
                character2
                indexName
                src
                stat1text
                stat2text
              }
              heroImage
              heroImageAlt
              subtitle
            }
            excerpt(truncate: true, pruneLength: 200)
          }
        }
      }
      allSchoolsJson {
        edges {
          node {
            id
            ADDRESS
            CITY
            Feeder
            HIGH_SLN
            LEVEL
            POINT_X
            POINT_Y
            PHONE
            OBJECTID
            SCHOOLNAME
            SLN
            TEA
            WEBSITE
            ZIP
            ci_index
            ci_weight
            ci_weight_sd
            comm_bbp
            comm_bbp_sd
            comm_bvp
            comm_bvp_sd
            comm_cctrcap
            comm_cctrcap_sd
            comm_evrate
            comm_evrate_sd
            comm_incarpct
            comm_incarpct_sd
            comm_juvcrimecap
            comm_juvcrimecap_sd
            comm_libcap
            comm_libcap_sd
            comm_ltbvp
            comm_ltbvp_sd
            comm_ltrvp
            comm_ltrvp_sd
            comm_ocb
            comm_ocb_sd
            comm_ocbp
            comm_ocbp_sd
            comm_parkcap
            comm_parkcap_sd
            comm_rcb
            comm_rcb_sd
            comm_rcbp
            comm_rcbp_sd
            comm_rvp
            comm_rvp_sd
            comm_u18bbp
            comm_u18bbp_sd
            cri_index
            cri_weight
            cri_weight_sd
            dem_popas
            dem_popas_sd
            dem_popbl
            dem_popbl_sd
            dem_popch
            dem_popch_sd
            dem_popf
            dem_popf_sd
            dem_pophi
            dem_pophi_sd
            dem_popm
            dem_popm_sd
            dem_popse
            dem_popse_sd
            dem_popwh
            dem_popwh_sd
            dem_thh
            dem_thh_sd
            dem_totp
            dem_totp_sd
            eci_index
            eci_weight
            eci_weight_sd
            econ_cpr
            econ_cpr_sd
            econ_fincap
            econ_fincap_sd
            econ_medinc
            econ_medinc_sd
            econ_paydaycap
            econ_paydaycap_sd
            econ_pctlwjobs
            econ_pctlwjobs_sd
            econ_pctmwjobs
            econ_pctmwjobs_sd
            econ_pr
            econ_pr_sd
            econ_pyr
            econ_pyr_sd
            econ_ur
            econ_ur_sd
            econ_totjobs
            econ_totjobs_sd
            edi_index
            edi_weight
            edi_weight_sd
            edu_oostkids
            edu_oostkids_sd
            edu_perbach
            edu_perbach_sd
            edu_perearlyed
            edu_perearlyed_sd
            edu_qeckids
            edu_qeckids_sd
            fam_affcckids
            fam_affcckids_sd
            fam_lcckids
            fam_lcckids_sd
            fam_tphh
            fam_tphh_sd
            fam_tphhpct
            fam_tphhpct_sd
            fi_index
            fi_weight
            fi_weight_sd
            hel_bphigh
            hel_bphigh_sd
            hel_castthma
            hel_castthma_sd
            hel_checkup
            hel_checkup_sd
            hel_clincap
            hel_clincap_sd
            hel_fruitsveggies
            hel_fruitsveggies_sd
            hel_groccap
            hel_groccap_sd
            hel_le
            hel_le_sd
            hel_mhlth
            hel_mhlth_sd
            hel_obesity
            hel_obesity_sd
            hel_perins
            hel_perins_sd
            hel_perpri
            hel_perpri_sd
            hel_perpub
            hel_perpub_sd
            hel_perunin
            hel_perunin_sd
            hel_pharmacap
            hel_pharmacap_sd
            hel_phlth
            hel_phlth_sd
            hel_prtopu
            hel_prtopu_sd
            hel_sleep
            hel_sleep_sd
            hel_stroke
            hel_stroke_sd
            hi_gen
            hi_index
            hi_weight
            hi_weight_sd
          }
        }
      }
    }
  `)

  // Create schools pages.
  const schools = result.data.allSchoolsJson.edges
  schools.forEach(({ node: school }) => {
    // console.log("school, ", school)
    createPage({
      path: `/schools/${school.SLN}/`,
      component: SchoolTemplate,
      context: {
        slug: school.SLN,
        schoolNode: school,
      },
    })
  })

  // Create post pages.
  const posts = result.data.allMdx.edges
  posts.forEach(({ node: post }) => {
    // console.log("post, ", post)
    createPage({
      path: `/in-action/${post.frontmatter.path}/`,
      component: PostTemplate,
      context: {
        slug: post.frontmatter.path,
        post: post,
      },
    })
  })
}
