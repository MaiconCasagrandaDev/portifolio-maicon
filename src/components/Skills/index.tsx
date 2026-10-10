import { dominadas, estudando } from "./Skills.data";
import { CardSkill } from "./CardSkills";
import { useAparecer } from "../../hooks/useAparecer";
import { CardFaculdade } from "./CardFaculdade";
import { Sobre } from "./Sobre";


function Skills() {

    const { ref, visivel } = useAparecer<HTMLElement>();

    return (
        <section
            ref={ref}
            id="skills"
            className={`scroll-mt-20 sm:scroll-mt-24 transition-all duration-1000 ${visivel ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
        >

            <Sobre />
            <CardFaculdade />

            <div className="mt-10 text-center">
                <p className="font-body text-sm text-text-tertiary mb-3">Tecnologias que já domino</p>

                <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto px-6">
                    {dominadas.map((skill) => (
                        <CardSkill key={skill.nome} {...skill} />
                    ))}
                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="font-body text-sm text-text-tertiary mb-3">Estudando Atualmente</p>

                <div className="flex flex-wrap justify-center gap-4">
                    {estudando.map((skill) => (
                        <CardSkill key={skill.nome} {...skill} />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Skills;