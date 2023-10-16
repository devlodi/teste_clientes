// Inicialize o Supabase
const supabaseUrl = 'https://mlidfbitwixionbixmzv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1saWRmYml0d2l4aW9uYml4bXp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc0NzgwODcsImV4cCI6MjAxMzA1NDA4N30.5lx39FmGKQpCI9euahCe_ljv-uCBYVqrbqccSlY-Oik';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);


// Função para adicionar cliente
async function addClient(nome, telefone) {
  const { data, error } = await supabase
    .from('clientes')
    .insert([
      { nome: nome, telefone: telefone }
    ]);
  
  if (error) {
    console.error('Erro ao adicionar cliente:', error);
  } else {
    console.log('Cliente adicionado com sucesso:', data);
  }
}

// Adicionar evento de submit ao formulário
document.getElementById('add-client-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nome = event.target.name.value;
  const telefone = event.target.phone.value;

  addClient(nome, telefone);
});
