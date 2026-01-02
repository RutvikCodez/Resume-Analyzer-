type featuresGridPropsType = {
  icon?: SvgComponent
  title: string
  description: string
  color?: string
}
type howItWorkSectionGridPropsType = {
  step?: string
  icon?: SvgComponent
  title: string
  description: string
}
type interviewTypesGridPropsType = {
  icon?: SvgComponent
  title: string
  desc: string
  color?: string
}
type FAQSectionGridPropsType = {
  q: string
  a: string
}
type FooterLinksPropsType = {
  title: string
  type: string
  items: {
    label: string,
    href: string,
    icon?: SvgComponent
  }[]

}
