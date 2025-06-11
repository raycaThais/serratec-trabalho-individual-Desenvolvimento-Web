import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
import { ListaDeTarefasPage } from "../../pages/ListaDeTarefasPage/ListaDeTarefasPage";
import { BoasVindasPage } from "../../pages/BoasVindasPage/BoasVindasPage";
import { TemaPage } from "../../pages/TemaPage/TemaPage";

export function Rotas() {

    return(
        <Routes>
            <Route
            path="/"
            element={<HomePage/>}
            />
            <Route
            path="/lista-de-tarefas"
            element={<ListaDeTarefasPage/>}
            />
            <Route
            path="/boas-vindas"
            element={<BoasVindasPage/>}
            />
            <Route
            path="/tema"
            element={<TemaPage/>}
            />
        </Routes>
       
    )
}