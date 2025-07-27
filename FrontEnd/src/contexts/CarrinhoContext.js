import React, { createContext, useState, useContext, useEffect } from 'react';

// Criar o contexto
const CarrinhoContext = createContext();

// Função para obter itens do localStorage
const getLocalStorage = () => {
  try {
    const itens = localStorage.getItem('carrinho');
    return itens ? JSON.parse(itens) : [];
  } catch (error) {
    console.error('Erro ao carregar dados do localStorage:', error);
    return [];
  }
};

// Provider do carrinho
export const CarrinhoProvider = ({ children }) => {
  const [itensCarrinho, setItensCarrinho] = useState(getLocalStorage());

  // Atualizar localStorage quando os itens mudarem
  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(itensCarrinho));
  }, [itensCarrinho]);

  // Adicionar item ao carrinho
  const adicionarAoCarrinho = (produto) => {
    setItensCarrinho(itensAtuais => {
      // Verificar se o produto já está no carrinho
      const itemExistente = itensAtuais.find(item => item.id === produto.id);
      
      if (itemExistente) {
        // Incrementar quantidade se já existir
        return itensAtuais.map(item => 
          item.id === produto.id 
            ? { ...item, quantidade: item.quantidade + 1 } 
            : item
        );
      } else {
        // Adicionar novo item ao carrinho
        return [...itensAtuais, { ...produto, quantidade: 1 }];
      }
    });
  };

  // Remover item do carrinho
  const removerDoCarrinho = (id) => {
    setItensCarrinho(itensAtuais => 
      itensAtuais.filter(item => item.id !== id)
    );
  };

  // Atualizar quantidade de um item
  const atualizarQuantidade = (id, quantidade) => {
    if (quantidade < 1) return;
    
    setItensCarrinho(itensAtuais => 
      itensAtuais.map(item => 
        item.id === id ? { ...item, quantidade } : item
      )
    );
  };

  // Limpar carrinho
  const limparCarrinho = () => {
    setItensCarrinho([]);
  };

  // Calcular total
  const calcularTotal = () => {
    return itensCarrinho.reduce((total, item) => 
      total + (item.preco * item.quantidade), 0
    );
  };

  return (
    <CarrinhoContext.Provider value={{
      itensCarrinho,
      adicionarAoCarrinho,
      removerDoCarrinho,
      atualizarQuantidade,
      limparCarrinho,
      calcularTotal
    }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error('useCarrinho deve ser usado dentro de um CarrinhoProvider');
  }
  return context;
};