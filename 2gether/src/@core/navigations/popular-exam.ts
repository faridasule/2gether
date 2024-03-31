import jamb from '../../assets/JAMB.svg'
import waec from '../../assets/waec-logo.svg'
import neco from '../../assets/neco.svg'

const examNavigation = () => {
  return [
    {
      image: jamb,
      link: 'https://www.jamb.gov.ng/',
      title: 'JAMB result 2023 is out!',
      exam: 'Jamb',
    },
    {
      image: jamb,
      link: 'https://www.jamb.gov.ng/',
      title: 'Post UTME result 2023 is out!',
      exam: 'POST UTME',
    },
    {
      image: waec,
      link: 'https://www.waecnigeria.org/',
      title: 'WAEC 2023 result is out!',
      exam: 'WAEC',
    },
    {
      image: neco,
      link: 'https://neco.gov.ng/',
      title: 'UNILAG admission list first batch is out!',
      exam: '',
    },
  ]
}

export default examNavigation
