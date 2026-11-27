import { useAparecer } from "../../hooks/useAparecer";
import { Sobre } from "./Sobre";
import { Tecnologias } from "./Tecnologias";


function Skills() {

    const { ref, visivel } = useAparecer<HTMLElement>();

    return (
        <section
            ref={ref}
            id="skills"
            className={`scroll-mt-20 sm:scroll-mt-24 transition-all duration-1000 ${visivel ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
        >

            <Sobre />
            <Tecnologias />

        </section>
    )
}

export default Skills;