import jamb from "../../assets/JAMB.svg"
import nda from "../../assets/nda.svg"
import lautech from "../../assets/lautech.svg"
import waec from "../../assets/waec-logo.svg"

const latestNewsNavigation = () => {
    return [
        {
            image: nda,
            link: "https://nda.edu.ng/",
            title: "UNILAG admission list first batch is out!",
        },
     
        {
            image: lautech,
            link: "https://www.lautech.edu.ng/",
            title: "LAUTECH Post-UTME screening form is out!",
        },
        {
            image: waec,
            link: 'https://www.waecnigeria.org/',
            title: "WAEC 2023 result is out!",
        },
           {
            image: jamb,
            link: "https://www.jamb.gov.ng/",
            title: "JAMB result 2023 is out!",
        },
  

    ]
}	


export default latestNewsNavigation;
