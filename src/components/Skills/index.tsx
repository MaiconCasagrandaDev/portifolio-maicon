import { dominadas } from "./Skills.data";
import { CardSkill } from "./CardSkills";
import { useAparecer } from "../../hooks/useAparecer";
import { CardFaculdade } from "./CardFaculdade";
import { Sobre } from "./Sobre";
import { TambemUso } from "./TambemUso";


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

                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-2xl mx-4 sm:mx-auto">
                    {dominadas.map((skill) => (
                        <CardSkill key={skill.nome} {...skill} />
                    ))}
                </div>
            </div>

            <TambemUso />

        </section>
    )
}

export default Skills;