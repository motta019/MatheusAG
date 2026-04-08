import { useState } from 'react'
import './App.css'

export default function App() {

  const TIPOS_CLIENTE = [
    { nome: "Marcearia", emoji: "🪵" },
    { nome: "Bebidas", emoji: "🧋" },
    { nome: "Limpeza", emoji: "🫧" },
    { nome: "Carne", emoji: "🥩" },
  ];

  const [nome, setNome] = useState("");
  const [saldo, setSaldo] = useState(100);
  const [ativo, setAtivo] = useState(true);
  const [tipo, setTipo] = useState(TIPOS_CLIENTE[0]);

  const gastar = () => {
    const novoSaldo = Math.max(0, saldo - 10);
    setSaldo(novoSaldo);
    setAtivo(novoSaldo > 0);
  }

  const recarregar = () => {
    setSaldo(100);
    setAtivo(true);
  }

  const pct = saldo / 100;
  const corBarra = pct > 0.5 ? "#005AA8" : pct > 0.25 ? "#EF4135" : "#A30000";

  return (
    <>
      <main style={{ background: "#f5f5f5", minHeight: "100vh" }}>
        <section style={{ textAlign: "center", padding: "20px" }}>
          
          <h1 style={{ color: "#005AA8" }}>Carrefour </h1>

          <div className="thumb" style={{ fontSize: "60px" }}>
            {ativo ? tipo.emoji : "❌"}
          </div>

          <input 
            type="text" 
            className='nome' 
            placeholder='Nome do Cliente'
            value={nome}
            onChange={(e) => setNome(e.target.value)}  
          />

          <div className="status">
            <p>Status</p>
            <p>Estoque disponível</p>
            <span>{ativo ? "Produto" : "Produto"}</span>
            <span>{ativo ? "disponivel" : "indisponivel"}</span>
          </div>

          <p id='pontosVida'>Estoque disponível: {saldo}/100</p>

          <div 
            className="barra" 
            style={{
              background: corBarra,
              height: "20px",
              borderRadius: "10px",
              margin: "10px 0"
            }}>
          </div>

          <button 
            className='BTacao'
            onClick={gastar}  
            disabled={!ativo}
            style={{ background: "#EF4135", color: "#fff", margin: "5px" }}
          >
            Fazer Compra
          </button>
          
          <button 
            className='BTacao2'
            onClick={recarregar}
            style={{ background: "#005AA8", color: "#fff", margin: "5px" }}
          >
            Recarregar Saldo
          </button>
          
          <div className="tipos">
            <button onClick={() => setTipo(TIPOS_CLIENTE[0])}>🪵 Marcearia</button>
            <button onClick={() => setTipo(TIPOS_CLIENTE[1])}>🧋 Bebidas</button>
            <button onClick={() => setTipo(TIPOS_CLIENTE[2])}>🫧 Limpeza</button>
            <button onClick={() => setTipo(TIPOS_CLIENTE[3])}>🥩 Carne</button>
          </div>

        </section>
      </main>
    </>
  )
}