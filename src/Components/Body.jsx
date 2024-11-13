import { SectionBody, Linha1, SpanTime, SpanPlanner, Linha2, SpanInicie, SpanOrganizado } from "../Styles/Body.js"

const Body = () => {
    return(
        <SectionBody>
            <Linha1>Acesse o <SpanTime> Time</SpanTime><SpanPlanner>Planner</SpanPlanner></Linha1>
            <Linha2>& <SpanInicie> INICIE </SpanInicie><SpanOrganizado> o dia Organizado</SpanOrganizado></Linha2>
        </SectionBody>
    )
}

export default Body