import { OrganizationList } from '@clerk/nextjs'

const SelectOrganizationPage = () => {
  return (
    <OrganizationList
      hidePersonal
      afterCreateOrganizationUrl='/organization/:id'
      afterSelectOrganizationUrl='/organization/:id'
    />
  )
}
export default SelectOrganizationPage
