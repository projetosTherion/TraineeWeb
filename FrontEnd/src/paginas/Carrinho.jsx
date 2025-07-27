import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useCarrinho } from '../contexts/CarrinhoContext';
import './Carrinho.css';

const schema = z.object({
    nome: z.string().nonempty('Nome é obrigatório'),
    email: z.string().email('Email inválido'),
    telefone: z
        .string()
        .min(14, 'Telefone incompleto')
        .regex(/\(\d{2}\) \d{4,5}-\d{4}/, 'Formato de telefone inválido'),
});

function Carrinho() {
    const navigate = useNavigate();
    const { itensCarrinho, removerDoCarrinho, atualizarQuantidade, limparCarrinho, calcularTotal } = useCarrinho();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [pedidoEnviado, setPedidoEnviado] = useState(false);
    const [numeroPedido, setNumeroPedido] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        setValue,
        reset
    } = useForm({
        resolver: zodResolver(schema),
        mode: 'onChange'
    });

    const handleTelefoneChange = (e) => {
        let valor = e.target.value.replace(/\D/g, '');

        if (valor.length <= 2) {
            valor = valor.replace(/^(\d{0,2})/, '($1');
        } else if (valor.length <= 6) {
            valor = valor.replace(/^(\d{2})(\d{0,4})/, '($1) $2');
        } else if (valor.length <= 10) {
            valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else {
            valor = valor.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
        }

        setValue('telefone', valor);
    };

    const onSubmit = async (data) => {
        try {
            setIsSubmitting(true);

            const total = calcularTotal();

            // Enviar pedido para o backend
            const response = await fetch('http://localhost:3000/processar-pedido', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome: data.nome,
                    email: data.email,
                    telefone: data.telefone,
                    itens: itensCarrinho,
                    total: total,
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || result.error || 'Erro ao processar pedido');
            }

            // Limpar o carrinho após o pedido bem-sucedido
            limparCarrinho();
            setNumeroPedido(result.numeroPedido);
            setPedidoEnviado(true);
            reset();

        } catch (error) {
            console.error('Erro ao finalizar pedido:', error);
            alert(`Erro ao finalizar pedido: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const total = calcularTotal();

    return (
        <div className="carrinho-container">
            <section className="carrinho-header">
                <div className="carrinho-header-overlay">
                    <div className="carrinho-header-pink-overlay"></div>
                </div>
                <h1 className="carrinho-title">Meu Carrinho</h1>
            </section>

            <section className="carrinho-content">
                <div className="carrinho-wrapper">
                    {pedidoEnviado ? (
                        <div className="pedido-sucesso">
                            <img
                                src={require("../assets/PanteraContato.png")}
                                alt="Pedido realizado"
                                className="pedido-sucesso-imagem"
                            />
                            <h2>Pedido realizado com sucesso!</h2>
                            <p>Seu número de pedido é: <strong>{numeroPedido}</strong></p>
                            <p>Enviamos um email com os detalhes da sua compra.</p>
                            <button
                                className="carrinho-botao-continuar"
                                onClick={() => navigate("/impressao3d")}
                            >
                                Continuar comprando
                            </button>
                        </div>
                    ) : itensCarrinho.length === 0 ? (
                        <div className="carrinho-vazio">
                            <img
                                src={require("../assets/PanteraContato.png")}
                                alt="Carrinho vazio"
                                className="carrinho-vazio-imagem"
                            />
                            <h2>Seu carrinho está vazio</h2>
                            <p>Adicione algum serviço ou produto para continuar</p>
                            <button
                                className="carrinho-botao-continuar"
                                onClick={() => navigate("/impressao3d")}
                            >
                                Ver serviços
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="carrinho-itens">
                                <div className="carrinho-cabecalho">
                                    <span className="cabecalho-produto">Produto</span>
                                    <span className="cabecalho-preco">Preço</span>
                                    <span className="cabecalho-quantidade">Quantidade</span>
                                    <span className="cabecalho-subtotal">Subtotal</span>
                                    <span className="cabecalho-acoes">Ações</span>
                                </div>

                                {itensCarrinho.map(item => (
                                    <div className="carrinho-item" key={item.id}>
                                        <div className="item-produto">
                                            <img src={item.imagem} alt={item.nome} className="item-imagem" />
                                            <span className="item-nome">{item.nome}</span>
                                        </div>
                                        <div className="item-preco">
                                            R$ {item.preco.toFixed(2)}
                                        </div>
                                        <div className="item-quantidade">
                                            <button
                                                className="quantidade-botao"
                                                onClick={() => {
                                                    if (item.quantidade <= 1) {
                                                        // Se a quantidade chegará a 0, remove o item
                                                        removerDoCarrinho(item.id);
                                                    } else {
                                                        // Caso contrário, diminui a quantidade
                                                        atualizarQuantidade(item.id, item.quantidade - 1);
                                                    }
                                                }}
                                            >
                                                -
                                            </button>
                                            <span className="quantidade-valor">{item.quantidade}</span>
                                            <button
                                                className="quantidade-botao"
                                                onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className="item-subtotal">
                                            R$ {(item.preco * item.quantidade).toFixed(2)}
                                        </div>
                                        <div className="item-acoes">
                                            <button
                                                className="remover-botao"
                                                onClick={() => removerDoCarrinho(item.id)}
                                            >
                                                Remover
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="carrinho-checkout">
                                <div className="formulario-container">
                                    <h3>Dados para finalizar a compra</h3>
                                    <form className="formulario-checkout" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-grupo">
                                            <label>Nome:</label>
                                            <input type="text" {...register('nome')} />
                                            {errors.nome && <small className="erro-form">{errors.nome.message}</small>}
                                        </div>

                                        <div className="form-grupo">
                                            <label>E-mail:</label>
                                            <input type="email" {...register('email')} />
                                            {errors.email && <small className="erro-form">{errors.email.message}</small>}
                                        </div>

                                        <div className="form-grupo">
                                            <label>Telefone:</label>
                                            <input
                                                type="text"
                                                {...register('telefone')}
                                                onChange={handleTelefoneChange}
                                            />
                                            {errors.telefone && <small className="erro-form">{errors.telefone.message}</small>}
                                        </div>
                                    </form>
                                </div>

                                <div className="carrinho-resumo">
                                    <h3>Resumo do pedido</h3>
                                    <div className="resumo-linha">
                                        <span>Subtotal:</span>
                                        <span>R$ {total.toFixed(2)}</span>
                                    </div>
                                    <div className="resumo-total">
                                        <span>Total:</span>
                                        <span>R$ {total.toFixed(2)}</span>
                                    </div>
                                    <button
                                        className={`carrinho-botao-finalizar ${!isValid ? 'botao-desabilitado' : ''}`}
                                        onClick={handleSubmit(onSubmit)}
                                        disabled={!isValid || isSubmitting || itensCarrinho.length === 0}
                                    >
                                        {isSubmitting ? 'Processando...' : 'Finalizar Pedido'}
                                    </button>
                                    <p className={`instrucao-form ${!isValid ? 'instrucao-erro' : 'instrucao-ok'}`}>
                                        {!isValid ? 'Preencha todos os campos obrigatórios para continuar' : 'Dados preenchidos corretamente!'}
                                    </p>
                                    <button
                                        className="carrinho-botao-continuar"
                                        onClick={() => navigate("/impressao3d")}
                                    >
                                        Continuar Comprando
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Carrinho;