/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

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
            ci_weight_quintile
            comm_bbp
            comm_bbp_quintile
            comm_bvp
            comm_bvp_quintile
            comm_cctrcap
            comm_cctrcap_quintile
            comm_evrate
            comm_evrate_quintile
            comm_incarpct
            comm_incarpct_quintile
            comm_juvcrimecap
            comm_juvcrimecap_quintile
            comm_libcap
            comm_libcap_quintile
            comm_ltbvp
            comm_ltbvp_quintile
            comm_ltrvp
            comm_ltrvp_quintile
            comm_ocb
            comm_ocb_quintile
            comm_ocbp
            comm_ocbp_quintile
            comm_parkcap
            comm_parkcap_quintile
            comm_rcb
            comm_rcb_quintile
            comm_rcbp
            comm_rcbp_quintile
            comm_rvp
            comm_rvp_quintile
            comm_u18bbp
            comm_u18bbp_quintile
            cri_index
            cri_weight
            cri_weight_quintile
            dem_popas
            dem_popas_quintile
            dem_popbl
            dem_popbl_quintile
            dem_popch
            dem_popch_quintile
            dem_popf
            dem_popf_quintile
            dem_pophi
            dem_pophi_quintile
            dem_popm
            dem_popm_quintile
            dem_popse
            dem_popse_quintile
            dem_popwh
            dem_popwh_quintile
            dem_thh
            dem_thh_quintile
            dem_totp
            dem_totp_quintile
            eci_index
            eci_weight
            eci_weight_quintile
            econ_cpr
            econ_cpr_quintile
            econ_fincap
            econ_fincap_quintile
            econ_medinc
            econ_medinc_quintile
            econ_paydaycap
            econ_paydaycap_quintile
            econ_pctlwjobs
            econ_pctlwjobs_quintile
            econ_pctmwjobs
            econ_pctmwjobs_quintile
            econ_pr
            econ_pr_quintile
            econ_pyr
            econ_pyr_quintile
            econ_ur
            econ_ur_quintile
            edi_index
            edi_weight
            edi_weight_quintile
            edu_oostkids
            edu_oostkids_quintile
            edu_perbach
            edu_perbach_quintile
            edu_perearlyed
            edu_perearlyed_quintile
            edu_qeckids
            edu_qeckids_quintile
            fam_affcckids
            fam_affcckids_quintile
            fam_lcckids
            fam_lcckids_quintile
            fam_tphh
            fam_tphh_quintile
            fam_tphhpct
            fam_tphhpct_quintile
            fi_index
            fi_weight
            fi_weight_quintile
            hel_bphigh
            hel_bphigh_quintile
            hel_castthma
            hel_castthma_quintile
            hel_checkup
            hel_checkup_quintile
            hel_clincap
            hel_clincap_quintile
            hel_fruitsveggies
            hel_fruitsveggies_quintile
            hel_groccap
            hel_groccap_quintile
            hel_le
            hel_le_quintile
            hel_mhlth
            hel_mhlth_quintile
            hel_obesity
            hel_obesity_quintile
            hel_perins
            hel_perins_quintile
            hel_perpri
            hel_perpri_quintile
            hel_perpub
            hel_perpub_quintile
            hel_perunin
            hel_perunin_quintile
            hel_pharmacap
            hel_pharmacap_quintile
            hel_phlth
            hel_phlth_quintile
            hel_prtopu
            hel_prtopu_quintile
            hel_sleep
            hel_sleep_quintile
            hel_stroke
            hel_stroke_quintile
            hi_gen
            hi_index
            hi_weight
            hi_weight_quintile
          }
        }
      }
    }
  `)

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
}
