import { useEffect, useState } from "react";

type Opcoes = {
  velocidadeDigitar?: number;
  velocidadeApagar?: number;
  pausaCompleta?: number;
  pausaApagado?: number;
};

export function useDigitando(
  frases: string[],
  {
    velocidadeDigitar = 90,
    velocidadeApagar = 45,
    pausaCompleta = 1800,
    pausaApagado = 400,
  }: Opcoes = {},
) {
  const [indiceFrase, setIndiceFrase] = useState(0);
  const [tamanho, setTamanho] = useState(0);
  const [apagando, setApagando] = useState(false);

  useEffect(() => {
    const frase = frases[indiceFrase];
    let atraso: number;
    let proximoPasso: () => void;

    if (!apagando && tamanho < frase.length) {
      atraso = velocidadeDigitar;
      proximoPasso = () => setTamanho(tamanho + 1);
    } else if (!apagando) {
      atraso = pausaCompleta;
      proximoPasso = () => setApagando(true);
    } else if (tamanho > 0) {
      atraso = velocidadeApagar;
      proximoPasso = () => setTamanho(tamanho - 1);
    } else {
      atraso = pausaApagado;
      proximoPasso = () => {
        setApagando(false);
        setIndiceFrase((indiceFrase + 1) % frases.length);
      };
    }

    const timer = setTimeout(proximoPasso, atraso);
    return () => clearTimeout(timer);
  }, [
    frases,
    indiceFrase,
    tamanho,
    apagando,
    velocidadeDigitar,
    velocidadeApagar,
    pausaCompleta,
    pausaApagado,
  ]);

  return frases[indiceFrase].slice(0, tamanho);
}