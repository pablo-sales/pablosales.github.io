document.getElementById('input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const value = e.target.value;
        const output = document.getElementById('output');
        let response = '';

        if (value == '1') {
            response = '> Meu nome é Pablo, tenho 17 anos, sou estudante de Automação Industrial e apaixonado por tecnologia, mecânica e processos produtivos.';
        } else if (value == '2') {
            response = '> Habilidades: Raciocínio lógico, organização, disciplina, trabalho em equipe, curiosidade e vontade de aprender.';
        } else if (value == '3') {
            response = '> Contato: pablo@email.com';
        } else {
            response = '> Comando não reconhecido.';
        }

        const p = document.createElement('p');
        p.textContent = response;
        output.appendChild(p);
        e.target.value = '';
    }
});
