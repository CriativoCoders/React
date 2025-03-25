// aqui vai chamar todos ele e o centralizador
import { Cabecalho } from "./componentes/Cabecalho";
import { BarraNavegacao } from "./componentes/BarraNavegacao";
import { Conteudo } from "./componentes/Conteudo";

function app(){
  return(
    <>
      <Cabecalho />
      <BarraNavegacao />
      <Conteudo />
    </>
  )

}
export default App;