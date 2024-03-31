import jamb from "../../assets/JAMB.svg"
import nda from "../../assets/nda.svg"
import lautech from "../../assets/lautech.svg"
import unilagos from "../../assets/unilag.svg"
import uniIbadan from "../../assets/uniIbadan.svg"

const resourceNavigation = () => {
    return [
        {
            image: nda,
            link: "https://nda.edu.ng/",
            title: "Nigerian Defence Academy entrance examination past questions 2012 to 2022",
        },
        {
            image: jamb,
            link: "https://www.jamb.gov.ng/",
            title: "JAMB past questions 2012-2022",
        },
        {
            image: lautech,
            link: "https://www.lautech.edu.ng/",
            title: "LAUTECH Post- UTME past questions 2012 to 2023",
        },
        {
            image: unilagos,
            link: "https://unilag.edu.ng/",
            title: "UNILAG Post- UTME past questions 2012 to 2023",
        },
        {
            image: uniIbadan,
            link: "http://www.ui.edu.ng/",
            title: "UI Post- UTME past questions 2012 to 2023",
        },

    ]
}	


export default resourceNavigation;
