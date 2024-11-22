import React from "react"
import { SectionBody, Linha1, SpanTime, SpanPlanner, Linha2, SpanInicie, SpanODia, SpanOrganizado, ButtonSubmit } from "../Styles/Body.js"
import Forms from "./Forms.jsx"

const Body = () => {

    const [identificador, setidentificador] = React.useState('')
    const [senha, setSenha] = React.useState('')

    return(
        <>
        <SectionBody>
            <Linha1>Acesse o <SpanTime>Time </SpanTime><SpanPlanner>Planner</SpanPlanner></Linha1>
            <Linha2>& <SpanInicie>INICIE </SpanInicie><SpanODia>o dia </SpanODia><SpanOrganizado>ORGANIZADO</SpanOrganizado></Linha2>
        </SectionBody>
        <Forms
                id='identificador'
                type='text'
                placeholder='Identificador do Funcionário '
                value={identificador}
                setValue={setidentificador}
        />
        <Forms
                id='senha'
                type='password'
                placeholder='Digite a senha'
                value={senha}
                setValue={setSenha}
        />
        <ButtonSubmit type="submit">Acessar</ButtonSubmit>
    </>
    )
}

export default Body