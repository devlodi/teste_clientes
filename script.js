// Importe a função createClient
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@latest/dist/umd/supabase.min.js';

// Inicialize o Supabase
const supabase = createClient('https://mlidfbitwixionbixmzv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1saWRmYml0d2l4aW9uYml4bXp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc0NzgwODcsImV4cCI6MjAxMzA1NDA4N30.5lx39FmGKQpCI9euahCe_ljv-uCBYVqrbqccSlY-Oik');
// Função para adicionar um cliente ao Supabase
async function adicionarCliente(nome, telefone) {
    try {
        const { data, error } = await supabase
            .from('clientes')
            .insert([{ nome: nome, telefone: telefone }]);
        if (error) throw error;
        alert('Cliente adicionado com sucesso!');
    } catch (error) {
        console.error('Erro:', error.message);
    }
}

// Adicione um ouvinte de evento ao formulário
document.getElementById('cliente-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    adicionarCliente(nome, telefone);
});
