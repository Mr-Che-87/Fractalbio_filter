import '../../css/style-new-with-filters.css'
import PlasticNavMenu from '../PlasticNavMenu/PlasticNavMenu'
import Nakonechniki from '../Nakonechniki/Nakonechniki'
import Probirki from '../Probirki/Probirki'
import Dozatori from '../Dozatori/Dozatori'
import Petri from '../Petri/Petri'
import Pipetki from '../Pipetki/Pipetki'
import OtherPlastic from '../OtherPlastic/OtherPlastic'

import { Routes, Route } from "react-router-dom";


export default function Main() {

   return (
    <>
      <PlasticNavMenu />
      <Routes>
        <Route path="/" element={<Nakonechniki />} />
        <Route path="/plastic-list" element={<Nakonechniki />} />
        <Route path="/plastic-list-probirki" element={<Probirki />} />
        <Route path="/plastic-list-dozatory" element={<Dozatori />} />
        <Route path="/plastic-list-chashki-petri" element={<Petri />} />
        <Route path="/plastic-list-pipetki" element={<Pipetki />} />
        <Route path="/plastic-list-prochee" element={<OtherPlastic />} />
      </Routes>
    </>
    
    
    )
}